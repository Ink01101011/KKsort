export function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export function validateArray<T>(arr: T[], name = 'array'): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError(
      `Expected ${name} to be an array, but got ${typeof arr}`
    );
  }
  return arr;
}
