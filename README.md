# KKsort

A lightweight, type-safe TypeScript utility library for sorting algorithms. KKsort provides efficient sorting implementations with support for custom comparators and multiple data types.

## ✨ Features

- 🎯 **Type-Safe**: Full TypeScript support with generics
- 📦 **Lightweight**: Minimal dependencies, optimized bundle size
- 🔧 **Flexible**: Support for custom comparator functions
- 🧪 **Well-Tested**: Comprehensive test coverage with Jest
- 💎 **Production-Ready**: ESLint and code formatting included
- 🚀 **Easy to Use**: Simple, intuitive API
- 🌳 **Tree-Shakable**: Import only what you need for smaller bundles

## 📦 Installation

```bash
npm install @kktestdev/kksort
```

or with pnpm:

```bash
pnpm add @kktestdev/kksort
```

## 🚀 Quick Start

### Import All Algorithms

```typescript
import { bubbleSort, quickSort, mergeSort } from '@kktestdev/kksort';

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]
```

### Tree-Shakable Imports (Recommended)

Import individual algorithms to reduce bundle size:

```typescript
// Only bundles quickSort
import { quickSort } from '@kktestdev/kksort/quick';

const numbers = [5, 2, 8, 1, 9];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [1, 2, 5, 8, 9]
```

### Available Subpath Imports

```typescript
import { bubbleSort } from '@kktestdev/kksort/bubble';
import { heapSort } from '@kktestdev/kksort/heap';
import { insertionSort } from '@kktestdev/kksort/insertion';
import { mergeSort } from '@kktestdev/kksort/merge';
import { quickSort } from '@kktestdev/kksort/quick';
import { selectionSort } from '@kktestdev/kksort/selection';

// Or import multiple algorithms at once
import { bubbleSort, quickSort, mergeSort } from '@kktestdev/kksort/sort';
```

## 📖 API Documentation

All sorting functions follow the same signature pattern:

```typescript
function sortingAlgorithm<T>(
  arr: T[], 
  compareFn?: (a: T, b: T) => number
): T[]
```

**Parameters:**
- `arr` - The array to sort
- `compareFn` (optional) - Custom comparison function. Returns:
  - Negative number if first argument should come before second
  - Zero if they're equal
  - Positive number if first argument should come after second

**Returns:** A sorted array (some algorithms modify in-place, others return new arrays)

**Basic Usage:**

```typescript
import { quickSort } from '@kktestdev/kksort/quick';

// Sort numbers ascending
const numbers = [5, 2, 8, 1, 9];
const sorted = quickSort(numbers, (a, b) => a - b);
// [1, 2, 5, 8, 9]

// Sort numbers descending
const descending = quickSort(numbers, (a, b) => b - a);
// [9, 8, 5, 2, 1]

// Sort objects by property
const users = [
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];
const byAge = quickSort(users, (a, b) => a.age - b.age);
// [{ name: 'Alice', age: 25 }, ...]
```

### Sorting Algorithms

#### 1. `bubbleSort<T>(arr: T[], compare?: (a: T, b: T) => number): T[]`

**Time Complexity:** O(n²) average/worst, O(n) best  
**Space:** O(n)  
**Stable:** Yes

Simple sorting algorithm, best for small datasets and educational purposes.

```typescript
import { bubbleSort } from '@kktestdev/kksort';

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(numbers, (a, b) => a - b);
// [11, 12, 22, 25, 34, 64, 90]
```

---

#### 2. `insertionSort<T>(arr: T[], compare?: (a: T, b: T) => number): T[]`

**Time Complexity:** O(n²) average/worst, O(n) best  
**Space:** O(n)  
**Stable:** Yes

Excellent for nearly sorted data and small datasets.

```typescript
import { insertionSort } from '@kktestdev/kksort';

// Nearly sorted data - insertion sort excels here!
const almostSorted = [1, 2, 3, 5, 4, 6, 7, 8];
const sorted = insertionSort(almostSorted, (a, b) => a - b);
// [1, 2, 3, 4, 5, 6, 7, 8]
```

---

#### 3. `selectionSort<T>(arr: T[], compare?: (a: T, b: T) => number): T[]`

**Time Complexity:** O(n²) for all cases  
**Space:** O(1) in-place  
**Stable:** No

Simple in-place sorting, minimal swaps.

```typescript
import { selectionSort } from '@kktestdev/kksort';

const scores = [40, 30, 50, 10, 20];
const sorted = selectionSort(scores, (a, b) => b - a);
// [50, 40, 30, 20, 10]
```

---

#### 4. `mergeSort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[]`

**Time Complexity:** O(n log n) for all cases  
**Space:** O(n)  
**Stable:** Yes

Guaranteed performance, ideal for large datasets and when stability matters.

```typescript
import { mergeSort } from '@kktestdev/kksort';

const data = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSort(data, (a, b) => a - b);
// [3, 9, 10, 27, 38, 43, 82]
```

---

#### 5. `quickSort<T>(arr: T[], compare?: (a: T, b: T) => number): T[]`

**Time Complexity:** O(n log n) average, O(n²) worst  
**Space:** O(n) for this implementation  
**Stable:** No

Fast practical performance, widely used in production.

```typescript
import { quickSort } from '@kktestdev/kksort';

const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 80000 },
  { name: 'Charlie', salary: 60000 }
];

const sorted = quickSort(employees, (a, b) => a.salary - b.salary);
// Sorted by salary
```

---

#### 6. `heapSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[]`

**Time Complexity:** O(n log n) for all cases  
**Space:** O(1) in-place  
**Stable:** No

Guaranteed performance with minimal extra space.

```typescript
import { heapSort } from '@kktestdev/kksort';

const numbers = [38, 27, 43, 3, 9, 82, 10];
const sorted = heapSort(numbers, (a, b) => a - b);
// [3, 9, 10, 27, 38, 43, 82]
```

---

## Performance Comparison

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(n) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(n) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(n) | ❌ |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ |



## 📄 License

ISC

## �️ Development

For detailed development setup, testing, and contribution guidelines, see [DEVELOPMENT.md](DEVELOPMENT.md).

## 🙌 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 Changelog

### v0.1.0
- Initial release
- Core `sort()` function with custom comparator support
- 6 sorting algorithm implementations:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
- Full TypeScript support
- Comprehensive test coverage
- JSDoc documentation for all algorithms
