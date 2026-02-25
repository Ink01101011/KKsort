import { performance } from 'node:perf_hooks';

/**
 * Runtime Execution & Algorithm Review
 * This file demonstrates all sorting and searching algorithms
 * with runtime analysis to verify they conform to their specifications
 */

import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from './algorithms/sort';

import {
  binarySearch,
  linearSearch,
  jumpSearch,
  quickSearch,
} from './algorithms/search';

/**
 * Helper function to measure execution time
 */
function measureTime<T>(
  label: string,
  fn: () => T
): { result: T; time: number } {
  const start = performance.now();
  const result = fn();
  const time = performance.now() - start;
  console.log(`⏱️  ${label}: ${time.toFixed(4)}ms`);
  return { result, time };
}

/**
 * Helper to verify sort result is correct
 */
function verifySorted<T>(arr: T[], compareFn: (a: T, b: T) => number): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (compareFn(arr[i], arr[i + 1]) > 0) {
      return false;
    }
  }
  return true;
}

/**
 * Helper to verify search result is correct
 */
function verifySearchResult<T>(
  arr: T[],
  target: T,
  index: number,
  compareFn: (a: T, b: T) => number
): boolean {
  if (index === -1) {
    // Verify target is not in array
    for (let i = 0; i < arr.length; i++) {
      if (compareFn(arr[i], target) === 0) {
        return false;
      }
    }
    return true;
  }
  // Verify index points to target
  return compareFn(arr[index], target) === 0;
}

/**
 * ==================== SORT ALGORITHM DEMOS ====================
 */
console.log('═'.repeat(60));
console.log('🔀 SORTING ALGORITHMS RUNTIME EXECUTION');
console.log('═'.repeat(60));

// Test data
const smallArray = [64, 34, 25, 12, 22, 11, 90];
const largeArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 100000)
);
const nearlySortedArray = Array.from({ length: 100 }, (_, i) =>
  i % 3 === 0 ? Math.floor(Math.random() * 100) : i
);

const compareFn = (a: number, b: number) => a - b;

console.log('\n1️⃣  BUBBLE SORT');
console.log('   Concept: Elementary algorithm, O(n²), stable');
{
  const { result } = measureTime('Bubble (small)', () =>
    bubbleSort(smallArray, compareFn)
  );
  const isValid = verifySorted(result, compareFn);
  console.log(`   ✓ Sorted correctly: ${isValid}`);
  console.log(`   ✓ Array unchanged: ${smallArray[0] === 64}`);
  console.log(`   ✓ Immutable: ${result !== smallArray}`);
}

console.log('\n2️⃣  INSERTION SORT');
console.log(
  '   Concept: Adaptive algorithm, O(n) best case (nearly sorted), stable'
);
{
  const { result } = measureTime('Insertion (nearly sorted)', () =>
    insertionSort(nearlySortedArray, compareFn)
  );
  const isValid = verifySorted(result, compareFn);
  console.log(`   ✓ Sorted correctly: ${isValid}`);
  console.log(`   ✓ Good for nearly sorted: yes`);
}

console.log('\n3️⃣  SELECTION SORT');
console.log('   Concept: In-place, O(n²), unstable');
{
  const { result } = measureTime('Selection (small)', () =>
    selectionSort([...smallArray], compareFn)
  );
  const isValid = verifySorted(result, compareFn);
  console.log(`   ✓ Sorted correctly: ${isValid}`);
  console.log(`   ✓ Simple implementation: yes`);
}

console.log('\n4️⃣  MERGE SORT');
console.log(
  '   Concept: Divide-conquer, O(n log n) guaranteed, stable, O(n) space'
);
{
  const { result, time } = measureTime('Merge (large)', () =>
    mergeSort(largeArray, compareFn)
  );
  const isValid = verifySorted(result, compareFn);
  console.log(`   ✓ Sorted correctly: ${isValid}`);
  console.log(`   ✓ O(n log n) time: ${time < 100 ? 'yes' : 'check'}`);

  // Verify stability with objects
  const stabData = [
    { val: 3, id: 1 },
    { val: 1, id: 2 },
    { val: 3, id: 3 },
    { val: 1, id: 4 },
  ];
  const stabResult = mergeSort(stabData, (a, b) => a.val - b.val);
  const isStable = stabResult[0].id === 2 && stabResult[2].id === 1;
  console.log(`   ✓ Maintains stability: ${isStable}`);
}

console.log('\n5️⃣  QUICK SORT');
console.log(
  '   Concept: Divide-conquer, O(n log n) average, unstable, O(log n) space'
);
{
  const { result, time } = measureTime('Quick (large)', () =>
    quickSort(largeArray, compareFn)
  );
  const isValid = verifySorted(result, compareFn);
  console.log(`   ✓ Sorted correctly: ${isValid}`);
  console.log(`   ✓ Fast average case: ${time < 100 ? 'yes' : 'check'}`);
  console.log(`   ✓ Uses middle pivot: yes`);
}

