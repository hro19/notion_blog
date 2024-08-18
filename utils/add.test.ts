// tests/math.test.ts

import { describe, it, expect } from 'vitest';
import { add } from './add';

describe('add function', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds a positive and a negative number correctly', () => {
    expect(add(5, -2)).toBe(3);
  });

  it('adds two negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('adds zero to a number correctly', () => {
    expect(add(7, 0)).toBe(7);
    expect(add(0, 7)).toBe(7);
  });

  it('adds two floating point numbers correctly', () => {
    expect(add(0.1, 0.2)).not.toBe(0.3);
  });

  // 新しいテストケース: not.toBe を、使用
  it('does not return an incorrect sum', () => {
    expect(add(2, 2)).not.toBe(5);
  });

  it('does not return one of its arguments', () => {
    const a = 10;
    const b = 5;
    expect(add(a, b)).not.toBe(a);
    expect(add(a, b)).not.toBe(b);
  });
});
