export default function neighorhoodTheft(numbers: number[]): number {
  let dp = Array.from({ length: numbers.length }, () => -1);
  function calculateMax(index: number): number {
    if (index >= numbers.length) return 0;

    if (dp[index] !== -1) return dp[index];
    let pick = numbers[index] + calculateMax(index + 2);
    let notPick = calculateMax(index + 1);

    dp[index] = Math.max(pick, notPick);

    return dp[index];
  }

  return calculateMax(0);
}

const input = [1, 2, 3, 1];
const input2 = [2, 7, 9, 3, 1];
const input3 = [3, 6, 1, 0, 6, 0, 0, 9];

console.log(neighorhoodTheft(input2));
