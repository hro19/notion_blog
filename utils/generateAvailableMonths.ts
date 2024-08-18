import { Post } from '@/ts/Blog';

export const generateAvailableMonths = (allPosts: Post[]): string[] => {
  const monthSet = new Set<string>();
  allPosts.forEach((post: Post) => {
    const date = new Date(post.date);
    const monthString = date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
    });
    monthSet.add(monthString);
  });

  return Array.from(monthSet).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );
};
