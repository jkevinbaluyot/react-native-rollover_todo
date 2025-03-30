import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from './Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { getRecentLists } from '../actions/list.actions';
import { DatabaseContext } from '@/providers/DbProvider';
import { useIsFocused } from "@react-navigation/native";
import { formatDateList } from '@/utils/formatDate';

type ItemProps = {id: number, date_string: string};

const DATA = [{id: 1, date_string: '12-21-2024'}, {id: 2, date_string: '12-22-2024'}, {id: 3, date_string: '12-23-2024'}, {id: 4, date_string: '12-24-2024'}, {id: 5, date_string: '12-25-2024'}]

export function RecentTodos() {
  const {db_connection} = useContext(DatabaseContext);
  const [ lists, setLists ] = useState<any | []>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused && db_connection !== null){
      getRecentLists(db_connection)
      .then(result => setLists(result))  
    }

    return () => {
    }
  }, [isFocused])  

  return (
    <ThemedView className='px-0 my-2'>
      <ThemedText className='mb-4' type="subtitle">
        Recent
      </ThemedText>

      <FlatList data={lists} 
        renderItem={({item}) => <Item id={item.id} date_string={item.date_string} />}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </ThemedView>
  );
}

const getListStyle = () => {
  const borderColor = useThemeColor({}, 'border');

  return StyleSheet.create({
    default: {
      borderWidth: 4,
      borderColor: borderColor,
      borderRadius: 6,
      padding: 8
    }
  });
}

const Item = ({id, date_string}: ItemProps) => {

  return <View 
            className='flex justify-between flex-row items-center mb-2'
            style={getListStyle().default}
          >
            <Link 
              href={{
                pathname: '/lists/[id]', 
                params:{ id: date_string} }}
            >
              <ThemedText>{formatDateList(date_string)}</ThemedText>
            </Link>
            <Button
              title="X"
              type="error"
              className="mb-0"
            />
        </View>
}

