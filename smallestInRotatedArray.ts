export default function smallestInRotatedArray(numbers: number[]): number {
    let low = 0;
    let high = numbers.length - 1;
    let ans = Number.MAX_SAFE_INTEGER;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        ans = Math.min(ans, numbers[mid]);
        if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return numbers[low];
}
