import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import { HeaderContainer } from '@/components/HeaderContainer';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingScreen() {
  const todayDate = formatDate(new Date());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView>
        <HeaderContainer>
          <ThemedText type="title">
            Settings
          </ThemedText>
        </HeaderContainer>
      </ThemedScrollView> 
    </SafeAreaView>
   
  );
}

export default SettingScreen
