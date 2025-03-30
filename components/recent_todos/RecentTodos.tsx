import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from '../Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { getRecentLists } from '../../actions/list.actions';
import { DatabaseContext } from '@/providers/DbProvider';
import { useIsFocused } from "@react-navigation/native";
import { formatDateList } from '@/utils/formatDate';
import useRecentTodoHook from './useRecentTodoHook';
import { List } from '@/models';

export function RecentTodos() {
  const { recentTodos, setRecentTodos, handleDelete } = useRecentTodoHook();
  
  const Item = ({id, date_string}: List) => {

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
                onClick={() => handleDelete(id)}
              />
          </View>
  }  

  return (
    <ThemedView className='px-0 my-2'>
      <ThemedText className='mb-4' type="subtitle">
        Recent
      </ThemedText>

      <FlatList data={recentTodos} 
        renderItem={({item}) => <Item id={item.id} date_string={item.date_string} />}
        keyExtractor={item => item.id.toString()}
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