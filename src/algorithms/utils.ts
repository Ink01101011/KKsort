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
