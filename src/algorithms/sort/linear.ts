/**
 * KKsort - A TypeScript sorting library
 */

export function sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[] {
  return [...array].sort(compareFn);
}

export default {
  sort,
};
