export default function maxProductSubArray(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  let minSoFar = numbers[0];
  let maxSoFar = numbers[0];
  let result: number = maxSoFar;
  for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    let tempMax = Math.max(current, minSoFar * current, maxSoFar * current);

    // Update the minimum product
    minSoFar = Math.min(current, maxSoFar * current, minSoFar * current);
    maxSoFar = tempMax;

    result = Math.max(maxSoFar, result);
  }
  return result;
}
