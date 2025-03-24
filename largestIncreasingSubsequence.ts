export default function longestIncreasingSubsequence(
    numbers: number[],
): number {
    const memo = new Map<string, number>();

    function helper(index: number, prev: number) {
        if (!numbers.length) {
            return 0;
        }
        const key = `${index},${prev}`;
        let skip = helper(index + 1, prev);

        let take = 0;
        if (prev === -1 || numbers[index] > prev)
            take = 1 + helper(index + 1, numbers[index]);

        const result = Math.max(skip, take);
        memo.set(key, result);

        return result;
    }

    return helper(0, -1);
}
