/**
 * Merge Sort - Divide and conquer sorting algorithm
 * 
 * **Time Complexity:**
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * - Space: O(n)
 * 
 * **Pros (จุดเด็น):**
 * - Guaranteed O(n log n) time complexity
 * - Stable sort (preserves order of equal elements)
 * - Predictable performance for all inputs
 * - Excellent for linked lists and external sorting
 * - Parallelizable for large datasets
 * 
 * **Cons (จุดด้อย):**
 * - Requires O(n) extra space for merging
 * - Slower than QuickSort in practice on small arrays
 * - Not in-place sorting
 * - More function calls overhead
 * 
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to sort
 * @param {(a: T, b: T) => number} compareFn - Comparison function
 * @returns {T[]} A new sorted array
 * 
 * @example
 * // Sort numbers
 * const numbers = [38, 27, 43, 3, 9, 82, 10];
 * const sorted = mergeSort(numbers, (a, b) => a - b);
 * // Result: [3, 9, 10, 27, 38, 43, 82]
 * 
 * @example
 * // Sort strings
 * const strings = ['banana', 'apple', 'cherry'];
 * const sorted = mergeSort(strings, (a, b) => a.localeCompare(b));
 * // Result: ['apple', 'banana', 'cherry']
 * 
 * @example
 * // Sort objects by age
 * const users = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 25 },
 *   { name: 'Charlie', age: 35 }
 * ];
 * const sorted = mergeSort(users, (a, b) => a.age - b.age);
 * // Result maintains stability for equal ages
 */
function mergeSort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), compareFn);
    const right = mergeSort(arr.slice(mid), compareFn);

    return merge(left, right, compareFn);
}

/**
 * Helper function to merge two sorted arrays
 * 
 * @template T The type of elements
 * @param {T[]} left - First sorted array
 * @param {T[]} right - Second sorted array
 * @param {(a: T, b: T) => number} compareFn - Comparison function
 * @returns {T[]} Merged sorted array
 * @private
 */
function merge<T>(left: T[], right: T[], compareFn: (a: T, b: T) => number): T[] {
    const result: T[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (compareFn(left[i], right[j]) <= 0) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

export default { mergeSort };