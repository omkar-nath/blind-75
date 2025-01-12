// Brute force approach to check all possible
// solutions

export function countPalindromicSubstringBrute(str: string): number {
  const isPalindrome = (inputStr: string, low, high): boolean => {
    while (low < high) {
      if (inputStr[low] !== inputStr[high]) {
        return false;
      }
      low++;
      high--;
    }
    return true;
  };
  let ans = 0;

  // Going through each substring takes O(n^2) time and
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      ans += isPalindrome(str, i, j) ? 1 : 0;
    }
  }
  return ans;
}

// The above approach can be optimised by dynamic programming approach
// The idea revolves around the fact that if we know that the string between i and j is palindrome or not. Then we can easily find if
// on adding a new element in beginning or end will make a new palindromic string or not
// Time complexity: O(n^2)

export function countPalindromicSubstrings(str: string): number {
  let n = str.length;
  let dp: boolean[][] = Array.from({ length: str.length + 1 }, () =>
    Array(n).fill(false),
  );
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    dp[i][i] = true;
    ans++;
  }

  for (let i = 0; i <= n - 1; i++) {
    dp[i][i + 1] = str[i] === str[i + 1];
    ans += dp[i][i + 1] ? 1 : 0;
  }

  for (let k = 3; k < n; k++) {
    for (let i = 0; i < n - k; i++) {
      let j = i + k - 1;
      dp[i][j] = dp[i + 1][j - 1] && str[i] === str[j];
      ans += dp[i][j] ? 1 : 0;
    }
  }

  return ans;
}
