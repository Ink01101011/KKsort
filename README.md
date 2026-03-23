# KKsort

A TypeScript library for sorting and searching algorithms.

## Demo / Playground

Try it live at [https://kksort-web.vercel.app/](https://kksort-web.vercel.app/)

Demo features:
- Choose the algorithm you want to test
- Enter custom input data and target values
- See results from each method instantly

## Installation

```bash
npm install @kktestdev/kksort
```

or

```bash
pnpm add @kktestdev/kksort
```

## Usage

### 1) Sort

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';

const numbers = [5, 2, 8, 1, 9];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [1, 2, 5, 8, 9]
```

### 2) Search

```typescript
import { binarySearch } from '@kktestdev/kksort/binary';

const sortedNumbers = [1, 3, 5, 7, 9];
const index = binarySearch(sortedNumbers, 7);
console.log(index); // 3
```

### Function Signatures

```typescript
// Pseudo type signatures used by functions in this library.
// The default comparator (when no compareFn is provided) supports only:
// number | string | bigint | boolean | Date
//
// In practice, T can also be an object when you supply your own compareFn.

type DefaultComparable = number | string | bigint | boolean | Date;
type Comparable = DefaultComparable | object;

// Sort
// When using a type supported by the default comparator: compareFn is optional
declare function sortFn<T extends Comparable>(
  arr: T[],
  // If arr is object[], provide compareFn to specify how elements are compared
  compareFn?: (a: T, b: T) => number
): T[];

// For other types: compareFn is always required
declare function sortFn<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[];

// Search
// When using a type supported by the default comparator: compareFn is optional
declare function searchFn<T extends Comparable>(
  arr: T[],
  target: T,
  // If arr is object[], provide compareFn to specify how elements are compared
  compareFn?: (a: T, b: T) => number
): number;

// For other types: compareFn is always required
declare function searchFn<T>(
  arr: T[],
  target: T,
  compareFn: (a: T, b: T) => number
): number;
```

Notes:
- Search functions return the found `index`, or `-1` if not found.
- The default comparator (when no `compareFn` is provided) supports only `number`, `string`, `bigint`, `boolean`, and `Date`.
  - `NaN` is not supported for `number` — a `TypeError` will be thrown if encountered.
  - Invalid `Date` values (where `getTime()` returns `NaN`) are not supported and will throw a `TypeError`.
- When no `compareFn` is provided, all values in `arr` and `target` must be the same type and one of the supported types above. Mixed types (e.g. `number` and `string` together) will cause `defaultCompare` to throw a `TypeError`.
- For `object` types or any other unsupported types, you must supply your own `compareFn`.
- Search functions that require a pre-sorted array: `binarySearch` and `jumpSearch` only — `linearSearch` and `quickSearch` work on unsorted arrays.

## Function Details & Trade-offs

### Sorting Functions

| Function | Import | Pros | Cons | Notes |
|---|---|---|---|---|
| `bubbleSort` | `@kktestdev/kksort/bubble` | Easy to understand, stable, great for teaching | Slow `O(n²)` on large inputs | Does not mutate original array |
| `insertionSort` | `@kktestdev/kksort/insertion` | Excellent on nearly-sorted data, stable | Poor on large inputs (`O(n²)`) | Does not mutate original array |
| `selectionSort` | `@kktestdev/kksort/selection` | Simple code, minimal swaps | `O(n²)` in all cases, not stable | Mutates original array |
| `mergeSort` | `@kktestdev/kksort/merge` | Guaranteed `O(n log n)`, stable | Extra memory `O(n)` | Does not mutate original array |
| `quickSort` | `@kktestdev/kksort/quick-sort` | Fast in practice, good general-purpose choice | Worst case `O(n²)` | Does not mutate original array |
| `heapSort` | `@kktestdev/kksort/heap` | Guaranteed `O(n log n)`, low extra memory | Not stable, often slower than quicksort in practice | Mutates original array |

### Search Functions

| Function | Import | Pros | Cons | Notes |
|---|---|---|---|---|
| `binarySearch` | `@kktestdev/kksort/binary` | Very fast `O(log n)` | Requires a sorted array | Does not mutate original array |
| `linearSearch` | `@kktestdev/kksort/linear` | Works on unsorted arrays | Slow on large inputs (`O(n)`) | Does not mutate original array |
| `jumpSearch` | `@kktestdev/kksort/jump` | Faster than linear on sorted data | Still slower than binary search | Requires a sorted array, does not mutate original array |
| `quickSearch` | `@kktestdev/kksort/quick-search` | Fast on average for unsorted data | Worst case `O(n²)`, rearranges elements | Mutates original array |
