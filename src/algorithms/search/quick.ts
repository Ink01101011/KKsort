import { defaultCompare } from '../utils';

/**
 * Quick Search - Search algorithm using quicksort partitioning
 *
 * **Time Complexity:**
 * - Best: O(1) - when the pivot is the target after the first partition
 * - Average: O(n) - typical case over random inputs
 * - Worst: O(n) - unbalanced partitions
 * - Space: O(log n) - average recursive depth
 *
 * **Pros (จุดเด่น):**
 * - Good average performance with balanced partitions
 * - Cache-friendly algorithm
 * - Uses quicksort's efficient partitioning
 * - Works on unsorted arrays
 * - Minimal space overhead on average
 *
 * **Cons (จุดด้อย):**
 * - Worst case O(n) with poor pivot selection
 * - Unstable (doesn't preserve element order)
 * - Recursive implementation uses stack space
 * - Slower than binary search for sorted arrays
 * - Mutates the original array during search
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to search in
 * @param {T} target - The element to search for
 * @param {(a: T, b: T) => number} [compare] - Optional comparison function
 * @returns {number} Index of target if found, otherwise -1
 *
 * @example
 * const numbers = [3, 7, 2, 9, 1, 5, 8];
 * const index = quickSearch(numbers, 9);
 * // Result: 3 (or different index if array is rearranged)
 */
function quickSearch<T>(
  arr: T[],
  target: T,
  compare: (a: T, b: T) => number = defaultCompare
): number {
  function partition(low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (compare(arr[j], pivot) < 0) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function search(low: number, high: number): number {
    if (low > high) return -1;

    const pi = partition(low, high);

    if (compare(arr[pi], target) === 0) return pi;
    if (compare(arr[pi], target) > 0) return search(low, pi - 1);
    return search(pi + 1, high);
  }

  return search(0, arr.length - 1);
}

export { quickSearch };
export default quickSearch;
