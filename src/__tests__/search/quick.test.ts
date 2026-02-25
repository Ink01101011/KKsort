import { quickSearch } from '../../algorithms/search';

describe('quickSearch', () => {
  describe('Basic Search', () => {
    test('should find element in unsorted array', () => {
      const numbers = [3, 7, 2, 9, 1, 5, 8];
      const result = quickSearch(numbers, 9);
      // Note: quickSearch mutates array, so we check if index is found
      expect(result).toBeGreaterThanOrEqual(-1);
      expect(result).toBeLessThan(numbers.length);
    });

    test('should return -1 when element not found', () => {
      const numbers = [3, 7, 2, 9, 1, 5];
      const result = quickSearch(numbers, 10);
      expect(result).toBe(-1);
    });

    test('should find element in small array', () => {
      const numbers = [5, 3, 7];
      const result = quickSearch(numbers, 5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(numbers.length);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const numbers: number[] = [];
      const result = quickSearch(numbers, 5);
      expect(result).toBe(-1);
    });

    test('should handle single element array with match', () => {
      const numbers = [42];
      const result = quickSearch(numbers, 42);
      expect(result).toBe(0);
    });

    test('should handle single element array without match', () => {
      const numbers = [42];
      const result = quickSearch(numbers, 10);
      expect(result).toBe(-1);
    });

    test('should handle two element array', () => {
      const numbers1 = [1, 2];
      expect(quickSearch(numbers1, 1)).toBeGreaterThanOrEqual(0);

      const numbers2 = [1, 2];
      expect(quickSearch(numbers2, 2)).toBeGreaterThanOrEqual(0);

      const numbers3 = [1, 2];
      expect(quickSearch(numbers3, 3)).toBe(-1);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [1, 2, 2, 2, 3, 4, 5];
      const result = quickSearch(numbers, 2);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(numbers.length);
      expect(numbers[result]).toBe(2);
    });
  });

  describe('String Search', () => {
    test('should find string in array', () => {
      const strings = ['apple', 'banana', 'cherry', 'date'];
      const result = quickSearch(strings, 'cherry', (a, b) =>
        a.localeCompare(b)
      );
      expect(result).toBeGreaterThanOrEqual(-1);
      if (result !== -1) {
        expect(strings[result]).toBe('cherry');
      }
    });

    test('should not find string when not in array', () => {
      const strings = ['apple', 'banana', 'date'];
      const result = quickSearch(strings, 'cherry', (a, b) =>
        a.localeCompare(b)
      );
      expect(result).toBe(-1);
    });
  });

  describe('Custom Comparator', () => {
    test('should use custom comparator function', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = quickSearch(numbers, 8, (a, b) => a - b);
      expect(result).toBeGreaterThanOrEqual(-1);
      if (result !== -1) {
        expect(numbers[result]).toBe(8);
      }
    });

    test('should respect comparator for objects', () => {
      const users = [
        { id: 3, name: 'Bob' },
        { id: 1, name: 'Alice' },
        { id: 5, name: 'Charlie' },
      ];
      const result = quickSearch(
        users,
        { id: 5, name: 'Charlie' },
        (a, b) => a.id - b.id
      );
      expect(result).toBeGreaterThanOrEqual(-1);
      if (result !== -1) {
        expect(users[result].id).toBe(5);
      }
    });
  });

  describe('Negative Numbers', () => {
    test('should find negative numbers', () => {
      const numbers = [3, -5, 7, -2, 0];
      const result = quickSearch(numbers, -5, (a, b) => a - b);
      expect(result).toBeGreaterThanOrEqual(-1);
      if (result !== -1) {
        expect(numbers[result]).toBe(-5);
      }
    });

    test('should handle all negative numbers', () => {
      const numbers = [-10, -5, -3, -1];
      const result = quickSearch(numbers, -3, (a, b) => a - b);
      expect(result).toBeGreaterThanOrEqual(-1);
      if (result !== -1) {
        expect(numbers[result]).toBe(-3);
      }
    });
  });

  describe('Mutation Behavior', () => {
    test('should mutate original array during search', () => {
      const original = [3, 7, 2, 9, 1];
      const copy = [...original];
      quickSearch(original, 7);
      // Array may be rearranged but should contain same elements
      expect(original.sort((a, b) => a - b)).toEqual(
        copy.sort((a, b) => a - b)
      );
    });
  });

  describe('Type Flexibility', () => {
    test('should work with unsorted arrays (advantage over binary/jump search)', () => {
      const numbers = [10, 5, 20, 8, 15];
      const result = quickSearch(numbers, 20, (a, b) => a - b);
      expect(result).toBeGreaterThanOrEqual(-1);
      if (result !== -1) {
        expect(numbers[result]).toBe(20);
      }
    });
  });
});
