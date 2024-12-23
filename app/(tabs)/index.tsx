import { ThemedView } from '../../components/ThemedView';
import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import { RecentTodos } from '../../components/RecentTodos'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderContainer } from '@/components/HeaderContainer';
import { Button } from '@/components/Button';
import { ThemedScrollView } from '@/components/ThemedScrollView';

function HomeScreen() {
  const todayDate = formatDate(new Date());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView>
        <HeaderContainer>
          <ThemedText type="title">
            Todos
          </ThemedText>

          <ThemedText>
            {todayDate}
          </ThemedText>
        </HeaderContainer>

        <ThemedView 
          className='p-0 my-2 items-baseline'
        >
          <Button
            title="Default"
          />
          <Button
            title="Primary"
            type="primary"
          />
          <Button
            title="Error"
            type="error"
          />
          <Button
            title="Success"
            type="success"
          />
          <RecentTodos/>
        </ThemedView>
      </ThemedScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen
