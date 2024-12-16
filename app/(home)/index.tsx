import styles from '../styles.tsx';
import { View, Text } from 'react-native';
import { formatDate } from '../../utils/formatDate.js';

function HomeScreen() {
  const todayDate = formatDate(new Date());

  return (
    <View>
      <h2 style={styles.header}>Todos</h2>
      <Text style={styles.baseText}>Date: {todayDate}</Text>
    </View>
  );
}

export default HomeScreen
