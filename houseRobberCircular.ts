export default function neighborhoodTheftCircular(numbers: number[]): number {
  if (numbers.length === 1) return numbers[0];
  if (numbers.length === 0) {
    return 0;
  }

  function calculateMax(start: number, end: number): number {
    // New cache array is needed because the
    let cache = Array.from({ length: numbers.length + 1 }, () => -1);

    function dp(index: number) {
      if (index > end) return 0;

      if (cache[index] !== -1) return cache[index];
      let pick = numbers[index] + dp(index + 2);
      let notPick = dp(index + 1);

      cache[index] = Math.max(pick, notPick);

      return cache[index];
    }

    return dp(start);
  }

  let excludeLastHouse = calculateMax(0, numbers.length - 2);
  let excludeFirstHouse = calculateMax(1, numbers.length - 1);

  return Math.max(excludeLastHouse, excludeFirstHouse);
}
