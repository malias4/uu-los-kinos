export const formatDateForScreening = (date: Date) => {
    return new Intl.DateTimeFormat('cs-CZ', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));
}