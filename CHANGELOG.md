# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-24

### Added

- Initial release of @kktestdev/kksort
- Six sorting algorithms with TypeScript support:
  - Bubble Sort - Simple comparison-based algorithm
  - Heap Sort - Efficient heap-based sorting
  - Insertion Sort - Adaptive algorithm for small/nearly-sorted data
  - Merge Sort - Stable divide-and-conquer algorithm
  - Quick Sort - Fast average-case performance
  - Selection Sort - Simple in-place sorting
- Tree-shakable imports for optimal bundle size
- Comprehensive JSDoc documentation with:
  - Time complexity analysis (Big O notation)
  - Pros and cons in Thai and English
  - Usage examples for each algorithm
- Full TypeScript type safety with generic support
- 109 comprehensive unit tests with 96%+ coverage
- Support for custom comparison functions
- Immutable sorting (returns new arrays)
- Object sorting support with stable algorithms

### Features

- **Tree-shaking support**: Import only what you need
  - Individual function imports: `@kktestdev/kksort/quick`
  - Grouped imports: `@kktestdev/kksort/sort`
  - Main entry: `@kktestdev/kksort`
- **Type-safe**: Full TypeScript definitions included
- **Zero dependencies**: No runtime dependencies
- **Small bundle size**: Only 14.8 KB total, 6.1 KB compressed package
- **Well-tested**: 109 tests covering edge cases, objects, stability, and immutability

### Developer Experience

- ESLint configuration for code quality
- Prettier for consistent formatting
- Jest for testing with ts-jest
- Pre-publish validation scripts
- Comprehensive documentation in README.md and DEVELOPMENT.md

---

## Release Notes

### Performance Characteristics

| Algorithm  | Best       | Average    | Worst      | Space  | Stable |
|-----------|-----------|-----------|-----------|--------|--------|
| Bubble    | O(n)      | O(n²)     | O(n²)     | O(1)   | ✅     |
| Heap      | O(n log n)| O(n log n)| O(n log n)| O(1)   | ❌     |
| Insertion | O(n)      | O(n²)     | O(n²)     | O(1)   | ✅     |
| Merge     | O(n log n)| O(n log n)| O(n log n)| O(n)   | ✅     |
| Quick     | O(n log n)| O(n log n)| O(n²)     | O(log n)| ❌    |
| Selection | O(n²)     | O(n²)     | O(n²)     | O(1)   | ❌     |

### Security

- No known security vulnerabilities in production dependencies
- Development dependencies kept up-to-date
- Regular security audits recommended

### Migration Guide

This is the initial release. No migration needed.

---

[1.0.0]: https://github.com/Ink01101011/KKsort/releases/tag/v1.0.0
