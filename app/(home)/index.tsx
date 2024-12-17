import { ThemedView } from '../../components/ThemedView';
import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import RecentTodos from '../../components/RecentTodos'
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  const todayDate = formatDate(new Date());

  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText type="title">
          Todos
        </ThemedText>

        <ThemedText>
          {todayDate}
        </ThemedText>

        <RecentTodos/>
      </ThemedView>
    </SafeAreaView> 
  );
}

export default HomeScreen
