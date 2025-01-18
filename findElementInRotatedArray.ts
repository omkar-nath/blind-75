export default function findRotatedArray(
    numbers: number[],
    target: number,
): number {
    function findPivot(numbers: number[]): number {
        let low = 0;
        let high = numbers.length - 1;
        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);

            if (numbers[mid] > numbers[high]) {
                low = mid + 1;
            } else high = mid;
        }
        return low;
    }
    let pivot = findPivot(numbers);

    if (numbers[pivot] === target) return pivot;

    function binarySearch(low: number, high: number, numbers: number[]): number {
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (numbers[mid] === target) {
                ans = mid;
                break;
            } else if (numbers[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    let leftAns = binarySearch(0, pivot - 1, numbers);
    let rightAns = binarySearch(pivot, numbers.length - 1, numbers);
    if (leftAns !== -1) return leftAns;
    return rightAns;
}

const numbers = [7, 10, -6, -5, -2, -1];
const target = 10;
console.log(findRotatedArray(numbers, target));
