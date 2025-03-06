import { formatDateForScreeningDatePicker } from "./formatDateForScreeningDatePicker";

export const getDaysForScreenings = (): Date[] => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 15; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        dates.push(nextDate);
    }

    return dates;
};