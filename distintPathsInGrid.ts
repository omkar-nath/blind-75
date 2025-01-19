export default function gridDistinctPaths(m: number, n: number): number {
    const dp = Array.from({ length: m + 1 }, () => new Array(n).fill(-1));
    function countWays(r: number, c: number): number {
        if (r === m - 1 && c === n - 1) return 1;
        if (r > m - 1 || c > n - 1) return 0;
        if (dp[r][c] !== -1) return dp[r][c];
        dp[r][c] = countWays(r + 1, c) + countWays(r, c + 1);
        return dp[r][c];
    }

    return countWays(0, 0);
}

let m = 10,
    n = 4;

console.log(gridDistinctPaths(m, n));
