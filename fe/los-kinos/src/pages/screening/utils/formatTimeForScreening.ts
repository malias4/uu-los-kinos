export const formatTimeForScreening = (date: Date): string => {
    return new Intl.DateTimeFormat('cs-CZ', {
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(date));
}