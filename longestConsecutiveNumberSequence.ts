// Below solution works in O(nlogn) time
export default function longestConsecutiveSequence(numbers: number[]): number {
  let nums = Array.from(new Set(numbers.sort((a, b) => a - b)));

  let longestStreak = 1;
  let currentStreak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak += 1;
    } else {
      longestStreak = Math.max(longestStreak, currentStreak);
      currentStreak = 1;
    }
  }

  return Math.max(currentStreak, longestStreak);
}

// Time complexity: O(n)
// Space complexity: O(n)

function longest(numbers: number[]): number {
  let nums = new Set(numbers);
  let longestStreak = 1;
  nums.forEach((num) => {
    if (!nums.has(num - 1)) {
      let currentStreak = 1;
      let currentNum = num;

      while (nums.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  });

  return longestStreak;
}
