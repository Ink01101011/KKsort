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
export function defaultCompare(a: number, b: number): number;
export function defaultCompare(a: string, b: string): number;
export function defaultCompare(a: bigint, b: bigint): number;
export function defaultCompare(a: Date, b: Date): number;
export function defaultCompare(a: any, b: any): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * Validates that the provided value is a non-null array.
 * Throws a TypeError if the value is not an array.
 *
 * @template T The element type of the array
 * @param {T[]} arr The value to validate
 * @param {string} [name='array'] Optional name used in the error message
 * @returns {T[]} The same array, for chaining
 * @throws {TypeError} If the value is not an array
 */
export function validateArray<T>(arr: T[], name = 'array'): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected ${name} to be an array, but got ${typeof arr}`);
  }
  return arr;
}
