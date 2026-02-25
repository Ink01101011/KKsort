import { isString } from '../../utils/string';

describe('isString', () => {
  describe('String Values (should return true)', () => {
    test('should return true for regular string', () => {
      expect(isString('hello')).toBe(true);
    });

    test('should return true for empty string', () => {
      expect(isString('')).toBe(true);
    });

    test('should return true for string with spaces', () => {
      expect(isString('hello world')).toBe(true);
    });

    test('should return true for string with numbers', () => {
      expect(isString('123')).toBe(true);
    });

    test('should return true for string with special characters', () => {
      expect(isString('!@#$%^&*()')).toBe(true);
    });

    test('should return true for multiline string', () => {
      expect(isString('line1\nline2\nline3')).toBe(true);
    });

    test('should return true for string with unicode', () => {
      expect(isString('สวัสดี 🎉')).toBe(true);
    });

    test('should return true for template literal', () => {
      const template = `template string`;
      expect(isString(template)).toBe(true);
    });
  });

  describe('Non-String Values (should return false)', () => {
    test('should return false for number', () => {
      expect(isString(123)).toBe(false);
      expect(isString(0)).toBe(false);
      expect(isString(-456)).toBe(false);
      expect(isString(3.14)).toBe(false);
    });

    test('should return false for boolean', () => {
      expect(isString(true)).toBe(false);
      expect(isString(false)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isString(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isString(undefined)).toBe(false);
    });

    test('should return false for array', () => {
      expect(isString([])).toBe(false);
      expect(isString(['string'])).toBe(false);
      expect(isString([1, 2, 3])).toBe(false);
    });

    test('should return false for object', () => {
      expect(isString({})).toBe(false);
      expect(isString({ key: 'value' })).toBe(false);
    });

    test('should return false for function', () => {
      expect(isString(() => {})).toBe(false);
      expect(isString(function () {})).toBe(false);
    });

    test('should return false for Symbol', () => {
      expect(isString(Symbol('test'))).toBe(false);
    });

    test('should return false for BigInt', () => {
      expect(isString(BigInt(123))).toBe(false);
    });

    test('should return false for Date', () => {
      expect(isString(new Date())).toBe(false);
    });

    test('should return false for RegExp', () => {
      expect(isString(/test/)).toBe(false);
    });

    test('should return false for Error', () => {
      expect(isString(new Error('test'))).toBe(false);
    });

    test('should return false for Map', () => {
      expect(isString(new Map())).toBe(false);
    });

    test('should return false for Set', () => {
      expect(isString(new Set())).toBe(false);
    });

    test('should return false for WeakMap', () => {
      expect(isString(new WeakMap())).toBe(false);
    });

    test('should return false for WeakSet', () => {
      expect(isString(new WeakSet())).toBe(false);
    });
  });

  describe('Type Guard Behavior', () => {
    test('should work as type guard in conditional', () => {
      const value: unknown = 'test';

      if (isString(value)) {
        // TypeScript should know value is string here
        expect(value.toUpperCase()).toBe('TEST');
        expect(value.length).toBe(4);
      } else {
        fail('Should have been a string');
      }
    });

    test('should narrow type for union types', () => {
      const values: (string | number)[] = ['hello', 42, 'world', 100];
      const strings = values.filter(isString);

      expect(strings).toEqual(['hello', 'world']);
      expect(strings.length).toBe(2);
    });

    test('should work with array filter for type narrowing', () => {
      const mixed: unknown[] = [
        'string1',
        123,
        'string2',
        null,
        'string3',
        undefined,
        true,
        'string4',
      ];

      const onlyStrings = mixed.filter(isString);

      expect(onlyStrings).toEqual(['string1', 'string2', 'string3', 'string4']);
      expect(onlyStrings.length).toBe(4);

      // All elements should be strings
      onlyStrings.forEach((str) => {
        expect(typeof str).toBe('string');
      });
    });
  });

  describe('Edge Cases', () => {
    test('should return false for String object (not primitive)', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(isString(new String('test'))).toBe(false);
    });

    test('should handle NaN', () => {
      expect(isString(NaN)).toBe(false);
    });

    test('should handle Infinity', () => {
      expect(isString(Infinity)).toBe(false);
      expect(isString(-Infinity)).toBe(false);
    });

    test('should handle array-like objects', () => {
      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
      expect(isString(arrayLike)).toBe(false);
    });
  });
});
