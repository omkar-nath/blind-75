export default function smallestInRotatedArray(numbers: number[]): number {
  let low = 0;
  let high = numbers.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    ans = Math.min(ans, numbers[mid]);
    if (numbers[mid] > numbers[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return numbers[low];
}

const smallestInArray = (numbers: number[]) => {
  let low = 0;
  let high = numbers.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (numbers[low] <= numbers[mid]) {
      ans = Math.min(ans, numbers[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, numbers[mid]);
      high = mid - 1;
    }
  }
  return ans;
};

const input = [4, 5, 6, 0, 1, 2, 3];
const target = 1;

console.log(smallestInArray(input));
