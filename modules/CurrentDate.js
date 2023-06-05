import { DateTime } from 'luxon';

export function getCurrentDate() {
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);
  return formattedDate;
};