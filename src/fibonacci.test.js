import { fibs, fibsRec } from './fibonacci.js';

test('Invalid input', () => {
  expect(fibs(1)).toBe('Invalid input');
});

test('fibs(1) return [0]', () => {
  expect(fibs(2)).toEqual([0, 1]);
});

test('fibs(8) return [0, 1, 1, 2, 3, 5, 8, 13]', () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('fibsRec invalid input', () => {
  expect(fibsRec(1)).toBe('Invalid input');
});

test('fibsRec(1) return [0]', () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});

test('fibsRec(8) return [0, 1, 1, 2, 3, 5, 8, 13]', () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
