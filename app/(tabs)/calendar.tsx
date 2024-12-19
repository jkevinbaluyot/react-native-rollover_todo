import { formatDate } from '../../utils/formatDate.js';
import { ThemedText } from '../../components/ThemedText';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { HeaderContainer } from '@/components/HeaderContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { Button } from '@/components/Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';
 
LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S.', 'M.', 'T.', 'W.', 'Th.', 'F.', 'Sat.'],
  today: "Today"
};

LocaleConfig.defaultLocale = 'fr';

function selectedDate(date?: object) {
  console.log(date)
} 

function monthChanged(date?: object) {
  console.log(date)
} 

function CalendarScreen() {
  const color = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');
  const primary = useThemeColor({}, 'primary');

  const calendar_theme = {
      backgroundColor: backgroundColor,
      calendarBackground: backgroundColor,
      textSectionTitleColor: '#b6c1cd',
      selectedDayBackgroundColor: '#00adf5',
      selectedDayTextColor: '#ffffff',
      todayTextColor: primary,
      dayTextColor: color,
      textDisabledColor: '#d9e1e8',
      dotColor: primary,
      selectedDotColor: '#ffffff',
      arrowColor: color,
      monthTextColor: primary,
      indicatorColor: primary,
      textDayFontFamily: 'PressStart2P',
      textMonthFontFamily: 'PressStart2P',
      textDayHeaderFontFamily: 'PressStart2P',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView>
        <HeaderContainer>
          <ThemedText type="title">
            Calendar
          </ThemedText>
        </HeaderContainer>

        <ThemedView
          style={getCalendarStyle().default}
        >
          <Calendar 
            onDayPress={selectedDate}
            onMonthChange={monthChanged}
            theme={calendar_theme}
            markedDates={{
              '2024-12-01': {marked: true},
              '2024-12-02': {marked: true},
              '2024-12-03': {marked: true}
            }}
          />
        </ThemedView>

      </ThemedScrollView>
    </SafeAreaView>
  );
}

const getCalendarStyle = () => {
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

export default CalendarScreen
