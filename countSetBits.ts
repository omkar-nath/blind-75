function countSetBitsFromZeroToN(n: number): Array<number> {
  let ans: number[] = [];
  function countBits(n: number): number {
    let count = 0;
    while (n !== 0) {
      count += n & 1;
      n >>>= 1;
    }
    return count;
  }

  for (let i = 0; i <= n; i++) {
    ans[i] = countBits(i);
  }

  return ans;
}

// Test cases

const input1 = 0;

console.log("Input:", input1, "Output:", countSetBitsFromZeroToN(input1));

const input2 = 10;

console.log("Input:", input2, "Output", countSetBitsFromZeroToN(input2));

const input3 = 126;

console.log(countSetBitsFromZeroToN(input3));
