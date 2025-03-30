import { formatDateList } from "./formatDate";

export const listCalendarFormat = (lists) => {
    let obj = {}
    lists.map((list) => {  
        const { date_string, ...rest } = list;
        const formattedDate = formatDateList(date_string);
        obj[formattedDate] = { marked: true};
    })

    return obj
};