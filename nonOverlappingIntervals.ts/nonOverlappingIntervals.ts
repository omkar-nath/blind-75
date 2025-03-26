const comparator = (a: number[], b: number[]): number => {
  return a[1] - b[1];
};
export default function disjointIntervals(intervals: number[][]): number {
  intervals.sort(comparator);
  let prev = 0;
  let count = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= intervals[prev][1]) {
      prev = i;
      count++;
    }
  }
  return intervals.length - count;
}
