import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getCurrentDate = () => {
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);
  return formattedDate;
};

export default getCurrentDate;
