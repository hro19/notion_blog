import { atomWithReset } from 'jotai/utils';
import { Post } from '@/ts/Blog';

//記事一覧
export const resultPostsAtom = atomWithReset<Post[] | null>(null);
