import { ThemedText } from '../../components/ThemedText';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { HeaderContainer } from '@/components/HeaderContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { DatabaseContext } from '@/providers/DbProvider';
import useCalendarHook from '@/hooks/data/useCalendarHook';
import { set } from 'date-fns';

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
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S.', 'M.', 'T.', 'W.', 'Th.', 'F.', 'Sat.'],
  today: "Today"
};

LocaleConfig.defaultLocale = 'fr';

function CalendarScreen() {
  const color = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');
  const primary = useThemeColor({}, 'primary');
  const isFocused = useIsFocused();
  const { db_connection } = useContext(DatabaseContext);
  const [selected_date, setSelectedDate] = useState(new Date().toISOString());
  const { calendarData, setCalendarData, fetchCalendarData } = useCalendarHook({ date: selected_date });

  function monthChanged(date?: any) {
    const day = new Date(date.dateString);
    const start_date = new Date(day.getFullYear(), day.getMonth(), 1);
    const end_date = new Date(day.getFullYear(), day.getMonth() + 1, 1);

    fetchCalendarData(db_connection, start_date.toISOString(), end_date.toISOString());
  } 

    
  function selectedDate(date?: any) {
    setSelectedDate(date.dateString);
    router.push(`/lists/${date?.dateString}`, { relativeToDirectory: true })
  } 

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
          className='my-2 p-1 md:p-5'
        >
          <Calendar 
            onDayPress={selectedDate}
            onMonthChange={monthChanged}
            theme={calendar_theme}
            markedDates={calendarData}
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
      borderRadius: 6
    }
  });
}

export default CalendarScreen
