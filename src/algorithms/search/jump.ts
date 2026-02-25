import { defaultCompare } from '../utils';

/**
 * Jump Search - Search algorithm optimized for sorted arrays
 *
 * **Time Complexity:**
 * - Best: O(1) - element found at jump point
 * - Average: O(√n)
 * - Worst: O(√n)
 * - Space: O(1)
 *
 * **Pros (จุดเด็น):**
 * - Better than linear search O(√n) vs O(n)
 * - Works on sorted arrays
 * - Simpler than binary search while still efficient
 * - Optimal jump size of √n
 *
 * **Cons (จุดด้อย):**
 * - Array must be sorted
 * - Still slower than binary search
 * - Requires knowing array length upfront
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The sorted array to search in
 * @param {T} target - The element to search for
 * @param {(a: T, b: T) => number} [compare] - Optional comparison function
 * @returns {number} Index of target if found, otherwise -1
 *
 * @example
 * const numbers = [0, 1, 4, 6, 7, 8, 9];
 * const index = jumpSearch(numbers, 6);
 * // Result: 3
 */
function jumpSearch<T>(
  arr: T[],
  target: T,
  compare: (a: T, b: T) => number = defaultCompare
): number {
  const n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  // Finding the block where element is present (if it is present)
  while (compare(arr[Math.min(step, n) - 1], target) < 0) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }

  // Doing a linear search for target in block beginning with prev
  while (compare(arr[prev], target) < 0) {
    prev++;

    // If we reached the next block or end of array, element is not present
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }

  // If element is found
  if (compare(arr[prev], target) === 0) {
    return prev;
  }

  return -1;
}

export default jumpSearch;
