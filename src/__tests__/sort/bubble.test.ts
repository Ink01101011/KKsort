import { bubbleSort } from '../../algorithms/sort';

describe('bubbleSort', () => {
  describe('Basic Sorting', () => {
    test('should sort numbers in ascending order', () => {
      const numbers = [64, 34, 25, 12, 22, 11, 90];
      const result = bubbleSort(numbers, (a, b) => a - b);
      expect(result).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('should sort numbers in descending order', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = bubbleSort(numbers, (a, b) => b - a);
      expect(result).toEqual([9, 8, 5, 2, 1]);
    });

    test('should sort strings alphabetically', () => {
      const strings = ['banana', 'apple', 'cherry', 'date'];
      const result = bubbleSort(strings, (a, b) => a.localeCompare(b));
      expect(result).toEqual(['apple', 'banana', 'cherry', 'date']);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = bubbleSort([], (a, b) => a - b);
      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const result = bubbleSort([42], (a, b) => a - b);
      expect(result).toEqual([42]);
    });

    test('should handle array with two elements', () => {
      const result = bubbleSort([2, 1], (a, b) => a - b);
      expect(result).toEqual([1, 2]);
    });

    test('should handle already sorted array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = bubbleSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const numbers = [5, 4, 3, 2, 1];
      const result = bubbleSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = bubbleSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    test('should handle array with all same values', () => {
      const numbers = [5, 5, 5, 5, 5];
      const result = bubbleSort(numbers, (a, b) => a - b);
      expect(result).toEqual([5, 5, 5, 5, 5]);
    });
  });

  describe('Object Sorting', () => {
    test('should sort objects by property', () => {
      const students = [
        { name: 'Alice', grade: 85 },
        { name: 'Bob', grade: 92 },
        { name: 'Charlie', grade: 78 },
      ];
      const result = bubbleSort(students, (a, b) => a.grade - b.grade);
      expect(result).toEqual([
        { name: 'Charlie', grade: 78 },
        { name: 'Alice', grade: 85 },
        { name: 'Bob', grade: 92 },
      ]);
    });

    test('should sort objects by descending property', () => {
      const students = [
        { name: 'Alice', grade: 85 },
        { name: 'Bob', grade: 92 },
        { name: 'Charlie', grade: 78 },
      ];
      const result = bubbleSort(students, (a, b) => b.grade - a.grade);
      expect(result).toEqual([
        { name: 'Bob', grade: 92 },
        { name: 'Alice', grade: 85 },
        { name: 'Charlie', grade: 78 },
      ]);
    });
  });

  describe('Immutability', () => {
    test('should not mutate the original array', () => {
      const original = [3, 1, 4, 1, 5, 9, 2, 6];
      const copy = [...original];
      bubbleSort(original, (a, b) => a - b);
      expect(original).toEqual(copy);
    });
  });

  describe('Without Comparator', () => {
    test('should sort numbers without comparator using default comparison', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = bubbleSort(numbers);
      expect(result).toEqual([1, 2, 5, 8, 9]);
    });

    test('should sort strings without comparator', () => {
      const strings = ['banana', 'apple', 'cherry'];
      const result = bubbleSort(strings);
      expect(result).toEqual(['apple', 'banana', 'cherry']);
    });
  });

  describe('Stability', () => {
    test('should be stable (preserve order of equal elements)', () => {
      const items = [
        { key: 2, value: 'a' },
        { key: 1, value: 'b' },
        { key: 2, value: 'c' },
        { key: 1, value: 'd' },
      ];
      const result = bubbleSort(items, (a, b) => a.key - b.key);
      expect(result).toEqual([
        { key: 1, value: 'b' },
        { key: 1, value: 'd' },
        { key: 2, value: 'a' },
        { key: 2, value: 'c' },
      ]);
    });
  });
});
