# KKsort

[![CI](https://github.com/Ink01101011/KKsort/actions/workflows/ci.yml/badge.svg)](https://github.com/Ink01101011/KKsort/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@kktestdev/kksort.svg)](https://www.npmjs.com/package/@kktestdev/kksort)
[![npm downloads](https://img.shields.io/npm/dm/@kktestdev/kksort.svg)](https://www.npmjs.com/package/@kktestdev/kksort)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)

A lightweight, type-safe TypeScript library providing **6 optimized sorting algorithms** and **4 efficient search algorithms** with tree-shakable imports and zero dependencies. Perfect for performance-conscious applications that need algorithms with predictable characteristics.

## ✨ Features

- 🎯 **Type-Safe**: Full TypeScript 5.3+ support with generics and strict mode
- 📦 **Lightweight**: Only **14.8 KB total** (6.1 KB compressed package)
- 🌳 **Tree-Shakable**: Import only what you need for minimal bundle size
- 🔧 **Flexible**: Custom comparison functions for any data type
- 🧪 **Well-Tested**: **172 unit tests** with **96.63%** code coverage
- 💎 **Production-Ready**: ESLint, Prettier, TypeScript strict mode enabled
- ⚡ **Fast**: Optimized implementations with O(n log n) worst-case options
- 🚀 **Zero Dependencies**: No runtime dependencies, just pure TypeScript
- 🔒 **Secure**: Regular security audits, no known vulnerabilities
- 📚 **Documented**: Comprehensive JSDoc with time complexity, pros/cons, examples

## 📊 Bundle Size

- **Individual algorithms**: 0.5 - 2.3 KB each
- **Total JavaScript**: 14.8 KB
- **Compressed package**: 6.1 KB
- **With tree-shaking**: Even smaller!

## 🎯 Six Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable | Best For |
|-----------|------|---------|-------|-------|--------|----------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(n) | ✅ | Learning, tiny datasets |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(n) | ✅ | Nearly sorted data |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) | ❌ | Minimal writes needed |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ | **Stability required** |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ | **General purpose** |
| **Heap Sort** | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ | **Worst-case guarantee** |

## 🔍 Four Search Algorithms

| Algorithm | Best | Average | Worst | Space | Sorted Required | Best For |
|-----------|------|---------|-------|-------|---|----------|
| **Binary Search** | O(1) | O(log n) | O(log n) | O(1) | ✅ | Large sorted datasets |
| **Linear Search** | O(1) | O(n) | O(n) | O(1) | ❌ | Small/unsorted data |
| **Jump Search** | O(1) | O(√n) | O(√n) | O(1) | ✅ | Moderate sorted data |
| **Quick Search** | O(1) | O(n) | O(n²) | O(log n) | ❌ | Unsorted data *(mutates input array)* |

> **Note:** The Quick Search algorithm mutates the input array during its search operation and has average-case O(n) time but can degrade to O(n²) in the worst case when pivot partitions are consistently unbalanced. If you need to preserve the original data, create a copy of the array before calling Quick Search.
## 📦 Installation

```bash
npm install @kktestdev/kksort
```

Or with pnpm (recommended):

```bash
pnpm add @kktestdev/kksort
```

Or with yarn:

```bash
yarn add @kktestdev/kksort
```

## 🚀 Quick Start

### Tree-Shakable Imports (Recommended)

Import individual algorithms to minimize bundle size:

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';

const numbers = [5, 2, 8, 1, 9];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [1, 2, 5, 8, 9]
```

### Import All Sorts

```typescript
import { bubbleSort, quickSort, mergeSort } from '@kktestdev/kksort/sort';

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]
```

### Main Entry Point

```typescript
import * as KKsort from '@kktestdev/kksort';

const sorted = KKsort.quickSort([5, 2, 8, 1, 9], (a, b) => a - b);
```

## 📖 API Documentation

All sorting functions follow the same signature:

```typescript
function sortingAlgorithm<T>(
  arr: T[], 
  compareFn?: (a: T, b: T) => number
): T[]
```

**Parameters:**
- `arr` - The array to sort
- `compareFn` (optional) - Comparison function returning:
  - Negative: first should come before second
  - Zero: they're equal
  - Positive: first should come after second

**Returns:** Sorted array (new array for immutability)

### Available Subpath Imports

```typescript
// Sorting algorithm imports (individual for tree-shaking)
import { bubbleSort } from '@kktestdev/kksort/bubble';
import { heapSort } from '@kktestdev/kksort/heap';
import { insertionSort } from '@kktestdev/kksort/insertion';
import { mergeSort } from '@kktestdev/kksort/merge';
import { quickSort } from '@kktestdev/kksort/quick-sort';
import { selectionSort } from '@kktestdev/kksort/selection';

// All sorting algorithms at once
import { bubbleSort, quickSort, mergeSort, /* ... */ } from '@kktestdev/kksort/sort';

// Search algorithm imports (individual for tree-shaking)
import { binarySearch } from '@kktestdev/kksort/binary';
import { linearSearch } from '@kktestdev/kksort/linear';
import { jumpSearch } from '@kktestdev/kksort/jump';
import { quickSearch } from '@kktestdev/kksort/quick-search';

// All search algorithms at once
import { binarySearch, linearSearch, jumpSearch, quickSearch } from '@kktestdev/kksort/search';

// Main entry (sorting and search algorithms)
// import * as KKsort from '@kktestdev/kksort';
```

## 💡 Usage Examples

### Example 1: Basic Number Sorting (Ascending)

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]
```

### Example 2: Number Sorting (Descending)

```typescript
import { mergeSort } from '@kktestdev/kksort/merge';

const scores = [85, 92, 78, 95, 88];
const sorted = mergeSort(scores, (a, b) => b - a); // descending
console.log(sorted); // [95, 92, 88, 85, 78]
```

### Example 3: String Sorting

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';

const words = ['zebra', 'apple', 'mango', 'banana'];
const sorted = quickSort(words, (a, b) => a.localeCompare(b));
console.log(sorted); // ['apple', 'banana', 'mango', 'zebra']
```

### Example 4: Object Sorting (Single Property)

```typescript
import { mergeSort } from '@kktestdev/kksort/merge';

const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 80000 },
  { name: 'Charlie', salary: 60000 }
];

