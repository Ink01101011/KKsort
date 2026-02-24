# KKsort

A lightweight, type-safe TypeScript utility library for sorting algorithms. KKsort provides efficient sorting implementations with support for custom comparators and multiple data types.

## ✨ Features

- 🎯 **Type-Safe**: Full TypeScript support with generics
- 📦 **Lightweight**: Minimal dependencies, optimized bundle size
- 🔧 **Flexible**: Support for custom comparator functions
- 🧪 **Well-Tested**: Comprehensive test coverage with Jest
- 💎 **Production-Ready**: ESLint and code formatting included
- 🚀 **Easy to Use**: Simple, intuitive API

## 📦 Installation

```bash
npm install @kktestdev/kksort
```

or with pnpm:

```bash
pnpm add @kktestdev/kksort
```

## 🚀 Quick Start

```typescript
import { sort } from '@kktestdev/kksort';

// Sort numbers (ascending)
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = sort(numbers);
console.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]
```

## 📖 API Documentation

### `sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[]`

Sorts an array and returns a new sorted array without mutating the original.

**Parameters:**
- `array` - The array to sort
- `compareFn` (optional) - Custom comparison function. Returns:
  - Negative number if first argument should come before second
  - Zero if they're equal
  - Positive number if first argument should come after second

**Returns:** A new sorted array

**Examples:**

```typescript
// Sort strings alphabetically
const strings = ['banana', 'apple', 'cherry'];
const sorted = sort(strings);
console.log(sorted); // ['apple', 'banana', 'cherry']

// Sort numbers in descending order
const numbers = [1, 2, 3, 4, 5];
const descending = sort(numbers, (a, b) => b - a);
console.log(descending); // [5, 4, 3, 2, 1]

// Sort objects by property
const users = [
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];
const byAge = sort(users, (a, b) => a.age - b.age);
console.log(byAge); 
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'Bob', age: 35 }
// ]

// Original array is not mutated
const original = [3, 1, 4];
const copy = [...original];
sort(original);
console.log(original); // [3, 1, 4] - unchanged
```

## 🛠️ Development

### Setup

```bash
# Install dependencies
npm install

# or with pnpm
pnpm install
```

### Available Scripts

```bash
# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without changes
npm run format:check
```

### Project Structure

```
src/
├── index.ts                 # Main entry point
├── __tests__/
│   └── index.test.ts       # Test suite
└── algorithms/
    ├── search/             # Search algorithms
    └── sort/
        ├── index.ts        # Sort exports
        └── linear.ts       # Linear sorting implementation
```

## 🧪 Testing

KKsort includes comprehensive tests covering:
- Number sorting (ascending)
- String sorting (alphabetical)
- Custom comparator functions
- Descending order sorting
- Object sorting by properties
- Edge cases (empty arrays, single elements)
- Non-mutation of original arrays

Run tests with:

```bash
npm test
npm run test:coverage
```

## 📄 License

ISC

## 🙌 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 Changelog

### v0.1.0
- Initial release
- Core `sort()` function with custom comparator support
- Full TypeScript support
- Comprehensive test coverage
