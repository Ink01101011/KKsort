import { defaultCompare } from '../../utils';

describe('defaultCompare', () => {
  describe('Numbers', () => {
    test('should return -1 when first number is less than second', () => {
      expect(defaultCompare(1, 2)).toBe(-1);
    });

    test('should return 1 when first number is greater than second', () => {
      expect(defaultCompare(2, 1)).toBe(1);
    });

    test('should return 0 when numbers are equal', () => {
      expect(defaultCompare(5, 5)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(defaultCompare(-3, -1)).toBe(-1);
      expect(defaultCompare(-1, -3)).toBe(1);
      expect(defaultCompare(-2, -2)).toBe(0);
    });

    test('should throw for NaN values', () => {
      expect(() => defaultCompare(NaN, 1)).toThrow(TypeError);
      expect(() => defaultCompare(1, NaN)).toThrow(TypeError);
      expect(() => defaultCompare(NaN, NaN)).toThrow(TypeError);
    });
  });

  describe('Strings', () => {
    test('should return -1 when first string is less than second', () => {
      expect(defaultCompare('a', 'b')).toBe(-1);
    });

    test('should return 1 when first string is greater than second', () => {
      expect(defaultCompare('b', 'a')).toBe(1);
    });

    test('should return 0 when strings are equal', () => {
      expect(defaultCompare('hello', 'hello')).toBe(0);
    });
  });

  describe('BigInts', () => {
    test('should return -1 when first bigint is less than second', () => {
      expect(defaultCompare(1n, 2n)).toBe(-1);
    });

    test('should return 1 when first bigint is greater than second', () => {
      expect(defaultCompare(2n, 1n)).toBe(1);
    });

    test('should return 0 when bigints are equal', () => {
      expect(defaultCompare(5n, 5n)).toBe(0);
    });
  });

  describe('Booleans', () => {
    test('false should be less than true', () => {
      expect(defaultCompare(false, true)).toBe(-1);
    });

    test('true should be greater than false', () => {
      expect(defaultCompare(true, false)).toBe(1);
    });

    test('should return 0 when booleans are equal', () => {
      expect(defaultCompare(false, false)).toBe(0);
      expect(defaultCompare(true, true)).toBe(0);
    });
  });

  describe('Dates', () => {
    test('should return -1 when first date is earlier than second', () => {
      expect(
        defaultCompare(new Date('2020-01-01'), new Date('2021-01-01'))
      ).toBe(-1);
    });

    test('should return 1 when first date is later than second', () => {
      expect(
        defaultCompare(new Date('2021-01-01'), new Date('2020-01-01'))
      ).toBe(1);
    });

    test('should return 0 when dates are equal', () => {
      expect(
        defaultCompare(new Date('2020-01-01'), new Date('2020-01-01'))
      ).toBe(0);
    });

    test('should throw for invalid dates', () => {
      const invalidDate = new Date('invalid');
      const validDate = new Date('2020-01-01');
      expect(() => defaultCompare(invalidDate, invalidDate)).toThrow(TypeError);
      expect(() => defaultCompare(invalidDate, validDate)).toThrow(TypeError);
      expect(() => defaultCompare(validDate, invalidDate)).toThrow(TypeError);
    });
  });

  describe('Unsupported types', () => {
    test('should throw TypeError for objects', () => {
      expect(() => defaultCompare({}, {})).toThrow(TypeError);
    });

    test('should throw TypeError for arrays', () => {
      expect(() => defaultCompare([], [])).toThrow(TypeError);
    });

    test('should throw TypeError for mismatched types', () => {
      expect(() => defaultCompare<1 | '1'>(1, '1')).toThrow(TypeError);
      expect(() => defaultCompare<'a' | 1>('a', 1)).toThrow(TypeError);
    });
  });
});
