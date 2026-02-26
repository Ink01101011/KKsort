import { Comparable, defaultCompare } from '../../utils';

/**
 * Linear Search - Simple sequential search algorithm
 *
 * **Time Complexity:**
 * - Best: O(1) - element found at first position
 * - Average: O(n)
 * - Worst: O(n) - element not found or at last position
 * - Space: O(1)
 *
 * **Pros (จุดเด่น):**
 * - Works on unsorted arrays
 * - Simple and easy to understand
 * - Minimal memory overhead
 * - Works with primitive comparable types by default (number, string, bigint, boolean, Date); provide a custom comparator for other types
 *
 * **Cons (จุดด้อย):**
 * - Slow for large datasets (O(n))
 * - Less efficient than binary or jump search
 * - Must check every element in worst case
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to search in
 * @param {T} target - The element to search for
 * @param {(a: T, b: T) => number} [compare] - Optional comparison function
 * @returns {number} Index of target if found, otherwise -1
 *
 * @example
 * const numbers = [5, 2, 8, 1, 9];
 * const index = linearSearch(numbers, 8);
 * // Result: 2
 */
function linearSearch<T extends Comparable>(
  arr: T[],
  target: T,
  compare: (a: T, b: T) => number = defaultCompare
): number {
  for (let i = 0; i < arr.length; i++) {
    if (compare(arr[i], target) === 0) {
      return i;
    }
  }
  return -1;
}

export { linearSearch };
export default linearSearch;
