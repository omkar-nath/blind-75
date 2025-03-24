export default function decodeMessage(str: string): number {
  let memo = new Map<number, number>();
  function helper(index: number, s: string, memo: Map<number, number>) {
    if (memo.has(index)) {
      return memo.get(index);
    }
    if (index === s.length) {
      return 1;
    }

    if (s[index] === "0") {
      return 0;
    }

    if (index === s.length - 1) return 1;

    let ans = helper(index + 1, s, memo);

    if (parseInt(s.substring(index, index + 2)) <= 26) {
      ans += helper(index + 2, s, memo);
    }

    memo.set(index, ans);
    return ans;
  }

  return helper(0, str, memo);
}
