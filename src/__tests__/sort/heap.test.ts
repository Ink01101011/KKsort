import { heapSort } from '../../algorithms/sort';

describe('heapSort', () => {
  describe('Basic Sorting', () => {
    test('should sort numbers in ascending order', () => {
      const numbers = [38, 27, 43, 3, 9, 82, 10];
      const result = heapSort([...numbers], (a: number, b: number) => a - b);
      expect(result).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    test('should sort numbers in descending order', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = heapSort([...numbers], (a: number, b: number) => b - a);
      expect(result).toEqual([9, 8, 5, 2, 1]);
    });

    test('should sort strings alphabetically', () => {
      const strings = ['banana', 'apple', 'cherry', 'date'];
      const result = heapSort([...strings], (a: string, b: string) =>
        a > b ? 1 : a < b ? -1 : 0
      );
      expect(result).toEqual(['apple', 'banana', 'cherry', 'date']);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = heapSort<number>([], (a, b) => a - b);
      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const result = heapSort<number>([42], (a, b) => a - b);
      expect(result).toEqual([42]);
    });

    test('should handle array with two elements', () => {
      const result = heapSort<number>([2, 1], (a, b) => a - b);
      expect(result).toEqual([1, 2]);
    });

    test('should handle already sorted array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const numbers = [5, 4, 3, 2, 1];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    test('should handle array with all same values', () => {
      const numbers = [5, 5, 5, 5, 5];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([5, 5, 5, 5, 5]);
    });
  });

  describe('Large Dataset', () => {
    test('should efficiently sort large array', () => {
      const large = Array.from({ length: 1000 }, (_, i) => 1000 - i);
      const result = heapSort<number>(large, (a, b) => a - b);
      const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(result).toEqual(expected);
    });

    test('should sort large random array', () => {
      const random = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 100)
      );
      const copy = [...random];
      const result = heapSort<number>(copy, (a, b) => a - b);
      const expected = [...random].sort((a, b) => a - b);
      expect(result).toEqual(expected);
    });
  });

  describe('Object Sorting', () => {
    test('should sort objects by property', () => {
      const scores = [
        { player: 'Alice', score: 100 },
        { player: 'Bob', score: 85 },
        { player: 'Charlie', score: 95 },
      ];
      const result = heapSort(
        [...scores],
        (a: (typeof scores)[0], b: (typeof scores)[0]) => b.score - a.score
      );
      expect(result).toEqual([
        { player: 'Alice', score: 100 },
        { player: 'Charlie', score: 95 },
        { player: 'Bob', score: 85 },
      ]);
    });

    test('should sort objects by ascending property', () => {
      const items = [
        { id: 3, value: 'c' },
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
      ];
      const result = heapSort(
        [...items],
        (a: (typeof items)[0], b: (typeof items)[0]) => a.id - b.id
      );
      expect(result).toEqual([
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'c' },
      ]);
    });
  });

  describe('In-place Sorting', () => {
    test('should sort array in-place (mutates original)', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
      const result = heapSort<number>(numbers, (a, b) => a - b);
      expect(result).toBe(numbers); // Same reference
      expect(numbers).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
    });
  });

  describe('Without Comparator', () => {
    test('should sort with default comparison', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = heapSort([...numbers]);
      expect(result).toEqual([1, 2, 5, 8, 9]);
    });
  });

  describe('Negative Numbers', () => {
    test('should sort negative and positive numbers', () => {
      const numbers = [3, -1, 4, -5, 2, 0];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([-5, -1, 0, 2, 3, 4]);
    });

    test('should sort all negative numbers', () => {
      const numbers = [-3, -1, -4, -1, -5];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([-5, -4, -3, -1, -1]);
    });
  });

  describe('Floating Point Numbers', () => {
    test('should sort floating point numbers', () => {
      const numbers = [3.14, 2.71, 1.41, 1.73, 2.23];
      const result = heapSort<number>([...numbers], (a, b) => a - b);
      expect(result).toEqual([1.41, 1.73, 2.23, 2.71, 3.14]);
    });
  });
});
