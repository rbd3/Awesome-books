import { DateTime } from 'luxon';

export const getCurrentDate = () => {
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);
  return formattedDate;
};