export default function tripletSum(numbers: number[]): number[][] {
  numbers.sort((a, b) => a - b);
  let ans: number[][] = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let j = i + 1;
    let k = numbers.length - 1;

    while (j < k) {
      let sum = numbers[i] + numbers[j] + numbers[k];
      if (sum < 0) j++;
      else if (sum > 0) {
        k--;
      } else {
        ans.push([numbers[i], numbers[j], numbers[k]]);
        let s = numbers[j];
        let p = numbers[k];
        while (j < k && numbers[j] === s) j++;
        while (j < k && numbers[k] === p) k--;
      }
    }
  }
  return ans;
}

const numbers = [-1, 0, 1, 2, -1, -4];

console.log(tripletSum(numbers));
