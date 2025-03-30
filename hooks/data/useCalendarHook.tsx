import { getListsByDateRange } from '@/actions/list.actions';
import { DatabaseContext } from '@/providers/DbProvider';
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import { listCalendarFormat } from '@/utils/listCalendarFormat';

type ItemProps = { date: string | undefined };

const useCalendarHook = ({
  date
}: ItemProps) => {
  const [calendarData, setCalendarData] = useState<any>({});
  const isFocused = useIsFocused();
  const [loaded, setLoaded] = useState(false);
  const { db_connection } = useContext(DatabaseContext);

  useEffect(() => {
    if(isFocused && db_connection !== null && date) {
      const today = new Date(date);
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const nextMonthFirstDay = new Date(today.getFullYear(), today.getMonth() + 1, 1);

      fetchCalendarData(db_connection, firstDayOfMonth.toISOString(), nextMonthFirstDay.toISOString());
    }
  }, [isFocused, date]);

  const fetchCalendarData = (db_connection: any, start_date: string, end_date: string) => {
    if (isFocused && db_connection !== null) {
      // Fetch data from the database using the provided connection and date range
      getListsByDateRange(db_connection, start_date, end_date)
        .then((result) => {
          const mappedData = listCalendarFormat(result);
          setCalendarData(mappedData);
          console.log(mappedData)
        })
        .catch((error) => {
          console.error('Error fetching calendar data:', error);
        });
    }
  };

  return {
    calendarData,
    setCalendarData,
    fetchCalendarData,
  };
};

export default useCalendarHook;