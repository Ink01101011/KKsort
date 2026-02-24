import { quickSort } from '../../algorithms/sort';

describe('quickSort', () => {
  describe('Basic Sorting', () => {
    test('should sort numbers in ascending order', () => {
      const numbers = [38, 27, 43, 3, 9, 82, 10];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    test('should sort numbers in descending order', () => {
      const numbers = [5, 2, 8, 1, 9, 3];
      const result = quickSort(numbers, (a, b) => b - a);
      expect(result).toEqual([9, 8, 5, 3, 2, 1]);
    });

    test('should sort strings alphabetically', () => {
      const strings = ['banana', 'apple', 'cherry', 'date'];
      const result = quickSort(strings, (a, b) => a.localeCompare(b));
      expect(result).toEqual(['apple', 'banana', 'cherry', 'date']);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty array', () => {
      const result = quickSort([]);
      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const result = quickSort([42]);
      expect(result).toEqual([42]);
    });

    test('should handle array with two elements', () => {
      const result = quickSort([2, 1], (a, b) => a - b);
      expect(result).toEqual([1, 2]);
    });

    test('should handle already sorted array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const numbers = [5, 4, 3, 2, 1];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with duplicate values', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    test('should handle array with all same values', () => {
      const numbers = [5, 5, 5, 5, 5];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([5, 5, 5, 5, 5]);
    });
  });

  describe('Large Dataset', () => {
    test('should efficiently sort large array', () => {
      const large = Array.from({ length: 1000 }, (_, i) => 1000 - i);
      const result = quickSort(large, (a, b) => a - b);
      const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(result).toEqual(expected);
    });

    test('should sort large random array', () => {
      const random = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 100)
      );
      const result = quickSort(random, (a, b) => a - b);
      const expected = [...random].sort((a, b) => a - b);
      expect(result).toEqual(expected);
    });
  });

  describe('Object Sorting', () => {
    test('should sort objects by property', () => {
      const employees = [
        { name: 'Alice', salary: 50000 },
        { name: 'Bob', salary: 80000 },
        { name: 'Charlie', salary: 60000 },
      ];
      const result = quickSort(employees, (a, b) => a.salary - b.salary);
      expect(result).toEqual([
        { name: 'Alice', salary: 50000 },
        { name: 'Charlie', salary: 60000 },
        { name: 'Bob', salary: 80000 },
      ]);
    });

    test('should sort objects by multiple criteria', () => {
      const employees = [
        { dept: 'HR', salary: 50000 },
        { dept: 'IT', salary: 80000 },
        { dept: 'HR', salary: 60000 },
        { dept: 'IT', salary: 75000 },
      ];
      const result = quickSort(
        employees,
        (a, b) => a.dept.localeCompare(b.dept) || a.salary - b.salary
      );
      expect(result).toEqual([
        { dept: 'HR', salary: 50000 },
        { dept: 'HR', salary: 60000 },
        { dept: 'IT', salary: 75000 },
        { dept: 'IT', salary: 80000 },
      ]);
    });
  });

  describe('Immutability', () => {
    test('should not mutate the original array', () => {
      const original = [3, 1, 4, 1, 5, 9, 2, 6];
      const copy = [...original];
      quickSort(original, (a, b) => a - b);
      expect(original).toEqual(copy);
    });
  });

  describe('Default Comparator', () => {
    test('should use default comparator when none provided', () => {
      const numbers = [5, 2, 8, 1, 9];
      const result = quickSort(numbers);
      expect(result).toEqual([1, 2, 5, 8, 9]);
    });

    test('should sort strings with default comparator', () => {
      const strings = ['banana', 'apple', 'cherry'];
      const result = quickSort(strings);
      expect(result).toEqual(['apple', 'banana', 'cherry']);
    });
  });

  describe('Negative Numbers', () => {
    test('should sort negative and positive numbers', () => {
      const numbers = [3, -1, 4, -5, 2, 0];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([-5, -1, 0, 2, 3, 4]);
    });

    test('should sort all negative numbers', () => {
      const numbers = [-3, -1, -4, -1, -5];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([-5, -4, -3, -1, -1]);
    });
  });

  describe('Floating Point Numbers', () => {
    test('should sort floating point numbers', () => {
      const numbers = [3.14, 2.71, 1.41, 1.73, 2.23];
      const result = quickSort(numbers, (a, b) => a - b);
      expect(result).toEqual([1.41, 1.73, 2.23, 2.71, 3.14]);
    });
  });
});