const sorted = mergeSort(employees, (a, b) => a.salary - b.salary);
// [
//   { name: 'Alice', salary: 50000 },
//   { name: 'Charlie', salary: 60000 },
//   { name: 'Bob', salary: 80000 }
// ]
```

### Example 5: Object Sorting (Multiple Criteria)

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';

const students = [
  { name: 'Alice', grade: 'A', score: 95 },
  { name: 'Bob', grade: 'A', score: 92 },
  { name: 'Charlie', grade: 'B', score: 85 }
];

// Sort by grade first, then by score
const sorted = quickSort(students, (a, b) => {
  if (a.grade !== b.grade) return a.grade.localeCompare(b.grade);
  return b.score - a.score; // higher score first within same grade
});
```

### Example 6: Nearly Sorted Data

```typescript
import { insertionSort } from '@kktestdev/kksort/insertion';

// Insertion sort is ideal for nearly sorted data (O(n) best case)
const nearlySorted = [1, 2, 3, 5, 4, 6, 7, 8, 9];
const sorted = insertionSort(nearlySorted, (a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Example 7: Search in Sorted Array (Binary Search)

```typescript
import { binarySearch } from '@kktestdev/kksort/binary';

const sortedNumbers = [1, 3, 5, 7, 9, 11, 13];
const index = binarySearch(sortedNumbers, 7);
console.log(index); // 3
```

### Example 8: Search in Unsorted Array (Linear Search)

```typescript
import { linearSearch } from '@kktestdev/kksort/linear';

const unsortedNumbers = [5, 2, 8, 1, 9, 3];
const index = linearSearch(unsortedNumbers, 8);
console.log(index); // 2
```

### Example 9: Optimized Search (Jump Search)

```typescript
import { jumpSearch } from '@kktestdev/kksort/jump';

// Jump search is balanced: faster than linear, simpler than binary
const sortedNumbers = [0, 1, 4, 6, 7, 8, 9, 12, 15, 18, 21];
const index = jumpSearch(sortedNumbers, 8);
console.log(index); // 5
```

### Example 10: Search with Custom Comparator

```typescript
import { binarySearch } from '@kktestdev/kksort/binary';

const users = [
  { id: 1, name: 'Alice' },
  { id: 5, name: 'Charlie' },
  { id: 3, name: 'Bob' }
];

// Sort users by id first (required for binary search)
users.sort((a, b) => a.id - b.id);

// Then search
const index = binarySearch(
  users,
  { id: 5, name: 'Charlie' },
  (a, b) => a.id - b.id
);
console.log(index); // 2
```

### Example 11: Stable Sort Required

```typescript
import { mergeSort } from '@kktestdev/kksort/merge';

// Merge sort maintains relative order of equal elements
const data = [
  { id: 1, priority: 5 },
  { id: 2, priority: 3 },
  { id: 3, priority: 5 },
  { id: 4, priority: 3 }
];

const sorted = mergeSort(data, (a, b) => a.priority - b.priority);
// Equal priority items maintain their original order
// id 1 comes before id 3 (both priority 5)
// id 2 comes before id 4 (both priority 3)
```

---

## 🛠️ Development

### Available Scripts

```bash
# Install dependencies
pnpm install

# Development
pnpm lint              # Run ESLint
pnpm format            # Format code with Prettier
pnpm format:check      # Check code formatting
pnpm test              # Run tests
pnpm test:watch        # Watch mode
pnpm test:coverage     # Coverage report

# Build & Publishing
pnpm build             # TypeScript compilation
pnpm validate          # Run lint, format, test, build
pnpm pre-publish       # Pre-publish validation (12 checks)
pnpm publish           # Publish to npm (requires auth)

