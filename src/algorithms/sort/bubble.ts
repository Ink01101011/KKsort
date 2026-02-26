import { Comparable, defaultCompare } from '../../utils';

/**
 * Bubble Sort - Elementary sorting algorithm that repeatedly steps through the list
 *
 * **Time Complexity:**
 * - Best: O(n) - with optimization for already sorted arrays
 * - Average: O(n²)
 * - Worst: O(n²)
 * - Space: O(n) - creates a copy of the array
 *
 * **Pros (จุดเด็น):**
 * - Very simple to understand and implement
 * - Stable sort (preserves equal elements order)
 * - Adaptive (can be optimized for nearly sorted data)
 * - Creates new array (doesn't mutate original)
 * - Good for educational purposes
 * - Only requires comparison operations
 *
 * **Cons (จุดด้อย):**
 * - O(n²) time is unacceptable for large datasets
 * - Requires O(n) extra space
 * - Even optimized version is slower than modern algorithms
 * - Many unnecessary comparisons
 * - Performs poorly compared to QuickSort or MergeSort
 * - Not suitable for production code with large inputs
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to sort
 * @param {(a: T, b: T) => number} [compare] - Optional comparison function
 * @returns {T[]} A new sorted array (original array unchanged)
 *
 * @example
 * // Sort numbers in ascending order
 * const numbers = [64, 34, 25, 12, 22, 11, 90];
 * const sorted = bubbleSort(numbers, (a, b) => a - b);
 * // Result: [11, 12, 22, 25, 34, 64, 90]
 *
 * @example
 * // Sort strings
 * const fruits = ['banana', 'apple', 'cherry', 'date'];
 * const sorted = bubbleSort(fruits, (a, b) => a.localeCompare(b));
 * // Result: ['apple', 'banana', 'cherry', 'date']
 *
 * @example
 * // Sort objects by property
 * const students = [
 *   { name: 'Alice', grade: 85 },
 *   { name: 'Bob', grade: 92 },
 *   { name: 'Charlie', grade: 78 }
 * ];
 * const sorted = bubbleSort(students, (a, b) => b.grade - a.grade);
 * // Highest grades first
 */
function bubbleSort<T extends Comparable>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare
): T[] {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(result[j], result[j + 1]) > 0) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

export { bubbleSort };
export default bubbleSort;
