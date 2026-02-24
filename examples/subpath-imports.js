/**
 * Examples of using subpath imports with @kktestdev/kksort
 * 
 * This demonstrates tree-shakable imports where you only import
 * the specific sorting algorithms you need.
 */

// Method 1: Import specific algorithm directly
const { bubbleSort } = require('@kktestdev/kksort/bubble');
const { quickSort } = require('@kktestdev/kksort/quick');
const { mergeSort } = require('@kktestdev/kksort/merge');

// Method 2: Import from sort module (all algorithms)
const { heapSort, insertionSort, selectionSort } = require('@kktestdev/kksort/sort');

// Method 3: Import from main entry (all algorithms available)
const { bubbleSort: bubbleSortMain } = require('@kktestdev/kksort');

// Test the imports
console.log('Testing subpath imports:');
console.log('');

// Test bubbleSort
const numbers1 = [5, 2, 8, 1, 9];
console.log('bubbleSort:', bubbleSort(numbers1, (a, b) => a - b));

// Test quickSort
const numbers2 = [5, 2, 8, 1, 9];
console.log('quickSort:', quickSort(numbers2, (a, b) => a - b));

// Test mergeSort
const numbers3 = [5, 2, 8, 1, 9];
console.log('mergeSort:', mergeSort(numbers3, (a, b) => a - b));

// Test heapSort
const numbers4 = [5, 2, 8, 1, 9];
console.log('heapSort:', heapSort([...numbers4], (a, b) => a - b));

// Test insertionSort
const numbers5 = [5, 2, 8, 1, 9];
console.log('insertionSort:', insertionSort(numbers5, (a, b) => a - b));

// Test selectionSort  
const numbers6 = [5, 2, 8, 1, 9];
console.log('selectionSort:', selectionSort(numbers6, (a, b) => a - b));

// Test main entry import
const numbers7 = [5, 2, 8, 1, 9];
console.log('bubbleSortMain:', bubbleSortMain(numbers7, (a, b) => a - b));

console.log('');
console.log('✅ All subpath imports working correctly!');
