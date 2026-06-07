export function fibs(n) {
  if (n < 2) return 'Invalid input';

  let result = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    const sum = result[i] + result[i + 1];
    result.push(sum);
  }

  return result;
}

export function fibsRec(n) {
  if (n < 2) return 'Invalid input';

  if (n == 2) return [0, 1];

  let result = fibsRec(n - 1);
  const sum = result[result.length - 1] + result[result.length - 2];
  result.push(sum);

  return result;
}