# Utility
pnpm check-size        # Check package size with npm pack
```

### Pre-Publish Validation

Before publishing, the pre-publish script validates 12 critical checks:

✅ LICENSE file exists  
✅ README.md exists  
✅ CHANGELOG.md exists  
✅ package.json exists  
✅ Version is not 0.0.x  
✅ ESLint passes  
✅ Prettier formatting  
✅ All tests pass  
✅ Coverage > 90%  
✅ TypeScript compiles  
✅ dist directory exists  
✅ Package size is reasonable  

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Watch mode for development
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

**Coverage Details:**
- **172 unit tests** covering all 6 sorting and 4 search algorithms
- **96.63%** statement coverage
- Edge cases, boundary conditions, and performance tests
- Type safety and immutability validation
- Large dataset performance (1000+ elements)

Test files: [src/__tests__/sort/](src/__tests__/sort/) and [src/__tests__/search/](src/__tests__/search/)

## 🔄 CI/CD & Workflows

**GitHub Actions Automation:**

1. **CI Workflow** (`.github/workflows/ci.yml`)
   - Runs on Node 18, 20, 22 for version compatibility
   - ESLint & Prettier style checks
   - Full test suite with coverage reporting
   - Automatic codecov.io integration

2. **Publish Workflow** (`.github/workflows/publish.yml`)
   - Automated npm publishing on release
   - Pre-publish validation before release
   - Artifact signing for security

3. **Security Workflow** (`.github/workflows/security.yml`)
   - Weekly automated security audits
   - npm vulnerability scanning
   - Dependency monitoring

## 📁 Project Structure

```
KKsort/
├── src/
│   ├── index.ts                      # Main entry point
│   ├── algorithms/
│   │   └── sort/
│   │       ├── index.ts              # Export all algorithms
│   │       ├── bubble.ts             # Bubble sort
│   │       ├── heap.ts               # Heap sort
│   │       ├── insertion.ts          # Insertion sort
│   │       ├── merge.ts              # Merge sort
│   │       ├── quick.ts              # Quick sort
│   │       └── selection.ts          # Selection sort
│   ├── utils/
│   │   └── string.ts                 # Utility functions
│   └── __tests__/
│       └── sort/
│           ├── bubble.test.ts        # Bubble sort tests
│           ├── heap.test.ts          # Heap sort tests
│           ├── insertion.test.ts     # Insertion sort tests
│           ├── merge.test.ts         # Merge sort tests
│           ├── quick.test.ts         # Quick sort tests
│           └── selection.test.ts     # Selection sort tests
├── dist/                             # Compiled JavaScript output
├── .github/workflows/                # GitHub Actions workflows
│   ├── ci.yml                        # Continuous Integration
│   ├── publish.yml                   # Publishing automation
│   └── security.yml                  # Security auditing
├── scripts/
│   └── pre-publish.js               # Pre-publish validation script
├── .gitignore                        # Git ignore rules
├── .editorconfig                     # Editor configuration
├── eslint.config.mjs                 # ESLint configuration (flat config)
├── jest.config.js                    # Jest test configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # NPM package manifest
├── pnpm-lock.yaml                    # PNPM lock file
├── DEVELOPMENT.md                    # Development guidelines
├── CHANGELOG.md                      # Version history
├── LICENSE                           # ISC License
└── README.md                         # This file
```

## 📚 Documentation

- **[README.md](README.md)** - Quick start & API reference (you are here)
- **[DEVELOPMENT.md](DEVELOPMENT.md)** - Development setup & contribution guide
- **[CHANGELOG.md](CHANGELOG.md)** - Complete version history & product roadmap
- **[LICENSE](LICENSE)** - ISC License text
- **Inline JSDoc** - Rich code documentation in source with:
  - Time complexity analysis (Big O notation)
  - Space complexity
  - Stability properties
  - Pros and cons (Thai & English)
  - Implementation notes
  - Usage examples

## 🎯 Latest Release

**Version 1.0.0** - Production Ready ✨

Initial production release featuring:
- ✅ 6 optimized sorting algorithms
- ✅ Full TypeScript with strict mode
- ✅ 109 unit tests (96.63% coverage)
- ✅ Tree-shakable ES modules
- ✅ Minimal size: 14.8 KB JS (6.1 KB gzip)
- ✅ Zero production dependencies
- ✅ ESLint & Prettier integrated
- ✅ GitHub Actions CI/CD
- ✅ Comprehensive documentation
- ✅ Security audit automation

**See [CHANGELOG.md](CHANGELOG.md)** for detailed release notes, feature changelog, and future roadmap.

## 📄 License

[ISC License](LICENSE) – Free for personal and commercial use.

## 🙌 Contributing

Contributions, bug reports, and feature requests are welcome!

**To contribute:**
1. See [DEVELOPMENT.md](DEVELOPMENT.md) for setup instructions
2. Follow the contribution guidelines
3. All pull requests must pass CI checks

**To report issues:** [GitHub Issues](https://github.com/Ink01101011/KKsort/issues)

## 📞 Support & Community

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/Ink01101011/KKsort/issues)
- 📝 [View Changelog](CHANGELOG.md)
- 💬 [Discussions](https://github.com/Ink01101011/KKsort/discussions)
- 🎯 [Development Guide](DEVELOPMENT.md)

---

**Made with ❤️ for the TypeScript community**

**Performance-focused · Type-safe · Production-ready**
