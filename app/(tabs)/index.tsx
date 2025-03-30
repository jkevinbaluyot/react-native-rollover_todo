import { ThemedView } from '../../components/ThemedView';
import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import { RecentTodos } from '../../components/recent_todos/RecentTodos'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderContainer } from '@/components/HeaderContainer';
import { ThemedScrollView } from '@/components/ThemedScrollView';

function HomeScreen() {
  const todayDate = formatDate(new Date());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView>
        <HeaderContainer>
          <ThemedText type="title">
            Home
          </ThemedText>
        </HeaderContainer>

        <ThemedView 
          className='p-0 my-2 items-baseline'
        >
          <RecentTodos/>
        </ThemedView>
      </ThemedScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen
