export const formatTimeForScreeningRequest = (dateStr: string, timeStr: string): Date => {
  const date = new Date();
  const dateArr = dateStr.split('-')
  const timeArr = timeStr.split(':')

  date.setFullYear(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]))
  date.setHours(Number(timeArr[0]), Number(timeArr[1]))

  return date;
};
