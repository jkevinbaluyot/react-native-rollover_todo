import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { HeaderContainer } from '@/components/HeaderContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

function CalendarScreen() {
  const todayDate = formatDate(new Date());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView>
        <HeaderContainer>
          <ThemedText type="title">
            Calendar
          </ThemedText>
        </HeaderContainer>
      </ThemedScrollView>
    </SafeAreaView>
  );
}

export default CalendarScreen
