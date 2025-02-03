export default function combinationTargetSum(
  numbers: number[],
  target: number,
): number {
  let cache = new Map<number, number>();
  function combs(remain: number): number {
    if (remain === 0) return 1;
    if (cache.has(remain)) return cache.get(remain)!;
    let result = 0;

    for (const num of numbers) {
      if (remain - num >= 0) {
        result += combs(remain - num);
      }
    }

    cache.set(remain, result);
    return result;
  }
  return combs(target);
}
let numbers = [1, 2, 3];

let target = 4;

console.log(combinationTargetSum(numbers, target));

export function comb2(candidates: number[], target: number): number[][] {
  let cache = new Map<number, number[][]>();
  let numbers: number[] = candidates;
  function combs(remain: number): number[][] {
    if (remain === 0) return [[]];

    if (cache.has(remain)) return cache.get(remain)!;
    let result: number[][] = [];
    for (const num of numbers) {
      if (remain - num >= 0) {
        const subCombinations = combs(remain - num);

        for (const combination of subCombinations) {
          result.push([num, ...combination]);
        }
      }
    }
    cache.set(remain, result);

    return result;
  }

  return combs(target);
}

let numbers2 = [1, 2, 3];

let target2 = 4;

console.log(comb2(numbers2, target2));
