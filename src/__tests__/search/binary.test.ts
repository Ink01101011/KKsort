import { binarySearch } from '../../algorithms/search';

describe('binarySearch', () => {
  describe('Basic Search', () => {
    test('should find element in sorted array', () => {
      const numbers = [1, 3, 5, 7, 9, 11, 13];
      const result = binarySearch(numbers, 7);
      expect(result).toBe(3);
    });

    test('should return -1 when element not found', () => {
      const numbers = [1, 3, 5, 7, 9];
      const result = binarySearch(numbers, 6);
      expect(result).toBe(-1);
    });

    test('should find element at start of array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = binarySearch(numbers, 1);
      expect(result).toBe(0);
    });

    test('should find element at end of array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = binarySearch(numbers, 5);
      expect(result).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = binarySearch([], 42);
      expect(result).toBe(-1);
    });

    test('should handle single element array with match', () => {
      const numbers = [42];
      const result = binarySearch(numbers, 42);
      expect(result).toBe(0);
    });

    test('should handle single element array without match', () => {
      const numbers = [42];
      const result = binarySearch(numbers, 10);
      expect(result).toBe(-1);
    });

    test('should handle two element array', () => {
      const numbers = [1, 2];
      expect(binarySearch(numbers, 1)).toBe(0);
      expect(binarySearch(numbers, 2)).toBe(1);
      expect(binarySearch(numbers, 3)).toBe(-1);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [1, 2, 2, 2, 3, 4, 5];
      const result = binarySearch(numbers, 2);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });
  });

  describe('String Search', () => {
    test('should find string in sorted array', () => {
      const strings = ['apple', 'banana', 'cherry', 'date'];
      const result = binarySearch(strings, 'cherry', (a, b) =>
        a.localeCompare(b)
      );
      expect(result).toBe(2);
    });

    test('should not find string when not in array', () => {
      const strings = ['apple', 'banana', 'date'];
      const result = binarySearch(strings, 'cherry', (a, b) =>
        a.localeCompare(b)
      );
      expect(result).toBe(-1);
    });
  });

  describe('Custom Comparator', () => {
    test('should use custom comparator function', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = binarySearch(numbers, 3, (a, b) => a - b);
      expect(result).toBe(2);
    });

    test('should respect comparator for objects', () => {
      const users = [
        { id: 1, name: 'Alice' },
        { id: 3, name: 'Bob' },
        { id: 5, name: 'Charlie' },
      ];
      const result = binarySearch(
        users,
        { id: 3, name: 'Bob' },
        (a, b) => a.id - b.id
      );
      expect(result).toBe(1);
    });
  });

  describe('Negative Numbers', () => {
    test('should find negative numbers', () => {
      const numbers = [-9, -5, -2, 0, 3, 7];
      const result = binarySearch(numbers, -5);
      expect(result).toBe(1);
    });

    test('should handle all negative numbers', () => {
      const numbers = [-10, -5, -3, -1];
      const result = binarySearch(numbers, -3);
      expect(result).toBe(2);
    });
  });

  describe('Performance', () => {
    test('should efficiently search large sorted array', () => {
      const numbers = Array.from({ length: 10000 }, (_, i) => i);
      const result = binarySearch(numbers, 5000);
      expect(result).toBe(5000);
    });
  });
});
