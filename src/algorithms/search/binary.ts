import { Comparable, defaultCompare } from '../../utils';

/**
 * Binary Search - Efficient search algorithm for sorted arrays
 *
 * **Time Complexity:**
 * - Best: O(1) - element found at midpoint
 * - Average: O(log n)
 * - Worst: O(log n)
 * - Space: O(1)
 *
 * **Pros (จุดเด่น):**
 * - Very efficient O(log n) search
 * - Works well for large sorted datasets
 * - Minimal memory overhead
 * - Predictable performance
 *
 * **Cons (จุดด้อย):**
 * - Array must be sorted first
 * - Only works with random-access data structures
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The sorted array to search in
 * @param {T} target - The element to search for
 * @param {(a: T, b: T) => number} [compare] - Optional comparison function
 * @returns {number} Index of target if found, otherwise -1
 *
 * @example
 * const numbers = [1, 3, 5, 7, 9];
 * const index = binarySearch(numbers, 5);
 * // Result: 2
 */
function binarySearch<T extends Comparable>(
  arr: T[],
  target: T,
  compare: (a: T, b: T) => number = defaultCompare as (a: T, b: T) => number
): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compare(arr[mid], target);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export { binarySearch };
export default binarySearch;
