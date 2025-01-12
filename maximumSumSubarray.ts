// Kadane's algorithm
function maxSumSubArray(numbers: number[]): number {
    let currentSum = 0;
    let maxAns = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        currentSum = Math.max(numbers[i], currentSum + numbers[i]);
        maxAns = Math.max(currentSum, maxAns);
    }
    return maxAns;
}
