import { formatDate } from '../utils/formatDate.js';
import { ThemedText } from './ThemedText';

function RecentTodos() {
  const todayDate = formatDate(new Date());

  return (
    <ThemedText type="subtitle">
      Recent
    </ThemedText>
  );
}

export default RecentTodos
