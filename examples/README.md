# Import Examples

This package supports multiple import methods for better tree-shaking and bundle size optimization.

## 1. Main Entry Import (All Algorithms)

Import all sorting algorithms from the main entry:

```javascript
// CommonJS
const { bubbleSort, quickSort, mergeSort, heapSort, insertionSort, selectionSort } = require('@kktestdev/kksort');

// ES Module
import { bubbleSort, quickSort, mergeSort, heapSort, insertionSort, selectionSort } from '@kktestdev/kksort';

const numbers = [5, 2, 8, 1, 9];
const sorted = bubbleSort(numbers, (a, b) => a - b);
```

## 2. Individual Algorithm Imports (Tree-shakable)

Import specific algorithms to reduce bundle size:

```javascript
// CommonJS
const { bubbleSort } = require('@kktestdev/kksort/bubble');
const { quickSort } = require('@kktestdev/kksort/quick-sort');
const { mergeSort } = require('@kktestdev/kksort/merge');
const { heapSort } = require('@kktestdev/kksort/heap');
const { insertionSort } = require('@kktestdev/kksort/insertion');
const { selectionSort } = require('@kktestdev/kksort/selection');

// ES Module
import { bubbleSort } from '@kktestdev/kksort/bubble';
import { quickSort } from '@kktestdev/kksort/quick-sort';
import { mergeSort } from '@kktestdev/kksort/merge';
import { heapSort } from '@kktestdev/kksort/heap';
import { insertionSort } from '@kktestdev/kksort/insertion';
import { selectionSort } from '@kktestdev/kksort/selection';
```

## 3. Sort Module Import (All Algorithms)

Import all sorting algorithms at once:

```javascript
// CommonJS
const { 
  bubbleSort, 
  quickSort, 
  mergeSort, 
  heapSort, 
  insertionSort, 
  selectionSort 
} = require('@kktestdev/kksort/sort');

// ES Module
import { 
  bubbleSort, 
  quickSort, 
  mergeSort, 
  heapSort, 
  insertionSort, 
  selectionSort 
} from '@kktestdev/kksort/sort';
```

## Available Subpaths

| Subpath | Export | Description |
|---------|--------|-------------|
| `@kktestdev/kksort` | All sorting algorithms | Main entry, all algorithms |
| `@kktestdev/kksort/bubble` | `{ bubbleSort }` | Bubble sort algorithm |
| `@kktestdev/kksort/heap` | `{ heapSort }` | Heap sort algorithm |
| `@kktestdev/kksort/insertion` | `{ insertionSort }` | Insertion sort algorithm |
| `@kktestdev/kksort/merge` | `{ mergeSort }` | Merge sort algorithm |
| `@kktestdev/kksort/quick-sort` | `{ quickSort }` | Quick sort algorithm |
| `@kktestdev/kksort/selection` | `{ selectionSort }` | Selection sort algorithm |
| `@kktestdev/kksort/sort` | All sorting algorithms | All algorithms in one import |

## Benefits

### 🌳 Tree Shaking
Only import what you need, reducing final bundle size:

```javascript
// ✅ Good - Only bundles quickSort
import { quickSort } from '@kktestdev/kksort/quick-sort';

// ❌ Less optimal - May bundle unused code
import { sort } from '@kktestdev/kksort';
```

### 📦 Smaller Bundle Size
Individual imports mean smaller production bundles, especially when using only 1-2 algorithms.

### 🚀 Better Performance
Faster load times due to smaller bundle sizes.

## TypeScript Support

Full TypeScript support with proper type definitions for all import methods:

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';
import type { bubbleSort } from '@kktestdev/kksort/bubble';

const numbers: number[] = [5, 2, 8, 1, 9];
const sorted = quickSort(numbers, (a, b) => a - b);
```

## Running the Example

```bash
cd examples
node subpath-imports.js
```
