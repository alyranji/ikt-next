import { toJalaali } from 'jalaali-js';

export default function convertToJalali(gmtdate) {
  try {
    const newDate = new Date(gmtdate);
    if (isNaN(newDate)) {
      console.error('Invalid Date:', gmtdate);
      return 'Invalid Date';
    }
    const jDate = toJalaali(
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      newDate.getDate(),
    );
    return `${jDate.jy}/${jDate.jm}/${jDate.jd}`;
  } catch (error) {
    console.error('Error converting date:', error, gmtdate);
    return 'Invalid Date';
  }
}
