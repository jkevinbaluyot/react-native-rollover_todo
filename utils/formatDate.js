import { format } from "date-fns";

export function formatDate(date) {
  const format_string = "MMMM do, yyyy";

  return format(date, format_string);
}
