import { Post } from '@/ts/Blog';

export const generateAvailableMonths = (allPosts: Post[]): string[] => {
  const monthSet = new Set<string>();

  allPosts.forEach((post: Post) => {
    // post.dateから年月の部分だけを抽出
    const yearMonth = post.date.substring(0, 7); // "YYYY-MM"の形式を取得
    monthSet.add(yearMonth);
  });

  // 配列に変換してソート（降順）
  return Array.from(monthSet).sort((a, b) => b.localeCompare(a));
};
