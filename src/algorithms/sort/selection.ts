/**
 * Selection Sort - Simple sorting algorithm that divides array into sorted and unsorted parts
 * 
 * **Time Complexity:**
 * - Best: O(n²)
 * - Average: O(n²)
 * - Worst: O(n²)
 * - Space: O(1) - In-place
 * 
 * **Pros (จุดเด็น):**
 * - Simple to understand and implement
 * - In-place sorting (minimal extra space)
 * - Minimal number of swaps (at most n-1)
 * - Better than bubble sort when write operations are expensive
 * - Good for small datasets
 * - Predictable number of comparisons
 * 
 * **Cons (จุดด้อย):**
 * - O(n²) is too slow for large datasets
 * - Unstable sort
 * - No best-case optimization
 * - Always performs n² comparisons regardless of input
 * - Much slower than modern algorithms (QuickSort, MergeSort)
 * 
 * @template T The type of elements in the array
 * @param {T[]} arr - The array to sort
 * @param {(a: T, b: T) => number} [compareFn] - Optional comparison function
 * @returns {T[]} The sorted array (sorted in-place)
 * 
 * @example
 * // Sort numbers
 * const numbers = [64, 25, 12, 22, 11];
 * const sorted = selectionSort(numbers, (a, b) => a - b);
 * // Result: [11, 12, 22, 25, 64]
 * 
 * @example
 * // Sort with custom logic
 * const numbers = [5, 2, 8, 1, 9];
 * const result = selectionSort([...numbers], (a, b) => b - a);
 * // Result: [9, 8, 5, 2, 1]
 * 
 * @example
 * // Find top 3 items (only partially sorts for efficiency)
 * const items = [4, 2, 7, 1, 9, 3];
 * const partial = selectionSort([...items], (a, b) => b - a);
 * // Top items move to beginning
 */
function selectionSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            const comparison = compareFn ? compareFn(arr[j], arr[minIndex]) : defaultCompare(arr[j], arr[minIndex]);
            
            if (comparison < 0) {
                minIndex = j;
            }
        }
        
        // Swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
    return arr;
}

/**
 * Default comparison function for primitive types
 * 
 * @template T The type being compared
 * @param {T} a - First element
 * @param {T} b - Second element
 * @returns {number} Negative if a < b, zero if equal, positive if a > b
 * @private
 */
function defaultCompare<T>(a: T, b: T): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

export default { selectionSort };