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


function ListShow() {
  const { id } = useLocalSearchParams();

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
              {id}
            </ThemedText>
          </HeaderContainer>

          <ThemedView
            style={[getContainerStyle().default, { flex: 1 }]}
          >
            <FlatList data={DATA} 
              renderItem={({item}) => <ListItem id={item.id} text={item.text} done={item.done} />}
              keyExtractor={item => item.id}
              className='py-2'
              scrollEnabled={false}
            />
          </ThemedView>
      </ThemedScrollView>

      <ListInput id={id}/>
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
