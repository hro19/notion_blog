import { describe, it, expect } from 'vitest';
import { generateAvailableMonths } from './generateAvailableMonths'; // 適切なパスに調整してください

describe('generateAvailableMonths', () => {
  it('should return an empty array for empty input', () => {
    const result = generateAvailableMonths([]);
    expect(result).toEqual([]);
  });

  it('should return unique months in descending order', () => {
    const posts: any = [
      { date: '2023-05-15', title: 'Post 1' },
      { date: '2023-04-20', title: 'Post 2' },
      { date: '2023-05-10', title: 'Post 3' },
      { date: '2023-03-05', title: 'Post 4' },
      { date: '2023-05-25', title: 'Post 5' },
    ];
    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2023-05', '2023-04', '2023-03']);
  });

  it('should handle posts from different years', () => {
    const posts: any = [
      { date: '2023-12-31', title: 'Post 1' },
      { date: '2024-01-01', title: 'Post 2' },
      { date: '2022-12-31', title: 'Post 3' },
    ];
    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2024-01', '2023-12', '2022-12']);
  });

  it('should handle posts with same date', () => {
    const posts: any = [
      { date: '2023-05-15', title: 'Post 1' },
      { date: '2023-05-15', title: 'Post 2' },
      { date: '2023-05-15', title: 'Post 3' },
    ];
    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2023-05']);
  });

  it('should ignore time part if present in date string', () => {
    const posts: any = [
      { date: '2023-05-15T12:00:00Z', title: 'Post 1' },
      { date: '2023-04-20T15:30:00Z', title: 'Post 2' },
    ];
    const result = generateAvailableMonths(posts);
    expect(result).toEqual(['2023-05', '2023-04']);
  });
});
