export default function segmentWords(str: string, dict: string[]): boolean {
  let memo: number[] = new Array(str.length + 1).fill(-1);

  function wordBreak(index: number): boolean {
    if (index === str.length) {
      return true;
    }

    if (memo[index] !== -1) {
      return memo[index] === 1;
    }

    for (let word of dict) {
      const len = word.length;
      if (str.substring(index, index + len) === word) {
        if (wordBreak(index + len)) {
          memo[index] = 1;
          return true;
        }
      }
    }

    memo[index] = 0;
    return false;
  }

  return wordBreak(0);
}

export function wordBreak(str: string, dict: string[]): boolean {
  let queue = [0];

  let set = new Set(dict);
  let seen = new Set();

  while (queue.length > 0) {
    if (queue.length === 0) return false;
    const index = queue.shift()!;

    if (index === str.length) return true;

    for (let end = index + 1; end <= str.length; end++) {
      if (seen.has(end)) continue;

      if (set.has(str.substring(index, end))) {
        queue.push(end);
        seen.add(end);
      }
    }
  }
  return false;
}
