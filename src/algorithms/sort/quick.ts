import { defaultCompare } from '../utils';

/**
 * Quick Sort - Efficient divide-and-conquer sorting algorithm
 *
 * **Time Complexity:**
 * - Best: O(n log n) - balanced partitions
 * - Average: O(n log n)
 * - Worst: O(n²) - unbalanced partitions (rare with good pivot selection)
 * - Space: O(log n) - average recursive depth, O(n) worst case
 *
 * **Pros (จุดเด็น):**
 * - Fast average O(n log n) performance
 * - In-place variant uses minimal extra space
 * - Cache-friendly with good data access patterns
 * - Performs well in practice for most datasets
 * - Widely used in standard libraries
 * - Adaptive to partially sorted data
 * - Excellent with large datasets
 *
 * **Cons (จุดด้อย):**
 * - Unstable sort (doesn't preserve order of equal elements)
 * - Worst-case O(n²) with poor pivot selection
 * - Recursive implementation uses stack space
 * - This implementation uses extra O(n) space for filtering
 * - Not guaranteed time complexity like MergeSort
 * - Bad pivot selection can cause poor performance
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to sort
 * @param {(a: T, b: T) => number} [compare] - Comparison function
 * @returns {T[]} A new sorted array
 *
 * @example
 * // Sort numbers in ascending order
 * const numbers = [38, 27, 43, 3, 9, 82, 10];
 * const sorted = quickSort(numbers, (a, b) => a - b);
 * // Result: [3, 9, 10, 27, 38, 43, 82]
 *
 * @example
 * // Sort descending
 * const numbers = [5, 2, 8, 1, 9, 3];
 * const descending = quickSort(numbers, (a, b) => b - a);
 * // Result: [9, 8, 5, 3, 2, 1]
 *
 * @example
 * // Sort objects by multiple criteria
 * const employees = [
 *   { dept: 'HR', salary: 50000 },
 *   { dept: 'IT', salary: 80000 },
 *   { dept: 'HR', salary: 60000 },
 *   { dept: 'IT', salary: 75000 }
 * ];
 * const sorted = quickSort(employees, (a, b) =>
 *   a.dept.localeCompare(b.dept) || a.salary - b.salary
 * );
 * // Sorted by department first, then salary
 */
function quickSort<T>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare
): T[] {
  if (arr.length <= 1) return arr.slice();

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => compare(x, pivot) < 0);
  const middle = arr.filter((x) => compare(x, pivot) === 0);
  const right = arr.filter((x) => compare(x, pivot) > 0);

  return [...quickSort(left, compare), ...middle, ...quickSort(right, compare)];
}

export { quickSort };
export default quickSort;
