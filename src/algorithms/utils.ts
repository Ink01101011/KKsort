export function defaultCompare<T>(a: T, b: T): number;
export function defaultCompare(a: any, b: any): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
