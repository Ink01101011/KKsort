import { selectionSort } from '../../algorithms/sort';

describe('selectionSort', () => {
  describe('Basic Sorting', () => {
    test('should sort numbers in ascending order', () => {
      const numbers = [64, 25, 12, 22, 11];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([11, 12, 22, 25, 64]);
    });

    test('should sort numbers in descending order', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = selectionSort(numbers, (a, b) => b - a);
      expect(result).toEqual([9, 8, 5, 2, 1]);
    });

    test('should sort strings alphabetically', () => {
      const strings = ['banana', 'apple', 'cherry', 'date'];
      const result = selectionSort(strings, (a, b) => a.localeCompare(b));
      expect(result).toEqual(['apple', 'banana', 'cherry', 'date']);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = selectionSort([], (a, b) => a - b);
      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const result = selectionSort([42], (a, b) => a - b);
      expect(result).toEqual([42]);
    });

    test('should handle array with two elements', () => {
      const result = selectionSort([2, 1], (a, b) => a - b);
      expect(result).toEqual([1, 2]);
    });

    test('should handle already sorted array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const numbers = [5, 4, 3, 2, 1];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    test('should handle array with all same values', () => {
      const numbers = [7, 7, 7, 7, 7];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([7, 7, 7, 7, 7]);
    });
  });

  describe('Object Sorting', () => {
    test('should sort objects by property', () => {
      const scores = [
        { player: 'Alice', points: 100 },
        { player: 'Bob', points: 85 },
        { player: 'Charlie', points: 95 },
      ];
      const result = selectionSort(scores, (a, b) => a.points - b.points);
      expect(result).toEqual([
        { player: 'Bob', points: 85 },
        { player: 'Charlie', points: 95 },
        { player: 'Alice', points: 100 },
      ]);
    });

    test('should sort objects in descending order', () => {
      const scores = [
        { player: 'Alice', points: 100 },
        { player: 'Bob', points: 85 },
        { player: 'Charlie', points: 95 },
      ];
      const result = selectionSort(scores, (a, b) => b.points - a.points);
      expect(result).toEqual([
        { player: 'Alice', points: 100 },
        { player: 'Charlie', points: 95 },
        { player: 'Bob', points: 85 },
      ]);
    });
  });

  describe('Immutability', () => {
    test('should mutate the original array (in-place sorting)', () => {
      const original = [3, 1, 4, 1, 5, 9, 2, 6];
      const result = selectionSort(original, (a, b) => a - b);
      // Selection sort typically modifies in-place
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
      expect(original).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
    });
  });

  describe('Without Comparator', () => {
    test('should sort numbers without comparator', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = selectionSort(numbers);
      expect(result).toEqual([1, 2, 5, 8, 9]);
    });

    test('should sort strings without comparator', () => {
      const strings = ['banana', 'apple', 'cherry'];
      const result = selectionSort(strings);
      expect(result).toEqual(['apple', 'banana', 'cherry']);
    });
  });

  describe('Negative Numbers', () => {
    test('should sort negative and positive numbers', () => {
      const numbers = [3, -1, 4, -5, 2, 0];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([-5, -1, 0, 2, 3, 4]);
    });

    test('should sort all negative numbers', () => {
      const numbers = [-3, -1, -4, -1, -5];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([-5, -4, -3, -1, -1]);
    });
  });

  describe('Floating Point Numbers', () => {
    test('should sort floating point numbers', () => {
      const numbers = [3.14, 2.71, 1.41, 1.73, 2.23];
      const result = selectionSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1.41, 1.73, 2.23, 2.71, 3.14]);
    });
  });
});
