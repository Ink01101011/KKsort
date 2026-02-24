import { mergeSort } from '../../algorithms/sort';

describe('mergeSort', () => {
  describe('Basic Sorting', () => {
    test('should sort numbers in ascending order', () => {
      const numbers = [38, 27, 43, 3, 9, 82, 10];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    test('should sort numbers in descending order', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = mergeSort(numbers, (a, b) => b - a);
      expect(result).toEqual([9, 8, 5, 2, 1]);
    });

    test('should sort strings alphabetically', () => {
      const strings = ['banana', 'apple', 'cherry', 'date'];
      const result = mergeSort(strings, (a, b) => a.localeCompare(b));
      expect(result).toEqual(['apple', 'banana', 'cherry', 'date']);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = mergeSort([], (a, b) => a - b);
      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const result = mergeSort([42], (a, b) => a - b);
      expect(result).toEqual([42]);
    });

    test('should handle array with two elements', () => {
      const result = mergeSort([2, 1], (a, b) => a - b);
      expect(result).toEqual([1, 2]);
    });

    test('should handle already sorted array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const numbers = [5, 4, 3, 2, 1];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    test('should handle array with all same values', () => {
      const numbers = [5, 5, 5, 5, 5];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([5, 5, 5, 5, 5]);
    });
  });

  describe('Large Dataset', () => {
    test('should efficiently sort large array', () => {
      const large = Array.from({ length: 1000 }, (_, i) => 1000 - i);
      const result = mergeSort(large, (a, b) => a - b);
      const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(result).toEqual(expected);
    });

    test('should sort large random array', () => {
      const random = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
      const result = mergeSort(random, (a, b) => a - b);
      const expected = [...random].sort((a, b) => a - b);
      expect(result).toEqual(expected);
    });
  });

  describe('Object Sorting', () => {
    test('should sort objects by property', () => {
      const users = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ];
      const result = mergeSort(users, (a, b) => a.age - b.age);
      expect(result).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 30 },
        { name: 'Bob', age: 35 },
      ]);
    });

    test('should sort objects by string property', () => {
      const users = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ];
      const result = mergeSort(users, (a, b) => a.name.localeCompare(b.name));
      expect(result).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
        { name: 'Charlie', age: 30 },
      ]);
    });
  });

  describe('Immutability', () => {
    test('should not mutate the original array', () => {
      const original = [3, 1, 4, 1, 5, 9, 2, 6];
      const copy = [...original];
      mergeSort(original, (a, b) => a - b);
      expect(original).toEqual(copy);
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
      const result = mergeSort(items, (a, b) => a.key - b.key);
      expect(result).toEqual([
        { key: 1, value: 'b' },
        { key: 1, value: 'd' },
        { key: 2, value: 'a' },
        { key: 2, value: 'c' },
      ]);
    });
  });

  describe('Negative Numbers', () => {
    test('should sort negative and positive numbers', () => {
      const numbers = [3, -1, 4, -5, 2, 0];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([-5, -1, 0, 2, 3, 4]);
    });
  });

  describe('Floating Point Numbers', () => {
    test('should sort floating point numbers', () => {
      const numbers = [3.14, 2.71, 1.41, 1.73, 2.23];
      const result = mergeSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1.41, 1.73, 2.23, 2.71, 3.14]);
    });
  });
});
