/**
 * Insertion Sort - Builds sorted array one item at a time by inserting elements into correct position
 *
 * **Time Complexity:**
 * - Best: O(n) - already sorted array with early termination
 * - Average: O(n²)
 * - Worst: O(n²) - reverse sorted array
 * - Space: O(n) - creates a copy of the array
 *
 * **Pros (จุดเด็น):**
 * - Stable sort (preserves order of equal elements)
 * - Adaptive algorithm (faster on nearly sorted data)
 * - In-place variant requires O(1) extra space
 * - Efficient for small datasets and linked lists
 * - Online algorithm (can sort while receiving data)
 * - Simple to understand and implement
 * - Performs well on partially sorted arrays
 * - Good cache locality
 *
 * **Cons (จุดด้อย):**
 * - O(n²) average and worst case is too slow for large datasets
 * - Slower than QuickSort and MergeSort for large arrays
 * - This implementation uses O(n) extra space
 * - Many element shifts in worst case
 * - Not suitable for massive datasets
 * - Performance degrades significantly with reverse-sorted input
 *
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to sort
 * @param {(a: T, b: T) => number} [compare] - Optional comparison function
 * @returns {T[]} A new sorted array (original array unchanged)
 *
 * @example
 * // Sort numbers in ascending order
 * const numbers = [64, 34, 25, 12, 22, 11, 90];\n * const sorted = insertionSort(numbers, (a, b) => a - b);
 * // Result: [11, 12, 22, 25, 34, 64, 90]
 *
 * @example
 * // Sort nearly sorted data (efficient with insertion sort)
 * const almostSorted = [1, 2, 3, 5, 4, 6, 7, 8];\n * const sorted = insertionSort(almostSorted, (a, b) => a - b);
 * // Result: [1, 2, 3, 4, 5, 6, 7, 8] - Very fast!
 *
 * @example
 * // Sort objects by property\n * const products = [
 *   { name: 'Apple', price: 1.2 },
 *   { name: 'Banana', price: 0.5 },
 *   { name: 'Cherry', price: 2.0 },
 *   { name: 'Date', price: 1.5 }\n * ];
 * const sorted = insertionSort(products, (a, b) => a.price - b.price);
 * // Result sorted by price: [Banana, Apple, Date, Cherry]
 */
function insertionSort<T>(
  arr: T[],
  compare: (a: T, b: T) => number = (a, b) => (a > b ? 1 : a < b ? -1 : 0),
): T[] {
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;

    while (j >= 0 && compare(result[j], key) > 0) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }

  return result;
}

export { insertionSort };
export default insertionSort;
