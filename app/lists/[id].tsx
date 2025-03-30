import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { HeaderContainer } from '@/components/HeaderContainer';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from '@/components/ListItem';
import { ListInput } from '@/components/ListInput';
import { getOrCreateList } from '@/actions/list.actions';
import { useContext, useEffect, useState } from 'react';
import { DatabaseContext } from '@/providers/DbProvider';
import { useIsFocused } from '@react-navigation/native';
import { getListItems } from '@/actions/list_item.actions';
import { List } from '@/models';
import { formatDate } from '@/utils/formatDate';

const DATA = [
  {id: '1', text: 'OMG 1 Ajksd ajsdka skdj aksdjak sdjkajskdajs dkjaskdjaksjdkajsdkajsdkjaksdjk', done: false}, 
  {id: '2', text: 'OMG 2', done: true}, 
  {id: '3', text: 'OMG 3', done: false}, 
  {id: '4', text: 'OMG 4', done: true}, 
  {id: '5', text: 'OMG 5', done: false},
  {id: '6', text: 'OMG 2', done: true}, 
  {id: '7', text: 'OMG 3', done: false}, 
  {id: '8', text: 'OMG 4', done: true}, 
  {id: '9', text: 'OMG 5', done: false},
]

// /list/[id]
function ListShow() {
  const { id } = useLocalSearchParams();
  const isFocused = useIsFocused();
  const [list_items, setListItems] = useState<any | []>([]);
  const [list, setList]= useState< List | null>(null)

  const { db_connection } = useContext(DatabaseContext)

  useEffect(() => {
    if(isFocused && db_connection !== null){
      const dateObj = new Date(id as string);
      const isoStr = dateObj.toISOString();

      getOrCreateList(db_connection, isoStr)
        .then(result => {
          if(result){
            setList(result)
            getListItems(db_connection, result.id).then(result => {
              setListItems(result)
            })
          }
        })
    }

    return () => {
      
    }
  }, [isFocused])

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className='relative'
    >
      <ThemedScrollView
        style={{ paddingBottom: 120 }}
      >
        <HeaderContainer>
            <ThemedText type={'title'}>
              { list?.date_string ? formatDate(list?.date_string) : 'List' }
            </ThemedText>
          </HeaderContainer>

          <ThemedView
            style={[getContainerStyle().default, { flex: 1 }]}
          >
            <FlatList data={list_items} 
              renderItem={({item}) => <ListItem id={item.id} text={item.text} done={item.done} />}
              keyExtractor={item => item.id}
              className='py-2'
              scrollEnabled={false}
            />
          </ThemedView>
      </ThemedScrollView>

      <ListInput id={list?.id}/>
    </SafeAreaView>
  );
}

const getContainerStyle = () => {
  const borderColor = useThemeColor({}, 'border');

  return StyleSheet.create({
    default: {
      borderWidth: 4,
      borderColor: borderColor,
      borderRadius: 6
    }
  });
}



export default ListShow
