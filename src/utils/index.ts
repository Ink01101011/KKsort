export function defaultCompare(a: unknown, b: unknown): number {
  // Numbers, strings, and bigints can be compared directly.
  if (typeof a === 'number' && typeof b === 'number') {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new TypeError('defaultCompare does not support NaN values.');
    }
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  if (typeof a === 'bigint' && typeof b === 'bigint') {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  // Booleans: define false < true.
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    if (a === b) return 0;
    return a ? 1 : -1;
  }

  // Dates: compare by time value.
  if (a instanceof Date && b instanceof Date) {
    const av = a.getTime();
    const bv = b.getTime();
    if (Number.isNaN(av) || Number.isNaN(bv)) {
      throw new TypeError(
        'defaultCompare does not support invalid Date values.'
      );
    }
    if (av < bv) return -1;
    if (av > bv) return 1;
    return 0;
  }

  // Unsupported or mismatched types.
  throw new TypeError(
    'defaultCompare only supports comparing values of the same type: number, string, bigint, boolean, or Date.'
  );
}
