/**
 * Default comparison function for sorting and searching.
 * Compares two values and returns:
 * -1 if a < b
 *  0 if a === b
 *  1 if a > b
 *
 * Note: This comparator is intended only for primitive-like values
 * (number, string, bigint, Date). For complex types (objects, arrays,
 * custom classes, etc.), provide an explicit comparator function that
 * implements an appropriate ordering for those values.
 *
 * @template T extends number | string | bigint | Date
 * @param {T} a The first element
 * @param {T} b The second element
 * @returns {number} Comparison result (-1, 0, or 1)
 */
export function defaultCompare<T extends number | string | bigint | Date>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
