export const formatDateForScreeningDatePicker = (date: Date) => {
    return new Intl.DateTimeFormat('cs-CZ', {
        day: '2-digit',
        month: '2-digit'
    }).format(new Date(date));
}