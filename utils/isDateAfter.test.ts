import { describe, it, expect } from 'vitest';
import { isDateInOrAfterSpecifiedMonth } from './isDateAfter'; // 関数のインポートパスを適切に調整してください

describe('isDateInOrAfterSpecifiedMonth', () => {
  it('returns true when date is within the specified month', () => {
    expect(isDateInOrAfterSpecifiedMonth('2023-02-01', '2023-02')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2023-02-28', '2023-02')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2023-01-30', '2023-02')).toBe(false);
  });

  it('returns true when date is after the specified month', () => {
    expect(isDateInOrAfterSpecifiedMonth('2023-03-01', '2023-02')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2023-12-31', '2023-02')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2024-01-01', '2023-02')).toBe(true);
  });

  it('returns false when date is before the specified month', () => {
    expect(isDateInOrAfterSpecifiedMonth('2023-01-31', '2023-02')).toBe(false);
    expect(isDateInOrAfterSpecifiedMonth('2022-12-31', '2023-02')).toBe(false);
  });

  it('handles single-digit months correctly', () => {
    expect(isDateInOrAfterSpecifiedMonth('2023-09-01', '2023-09')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2023-08-31', '2023-09')).toBe(false);
  });

  it('handles year transitions correctly', () => {
    expect(isDateInOrAfterSpecifiedMonth('2023-12-31', '2023-12')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2024-01-01', '2023-12')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2023-11-30', '2023-12')).toBe(false);
  });

  it('handles leap years correctly', () => {
    expect(isDateInOrAfterSpecifiedMonth('2024-02-29', '2024-02')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2024-03-03', '2024-02')).toBe(true);
    expect(isDateInOrAfterSpecifiedMonth('2024-01-31', '2024-02')).toBe(false);
  });
});
