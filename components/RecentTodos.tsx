import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from './Button';
import { useThemeColor } from '@/hooks/useThemeColor';

type ItemProps = {date: string};

const DATA = [{date: '12/21/2024'}, {date: '12/22/2024'}, {date: '12/23/2024'}, {date: '12/24/2024'}, {date: '12/25/2024'}]

const Item = ({date}: ItemProps) => {

  return <View 
            className='flex justify-between flex-row items-center mb-2'
            style={getListStyle().default}
          >
            <ThemedText>{date}</ThemedText>
            <Button
              title="X"
              type="error"
              className="mb-0"
            />
        </View>
}

export function RecentTodos() {
  return (
    <ThemedView className='px-0 my-2'>
      <ThemedText className='mb-4' type="subtitle">
        Recent
      </ThemedText>

      <FlatList data={DATA} 
        renderItem={({item}) => <Item date={item.date} />}
        keyExtractor={item => item.date}
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
