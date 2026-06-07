import { mergeSort } from './mergeSort.js';

test('mergeSort([]) result []', () => {
  expect(mergeSort([])).toEqual([]);
});

test('mergeSort([29]) result [29]', () => {
  expect(mergeSort([29])).toEqual([29]);
});

test('mergeSort([29, 4]) result [4, 29]', () => {
  expect(mergeSort([29, 4])).toEqual([4, 29]);
});

test('mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) result [0, 1, 1, 2, 3, 5, 8, 13]', () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});
