export const formatReleaseDate = (date: string): string => {
    const dateObj = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("cs-CZ", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(dateObj);

    return formattedDate;
};