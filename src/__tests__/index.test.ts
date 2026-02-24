import { sort } from '../index';

describe('sort function', () => {
  test('should sort numbers in ascending order', () => {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
    const result = sort(numbers);
    expect(result).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  test('should not mutate the original array', () => {
    const original = [3, 1, 4];
    const copy = [...original];
    sort(original);
    expect(original).toEqual(copy);
  });

  test('should sort strings alphabetically', () => {
    const strings = ['banana', 'apple', 'cherry'];
    const result = sort(strings);
    expect(result).toEqual(['apple', 'banana', 'cherry']);
  });

  test('should work with custom compare function', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = sort(numbers, (a, b) => b - a); // descending
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  test('should handle empty array', () => {
    const result = sort([]);
    expect(result).toEqual([]);
  });

  test('should handle single element array', () => {
    const result = sort([42]);
    expect(result).toEqual([42]);
  });

  test('should sort objects with custom compare function', () => {
    const users = [
      { name: 'Charlie', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
    ];
    const result = sort(users, (a, b) => a.age - b.age);
    expect(result).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 30 },
      { name: 'Bob', age: 35 },
    ]);
  });
});
