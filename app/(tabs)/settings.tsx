import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import { HeaderContainer } from '@/components/HeaderContainer';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '../../components/ThemedView';
import { StyleSheet, Switch, View } from 'react-native';
import React, {useState} from 'react';
import { ThemedSwitch } from '@/components/ThemedSwitch';
import { useThemeColor } from '@/hooks/useThemeColor';

function SettingScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView>
        <HeaderContainer>
          <ThemedText type="title">
            Settings
          </ThemedText>
        </HeaderContainer>

        <ThemedView
          style={getSwitchContainerStyle().default}
        >
          <ThemedSwitch
            text="Roll over list"
          />
          <ThemedSwitch
            text="Create current day's todo list automatically"
          />
        </ThemedView>
      </ThemedScrollView> 
    </SafeAreaView>
   
  );
}


const getSwitchContainerStyle = () => {
  const borderColor = useThemeColor({}, 'border');

  return StyleSheet.create({
    default: {
      borderWidth: 4,
      borderColor: borderColor,
      borderRadius: 6
    }
  });
}

export default SettingScreen
