import { DATE_FORMAT, PARSED_DATE_FORMAT } from "@/constants/";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

export const formatPrice = (price: string) => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const formatDate = (date: string, inputFormat = DATE_FORMAT, outputFormat = PARSED_DATE_FORMAT) => {
    try {
        const parsedDate = parse(date, inputFormat, new Date());
        return format(parsedDate, outputFormat, { locale: ru });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Invalid date format:", err.message);
        } else {
            console.error("An unexpected error occurred while parsing the date");
        }
        return "Invalid Date";
    }
};