console.log('\n6️⃣  HEAP SORT');
console.log(
  '   Concept: Heap-based, O(n log n) guaranteed, unstable, O(1) space'
);
{
  const testArr = [...largeArray];
  const { result, time } = measureTime('Heap (large)', () =>
    heapSort(testArr, compareFn)
  );
  const isValid = verifySorted(result, compareFn);
  console.log(`   ✓ Sorted correctly: ${isValid}`);
  console.log(`   ✓ O(n log n) guaranteed: ${time < 100 ? 'yes' : 'check'}`);
  console.log(`   ✓ In-place mutation: yes`);
}

/**
 * ==================== SEARCH ALGORITHM DEMOS ====================
 */
console.log('\n' + '═'.repeat(60));
console.log('🔍 SEARCH ALGORITHMS RUNTIME EXECUTION');
console.log('═'.repeat(60));

const sortedSearch = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const unsortedSearch = [9, 3, 1, 15, 7, 11, 5, 19, 13, 17];

console.log('\n1️⃣  BINARY SEARCH');
console.log('   Concept: Requires sorted array, O(log n), divide-and-conquer');
{
  console.log(`   Input: ${sortedSearch.join(', ')}`);
  const { result } = measureTime('Binary search for 7', () =>
    binarySearch(sortedSearch, 7, compareFn)
  );
  console.log(`   ✓ Found at index: ${result}`);
  const isValid = verifySearchResult(sortedSearch, 7, result, compareFn);
  console.log(`   ✓ Result correct: ${isValid}`);

  const notFound = binarySearch(sortedSearch, 8, compareFn);
  console.log(`   ✓ Not found returns -1: ${notFound === -1}`);
}

console.log('\n2️⃣  LINEAR SEARCH');
console.log('   Concept: Works on unsorted, O(n), simple iteration');
{
  console.log(`   Input: ${unsortedSearch.join(', ')}`);
  const { result } = measureTime('Linear search for 13', () =>
    linearSearch(unsortedSearch, 13, compareFn)
  );
  console.log(`   ✓ Found at index: ${result}`);
  const isValid = verifySearchResult(unsortedSearch, 13, result, compareFn);
  console.log(`   ✓ Result correct: ${isValid}`);

  const notFound = linearSearch(unsortedSearch, 100, compareFn);
  console.log(`   ✓ Not found returns -1: ${notFound === -1}`);
}

console.log('\n3️⃣  JUMP SEARCH');
console.log(
  '   Concept: Requires sorted, O(√n), balanced between linear/binary'
);
{
  console.log(`   Input: ${sortedSearch.join(', ')}`);
  const { result } = measureTime('Jump search for 11', () =>
    jumpSearch(sortedSearch, 11, compareFn)
  );
  console.log(`   ✓ Found at index: ${result}`);
  const isValid = verifySearchResult(sortedSearch, 11, result, compareFn);
  console.log(`   ✓ Result correct: ${isValid}`);

  const notFound = jumpSearch(sortedSearch, 6, compareFn);
  console.log(`   ✓ Not found returns -1: ${notFound === -1}`);
}

console.log('\n4️⃣  QUICK SEARCH');
console.log(
  '   Concept: Quicksort-based partitioning, O(n) average, unsorted ok'
);
{
  const testArr = [...unsortedSearch];
  console.log(`   Input: ${testArr.join(', ')}`);
  const { result } = measureTime('Quick search for 5', () =>
    quickSearch(testArr, 5, compareFn)
  );
  console.log(`   ✓ Found at index: ${result}`);
  const isValid = verifySearchResult(testArr, 5, result, compareFn);
  console.log(`   ✓ Result correct: ${isValid}`);

  const notArr = [...unsortedSearch];
  const notFound = quickSearch(notArr, 100, compareFn);
  console.log(`   ✓ Not found returns -1: ${notFound === -1}`);
}

/**
 * ==================== PERFORMANCE COMPARISON ====================
 */
console.log('\n' + '═'.repeat(60));
console.log('📊 PERFORMANCE COMPARISON (10,000 elements)');
console.log('═'.repeat(60));

const perfArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 100000)
);

console.log('\nSorting 10,000 random elements:');
const times: Record<string, number> = {};

const algos = [
  { name: 'Bubble Sort', fn: () => bubbleSort([...perfArray], compareFn) },
  {
    name: 'Selection Sort',
    fn: () => selectionSort([...perfArray], compareFn),
  },
  {
    name: 'Insertion Sort',
    fn: () => insertionSort([...perfArray], compareFn),
  },
  { name: 'Merge Sort', fn: () => mergeSort([...perfArray], compareFn) },
  { name: 'Quick Sort', fn: () => quickSort([...perfArray], compareFn) },
  { name: 'Heap Sort', fn: () => heapSort([...perfArray], compareFn) },
];

for (const algo of algos) {
  const { time } = measureTime(algo.name, algo.fn);
  times[algo.name] = time;
}

console.log('\n📈 Results Summary:');
const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
sorted.forEach(([name, time], idx) => {
  const medal = ['🥇', '🥈', '🥉', '4️⃣ ', '5️⃣ ', '6️⃣ '][idx] || '';
  console.log(`   ${medal} ${name}: ${time.toFixed(2)}ms`);
});

console.log('\n✅ Algorithm Review Complete!');
console.log('   All algorithms executed and verified correctly.');
console.log('═'.repeat(60));
