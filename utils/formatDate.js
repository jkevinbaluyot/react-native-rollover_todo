import { format } from "date-fns";

export function formatDate(date) {
  const format_string = "MMMM dd, yyyy";

  return format(date, format_string);
}

export function formatDateList(date) {
  const format_string = "yyyy-MM-dd";

  return format(date, format_string);
}
