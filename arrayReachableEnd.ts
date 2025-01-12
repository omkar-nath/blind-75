// The idea is to think that we start from last index and in every previous index we check if we can reach the goal from that index . If yes, we keep updating the goal
// Time complexity: O(n)
export default function arrayReachableEnd(numbers: number[]): boolean {
    let goal = numbers.length - 1;
    for (let i = numbers.length - 2; i >= 0; i--) {
        if (numbers[i] + i >= goal) {
            goal = i;
        }
    }
    return goal === 0;
}
