import { linearSearch } from '../../algorithms/search';

describe('linearSearch', () => {
  describe('Basic Search', () => {
    test('should find element in unsorted array', () => {
      const numbers = [5, 2, 8, 1, 9, 3];
      const result = linearSearch(numbers, 8);
      expect(result).toBe(2);
    });

    test('should return -1 when element not found', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = linearSearch(numbers, 7);
      expect(result).toBe(-1);
    });

    test('should find element at start of array', () => {
      const numbers = [42, 1, 2, 3, 4];
      const result = linearSearch(numbers, 42);
      expect(result).toBe(0);
    });

    test('should find element at end of array', () => {
      const numbers = [1, 2, 3, 4, 42];
      const result = linearSearch(numbers, 42);
      expect(result).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    test('should return -1 for empty array', () => {
      expect(linearSearch([], 1)).toBe(-1);
    });

    test('should handle single element array with match', () => {
      const numbers = [42];
      const result = linearSearch(numbers, 42);
      expect(result).toBe(0);
    });

    test('should handle single element array without match', () => {
      const numbers = [42];
      const result = linearSearch(numbers, 10);
      expect(result).toBe(-1);
    });

    test('should handle two element array', () => {
      const numbers = [1, 2];
      expect(linearSearch(numbers, 1)).toBe(0);
      expect(linearSearch(numbers, 2)).toBe(1);
      expect(linearSearch(numbers, 3)).toBe(-1);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [1, 2, 2, 2, 3, 4, 5];
      const result = linearSearch(numbers, 2);
      expect(result).toBe(1); // Should find first occurrence
    });

    test('should find first occurrence of duplicate', () => {
      const numbers = [5, 3, 5, 5, 1];
      const result = linearSearch(numbers, 5);
      expect(result).toBe(0);
    });
  });

  describe('String Search', () => {
    test('should find string in array', () => {
      const strings = ['apple', 'banana', 'cherry', 'date'];
      const result = linearSearch(strings, 'cherry', (a, b) =>
        a.localeCompare(b)
      );
      expect(result).toBe(2);
    });

    test('should not find string when not in array', () => {
      const strings = ['apple', 'banana', 'date'];
      const result = linearSearch(strings, 'cherry', (a, b) =>
        a.localeCompare(b)
      );
      expect(result).toBe(-1);
    });
  });

  describe('Custom Comparator', () => {
    test('should use custom comparator function', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = linearSearch(numbers, 8, (a, b) => a - b);
      expect(result).toBe(2);
    });

    test('should respect comparator for objects', () => {
      const users = [
        { id: 3, name: 'Bob' },
        { id: 1, name: 'Alice' },
        { id: 5, name: 'Charlie' },
      ];
      const result = linearSearch(
        users,
        { id: 5, name: 'Charlie' },
        (a, b) => a.id - b.id
      );
      expect(result).toBe(2);
    });
  });

  describe('Negative Numbers', () => {
    test('should find negative numbers', () => {
      const numbers = [3, -5, 7, -2, 0];
      const result = linearSearch(numbers, -5);
      expect(result).toBe(1);
    });

    test('should handle all negative numbers', () => {
      const numbers = [-10, -5, -3, -1];
      const result = linearSearch(numbers, -3);
      expect(result).toBe(2);
    });
  });

  describe('Type Flexibility', () => {
    test('should work with unsorted arrays (advantage over binary search)', () => {
      const numbers = [10, 5, 20, 8, 15];
      expect(linearSearch(numbers, 20)).toBe(2);
      expect(linearSearch(numbers, 8)).toBe(3);
    });
  });
});
