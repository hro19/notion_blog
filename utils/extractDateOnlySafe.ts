import { parseISO, format } from 'date-fns';

export const extractDateOnlySafe = (dateString: string): string | null => {
  try {
    const date = parseISO(dateString);
    if (isNaN(date.getTime())) {
      return null; // 無効な日付の場合
    }
    return format(date, 'yyyy-MM');
  } catch (error) {
    console.error('Invalid date string:', error);
    return null;
  }
};
