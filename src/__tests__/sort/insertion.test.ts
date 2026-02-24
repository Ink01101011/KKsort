import { insertionSort } from '../../algorithms/sort';

describe('insertionSort', () => {
  describe('Basic Sorting', () => {
    test('should sort numbers in ascending order', () => {
      const numbers = [64, 34, 25, 12, 22, 11, 90];
      const result = insertionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('should sort numbers in descending order', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = insertionSort(numbers, (a, b) => b - a);
      expect(result).toEqual([9, 8, 5, 2, 1]);
    });

    test('should sort strings alphabetically', () => {
      const strings = ['banana', 'apple', 'cherry', 'date'];
      const result = insertionSort(strings, (a, b) => a.localeCompare(b));
      expect(result).toEqual(['apple', 'banana', 'cherry', 'date']);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = insertionSort([], (a, b) => a - b);
      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const result = insertionSort([42], (a, b) => a - b);
      expect(result).toEqual([42]);
    });

    test('should handle array with two elements', () => {
      const result = insertionSort([2, 1], (a, b) => a - b);
      expect(result).toEqual([1, 2]);
    });

    test('should handle already sorted array (best case O(n))', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = insertionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array (worst case)', () => {
      const numbers = [5, 4, 3, 2, 1];
      const result = insertionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = insertionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    test('should handle array with all same values', () => {
      const numbers = [5, 5, 5, 5, 5];
      const result = insertionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([5, 5, 5, 5, 5]);
    });
  });

  describe('Nearly Sorted Data (Insertion Sort Excels)', () => {
    test('should efficiently sort nearly sorted data', () => {
      const almostSorted = [1, 2, 3, 5, 4, 6, 7, 8];
      const result = insertionSort(almostSorted, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should sort data with one element out of place', () => {
      const numbers = [1, 2, 3, 4, 10, 6, 7, 8, 9];
      const result = insertionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 10]);
    });
  });

  describe('Object Sorting', () => {
    test('should sort objects by property', () => {
      const products = [
        { name: 'Apple', price: 1.2 },
        { name: 'Banana', price: 0.5 },
        { name: 'Cherry', price: 2.0 },
        { name: 'Date', price: 1.5 },
      ];
      const result = insertionSort(products, (a, b) => a.price - b.price);
      expect(result).toEqual([
        { name: 'Banana', price: 0.5 },
        { name: 'Apple', price: 1.2 },
        { name: 'Date', price: 1.5 },
        { name: 'Cherry', price: 2.0 },
      ]);
    });

    test('should sort objects by string property', () => {
      const users = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ];
      const result = insertionSort(users, (a, b) => a.name.localeCompare(b.name));
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
      insertionSort(original, (a, b) => a - b);
      expect(original).toEqual(copy);
    });
  });

  describe('Without Comparator', () => {
    test('should sort numbers without comparator', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = insertionSort(numbers);
      expect(result).toEqual([1, 2, 5, 8, 9]);
    });

    test('should sort strings without comparator', () => {
      const strings = ['banana', 'apple', 'cherry'];
      const result = insertionSort(strings);
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
      const result = insertionSort(items, (a, b) => a.key - b.key);
      expect(result).toEqual([
        { key: 1, value: 'b' },
        { key: 1, value: 'd' },
        { key: 2, value: 'a' },
        { key: 2, value: 'c' },
      ]);
    });
  });
});
