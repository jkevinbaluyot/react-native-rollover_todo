import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

function ListShow() {
  const { id } = useLocalSearchParams();

  return (
    <Text>List id: {id}</Text>
  );
}

export default ListShow
