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
 * @param {number | string | bigint | Date} a The first element
 * @param {number | string | bigint | Date} b The second element
 * @returns {number} Comparison result (-1, 0, or 1)
 */
export function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * Validates that the provided value is a non-null array.
