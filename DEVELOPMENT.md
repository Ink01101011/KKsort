# Development Guide

## Setup

```bash
# Install dependencies
npm install

# or with pnpm
pnpm install
```

## Available Scripts

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

## Project Structure

```
src/
├── index.ts                 # Main entry point
├── __tests__/
│   └── index.test.ts       # Test suite
└── algorithms/
    ├── search/             # Search algorithms
    └── sort/
        ├── index.ts        # Sort exports
        ├── bubble.ts       # Bubble sort implementation
        ├── heap.ts         # Heap sort implementation
        ├── insertion.ts    # Insertion sort implementation
        ├── linear.ts       # Linear sorting implementation
        ├── merge.ts        # Merge sort implementation
        ├── quick.ts        # Quick sort implementation
        └── selection.ts    # Selection sort implementation
```

## Testing

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

## Contributing

Contributions are welcome! Please:
1. Write tests for new features
2. Ensure all tests pass: `npm test`
3. Run linter: `npm run lint`
4. Format code: `npm run format`
5. Submit a Pull Request

## Code Style

- **Linter**: ESLint with TypeScript support
- **Formatter**: Prettier
- **Language**: TypeScript 5.3+
- **Test Framework**: Jest

To maintain code quality, always run:

```bash
npm run lint:fix
npm run format
npm test
```

## Publishing

Before publishing to npm:

```bash
# Ensure everything builds and tests pass
npm run build
npm test

# Update version in package.json
npm version major|minor|patch

# Publish to npm
npm publish
```

The `prepublishOnly` script will automatically build the project before publishing.
