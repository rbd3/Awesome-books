import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default getCurrentDate = () => {
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);
  return formattedDate;
}