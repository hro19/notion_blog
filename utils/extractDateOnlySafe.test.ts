import { describe, it, expect, vi } from 'vitest';
import { extractDateOnlySafe } from './extractDateOnlySafe'; // 関数のインポートパスを適切に調整してください

describe('extractDateOnlySafe', () => {
  it('extracts date correctly from valid ISO string with time', () => {
    expect(extractDateOnlySafe('2023-06-23T14:30:00Z')).toBe('2023-06');
  });

  it('extracts date correctly from valid ISO string without time', () => {
    expect(extractDateOnlySafe('2023-06-23')).toBe('2023-06');
  });

  it('extracts date correctly from valid ISO string with timezone offset', () => {
    expect(extractDateOnlySafe('2023-06-23T14:30:00+09:00')).toBe('2023-06');
  });

  it('returns null for invalid date string', () => {
    expect(extractDateOnlySafe('Invalid Date')).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(extractDateOnlySafe('')).toBeNull();
  });

  it('returns null for non-string input', () => {
    expect(extractDateOnlySafe(123 as any)).toBeNull();
    expect(extractDateOnlySafe(null as any)).toBeNull();
    expect(extractDateOnlySafe(undefined as any)).toBeNull();
  });

  it('handles leap year correctly', () => {
    expect(extractDateOnlySafe('2024-02-29')).toBe('2024-02');
  });

  it('handles leap year not correctly', () => {
    expect(extractDateOnlySafe('2024-02-29')).not.toBe('2023-02');
  });
});
