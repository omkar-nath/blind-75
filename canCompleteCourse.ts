export default function canCompleteCourse(
  courses: number,
  prerequisities: number[][],
): boolean {
  let adjacencyList: number[][] = new Array(courses).fill(0).map(() => []);
  let indegree: number[] = new Array(courses).fill(0);

  for (const prerequisite of prerequisities) {
    adjacencyList[prerequisite[1]].push(prerequisite[0]);
    indegree[prerequisite[0]]++;
  }

  let queue: number[] = [];

  for (let i = 0; i < courses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let completedCount = 0;
  while (queue.length > 0) {
    const node: number = queue.shift()!;
    completedCount++;

    for (const neighbor of adjacencyList[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  return completedCount === courses;
}

let courses = 4;
let prerequisities = [
  [1, 0],
  [2, 1],
  [3, 2],
  [1, 3],
];

let courses2 = 4;
let prerequisities2 = [
  [1, 0],
  [2, 1],
  [3, 2],
];
console.log(canCompleteCourse(courses2, prerequisities2));
