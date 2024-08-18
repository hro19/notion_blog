import { describe, it, expect } from 'vitest';
import { generateAvailableMonths } from './generateAvailableMonths';
import { Post } from '@/ts/Blog';

describe('generateAvailableMonths', () => {
  it('should generate correct months from given posts', () => {
    const posts: Post[] = [
      {
        id: '1',
        title: 'Post 1',
        date: '2023-05-15',
        tags: ['tag1'],
        slug: 'post-1',
        thumbnail: 'thumb1.jpg',
      },
      {
        id: '2',
        title: 'Post 2',
        date: '2023-05-20',
        tags: ['tag2'],
        slug: 'post-2',
        thumbnail: 'thumb2.jpg',
      },
      {
        id: '3',
        title: 'Post 3',
        date: '2023-06-10',
        tags: ['tag3'],
        slug: 'post-3',
        thumbnail: 'thumb3.jpg',
      },
      {
        id: '4',
        title: 'Post 4',
        date: '2023-07-05',
        tags: ['tag4'],
        slug: 'post-4',
        thumbnail: 'thumb4.jpg',
      },
    ];

    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2023/07', '2023/06', '2023/05']);
  });

  it('should handle posts from different years', () => {
    const posts: Post[] = [
      {
        id: '1',
        title: 'Post 1',
        date: '2022-12-31',
        tags: ['tag1'],
        slug: 'post-1',
        thumbnail: 'thumb1.jpg',
      },
      {
        id: '2',
        title: 'Post 2',
        date: '2023-01-01',
        tags: ['tag2'],
        slug: 'post-2',
        thumbnail: 'thumb2.jpg',
      },
      {
        id: '3',
        title: 'Post 3',
        date: '2023-12-31',
        tags: ['tag3'],
        slug: 'post-3',
        thumbnail: 'thumb3.jpg',
      },
      {
        id: '4',
        title: 'Post 4',
        date: '2024-01-01',
        tags: ['tag4'],
        slug: 'post-4',
        thumbnail: 'thumb4.jpg',
      },
    ];

    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2024/01', '2023/12', '2023/01', '2022/12']);
  });

  it('should return an empty array for empty input', () => {
    const result = generateAvailableMonths([]);
    expect(result).toEqual([]);
  });

  it('should handle posts with same month and year', () => {
    const posts: Post[] = [
      {
        id: '1',
        title: 'Post 1',
        date: '2023-05-01',
        tags: ['tag1'],
        slug: 'post-1',
        thumbnail: 'thumb1.jpg',
      },
      {
        id: '2',
        title: 'Post 2',
        date: '2023-05-15',
        tags: ['tag2'],
        slug: 'post-2',
        thumbnail: 'thumb2.jpg',
      },
      {
        id: '3',
        title: 'Post 3',
        date: '2023-05-31',
        tags: ['tag3'],
        slug: 'post-3',
        thumbnail: 'thumb3.jpg',
      },
    ];

    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2023/05']);
  });

  it('should handle posts with invalid dates', () => {
    const posts: Post[] = [
      {
        id: '1',
        title: 'Post 1',
        date: '2023-05-01',
        tags: ['tag1'],
        slug: 'post-1',
        thumbnail: 'thumb1.jpg',
      },
      {
        id: '2',
        title: 'Post 2',
        date: '2023-06-01',
        tags: ['tag2'],
        slug: 'post-2',
        thumbnail: 'thumb2.jpg',
      },
      {
        id: '3',
        title: 'Post 3',
        date: '2023-07-01',
        tags: ['tag3'],
        slug: 'post-3',
        thumbnail: 'thumb3.jpg',
      },
    ];

    const result = generateAvailableMonths(posts);
    expect(result).toEqual(expect.arrayContaining(['2023/06', '2023/05']));
  });
});
