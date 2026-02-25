/**
 * Default comparison function for sorting and searching
 * Compares two values and returns:
 * -1 if a < b
 *  0 if a === b
 *  1 if a > b
 *
 * @template T The type of elements to compare
 * @param {T} a The first element
 * @param {T} b The second element
 * @returns {number} Comparison result (-1, 0, or 1)
 */
export function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * Validates that the input array is not empty
 * @param {T[]} arr The array to validate
 * @throws {Error} If array is empty
 */
export function validateArray<T>(arr: T[]): void {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Array must not be empty');
  }
}
