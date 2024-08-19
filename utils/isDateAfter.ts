import { parseISO, isAfter, isSameMonth, startOfMonth } from 'date-fns';

// 指定された日付が特定の月以降かどうかをチェックする関数
export const isDateInOrAfterSpecifiedMonth = (
  dateToCheck: string,
  specifiedMonth: string
): boolean => {
  const date = parseISO(dateToCheck);

  // specifiedMonth を完全な日付形式に変換 (例: "2023-2" -> "2023-02-01")
  const specifiedMonthDate = parseISO(`${specifiedMonth}-01`);

  // 日付が指定された月と同じか、それ以降かをチェック
  return (
    isSameMonth(date, specifiedMonthDate) || isAfter(date, specifiedMonthDate)
  );
};
