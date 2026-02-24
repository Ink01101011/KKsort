/**
 * Heap Sort - In-place sorting using binary heap structure
 * 
 * **Time Complexity:**
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * - Space: O(1) - In-place
 * 
 * **Pros (จุดเด็น):**
 * - Guaranteed O(n log n) time complexity
 * - In-place sorting (O(1) space)
 * - No worst-case scenarios
 * - Good for memory-constrained environments
 * - Efficient with large datasets
 * 
 * **Cons (จุดด้อย):**
 * - Unstable sort (doesn't preserve order of equal elements)
 * - Slower than QuickSort in practice
 * - Poor cache locality
 * - More complex implementation than QuickSort
 * - Not adaptive (same performance regardless of input order)
 * 
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to sort
 * @param {(a: T, b: T) => number} [compareFn] - Optional comparison function
 * @returns {T[]} The sorted array (sorted in-place)
 * 
 * @example
 * // Sort numbers in ascending order
 * const numbers = [38, 27, 43, 3, 9, 82, 10];
 * const sorted = heapSort(numbers, (a, b) => a - b);
 * // Result: [3, 9, 10, 27, 38, 43, 82]
 * 
 * @example
 * // Sort descending
 * const numbers = [5, 2, 8, 1, 9];
 * const descending = heapSort(numbers, (a, b) => b - a);
 * // Result: [9, 8, 5, 2, 1]
 * 
 * @example
 * // Sort objects by score
 * const scores = [
 *   { player: 'Alice', score: 100 },
 *   { player: 'Bob', score: 85 },
 *   { player: 'Charlie', score: 95 }
 * ];
 * const sorted = heapSort(scores, (a, b) => b.score - a.score);
 * // Top scores first
 */
function heapSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, compareFn);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0, compareFn);
  }

  return arr;
}

/**
 * Helper function to maintain heap property
 * 
 * @template T The type of elements
 * @param {T[]} arr - The array representing the heap
 * @param {number} n - Size of heap
 * @param {number} i - Index of node to heapify
 * @param {(a: T, b: T) => number} [compareFn] - Comparison function
 * @private
 */
function heapify<T>(arr: T[], n: number, i: number, compareFn?: (a: T, b: T) => number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  const compare = compareFn || ((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  if (left < n && compare(arr[left], arr[largest]) > 0) {
    largest = left;
  }

  if (right < n && compare(arr[right], arr[largest]) > 0) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest, compareFn);
  }
}

export { heapSort, heapify };
export default heapSort;
