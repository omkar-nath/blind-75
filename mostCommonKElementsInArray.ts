export default function mostCommonElements(
  numbers: number[],
  k: number,
): number[] {
  const frequencyMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    frequencyMap.set(
      numbers[i],
      frequencyMap.has(numbers[i]) ? frequencyMap.get(numbers[i]) + 1 : 1,
    );
  }

  let arr: number[][] = new Array(frequencyMap.size);
  frequencyMap.forEach((value, key) => {
    arr.push([key, value]);
  });

  arr.sort((a, b) => b[1] - a[1]);
  let ans: number[] = [];
  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0]);
  }
  return ans;
}

// Using count sort. Here we are making buckets, A bucket has the index as frequency and the value is the element itself
// No sorting is required
export function mostCommonElements2(numbers: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }

  const buckets: number[][] = Array(numbers.length + 1)
    .fill(null)
    .map(() => []);

  frequencyMap.forEach((value, key) => {
    buckets[value].push(key);
  });

  const result: number[] = [];

  for (let i = buckets.length - 1; i >= 0 && k > 0; i--) {
    if (buckets[i].length > 0) {
      for (const num of buckets[i]) {
        result.push(num);
        k--;

        if (k === 0) break;
      }
    }
  }
  return result;
}
