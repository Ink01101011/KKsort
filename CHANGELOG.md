# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-24

### Added

- Initial release of @kktestdev/kksort - TypeScript sorting algorithms library
- Six sorting algorithms with full TypeScript support:
  - **Bubble Sort** - Simple comparison-based algorithm, easy to understand
  - **Heap Sort** - Efficient O(n log n) guaranteed performance, in-place sorting
  - **Insertion Sort** - Adaptive algorithm, excellent for small/nearly-sorted data
  - **Merge Sort** - Stable divide-and-conquer, predictable O(n log n) performance
  - **Quick Sort** - Fast average-case performance with intelligent pivot selection
  - **Selection Sort** - Simple in-place algorithm for small arrays
- **Tree-shakable imports** for optimal bundle size reduction
- **Comprehensive JSDoc documentation** including:
  - Time complexity analysis (Big O notation)
  - Pros (จุดเด็น) and cons (จุดด้อย) in Thai and English
  - Practical usage examples for each algorithm
  - Type-safe generic implementations
- **Full TypeScript type safety** with strict mode enabled
- **109 comprehensive unit tests** with 96.63% statement coverage
- **Support for custom comparison functions** (ascending/descending/complex sorting)
- **Immutable sorting** - all functions return new arrays without mutation
- **Object sorting** with stable algorithms for consistent results
- **Pre-publish validation scripts** for quality assurance
- **CI/CD workflows** for automated testing and publishing
- **Security audit workflows** for vulnerability monitoring

### Features

#### 🎯 Tree-Shaking Support
Import only what you need to minimize bundle size:
```javascript
// Individual functions
import { quickSort } from '@kktestdev/kksort/quick'

// All sort functions
import { bubbleSort, mergeSort } from '@kktestdev/kksort/sort'

// Main entry
import * as KKsort from '@kktestdev/kksort'
```

#### 📦 Optimized Bundle Size
- **Total JavaScript: 14.8 KB** (all 6 algorithms)
- **Package size: 6.1 KB** (compressed)
- **Individual algorithm size: ~0.5-2.3 KB** each
- Tree-shaking enabled for further reduction

#### 🔒 Type Safety
- Full TypeScript definitions included
- Strict mode enabled
- Generic type support for any comparable type
- No `@ts-ignore` needed

#### ✅ Zero Dependencies
- No runtime dependencies
- Production-ready and lightweight
- ESLint + Prettier for code quality
- Jest for comprehensive testing

#### 🧪 Well-Tested
- **109 unit tests** all passing
- Coverage: 96.63% statements, 93.75% branches
- Edge cases: empty arrays, single elements, duplicates
- Object sorting, immutability, and stability tests
- Large dataset performance tests

#### 📝 Developer Experience
- ESLint (v10) configuration with Prettier integration
- Prettier (v3) for consistent code formatting
- Jest (v30) for testing with ts-jest
- TypeScript (v5.3.3) strict mode
- pnpm for fast package management
- Pre-publish validation with 12 automated checks

#### 🚀 CI/CD Infrastructure
- Automated testing on Node 18, 20, 22
- Code coverage reporting to Codecov
- Security vulnerability scanning
- Automated npm publishing workflow
- GitHub Actions ready

### Building & Publishing

- `npm run build` - TypeScript compilation
- `npm run test` - Run all tests
- `npm run test:coverage` - Coverage report
- `npm run lint` - Code quality check
- `npm run format` - Auto-format code
- `npm run pre-publish` - Pre-release validation
- `npm publish --access public` - Publish to npm

### Documentation

- **README.md** - Quick start guide with examples
- **DEVELOPMENT.md** - Development setup and contributing guide
- **LICENSE** - ISC License
- **CHANGELOG.md** - This file

### Security & Quality

- No known security vulnerabilities (audited 2026-02-24)
- ESLint + TypeScript for code quality
- Prettier for consistent formatting
- Security audit workflow (weekly)
- Pre-publish validation (12 checks)

### Performance Characteristics

| Algorithm  | Best       | Average    | Worst      | Space  | Stable | Use Case |
|-----------|-----------|-----------|-----------|--------|--------|----------|
| Bubble    | O(n)      | O(n²)     | O(n²)     | O(1)   | ✅     | Learning, small data |
| Heap      | O(n log n)| O(n log n)| O(n log n)| O(1)   | ❌     | Fixed memory, worst-case guarantee |
| Insertion | O(n)      | O(n²)     | O(n²)     | O(1)   | ✅     | Nearly sorted, small arrays |
| Merge     | O(n log n)| O(n log n)| O(n log n)| O(n)   | ✅     | Stability required, linked lists |
| Quick     | O(n log n)| O(n log n)| O(n²)     | O(log n)| ❌    | General purpose, large datasets |
| Selection | O(n²)     | O(n²)     | O(n²)     | O(1)   | ❌     | Minimal writes required |

### Environment Support

- **Node.js**: 18.x, 20.x, 22.x LTS versions
- **TypeScript**: 5.3.3+
- **Browsers**: ES2020+ (with bundler)

### Known Limitations

- All implementations make copies (O(n) space) for immutability
- Heap Sort and Quick Sort are unstable
- No adaptive optimizations for pre-sorted input (except Insertion Sort)

### Future Roadmap

- Radix Sort for integer arrays
- Counting Sort variant
- Hybrid Sort algorithms
- Permutation generation
- Sorting network implementations

---

## [Unreleased]

### Planned for v1.1.0
- Additional sorting algorithms
- Performance benchmarks
- Browser compatibility matrix
- WebAssembly bindings (experimental)

---

## Release Notes

### Package Information

**Name**: `@kktestdev/kksort`  
**Version**: `1.0.0`  
**License**: ISC  
**Repository**: https://github.com/Ink01101011/KKsort  
**NPM**: https://www.npmjs.com/package/@kktestdev/kksort

### Installation

```bash
npm install @kktestdev/kksort
# or
pnpm add @kktestdev/kksort
# or
yarn add @kktestdev/kksort
```

### Quick Start

```typescript
import { quickSort, mergeSort } from '@kktestdev/kksort';

// Sort numbers
const numbers = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(numbers, (a, b) => a - b));
// [3, 9, 10, 27, 38, 43, 82]

// Sort objects
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
console.log(mergeSort(users, (a, b) => a.age - b.age));
```

### Migration Guide

This is the initial release. No migration needed.

### Credits

Created by [@Ink01101011](https://github.com/Ink01101011)

---

[1.0.0]: https://github.com/Ink01101011/KKsort/releases/tag/v1.0.0
[Unreleased]: https://github.com/Ink01101011/KKsort/compare/v1.0.0...develop
