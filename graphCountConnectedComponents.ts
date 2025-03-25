export default function graphCountConnectedComponents(
  n: number,
  edges: Array<[number, number]>,
): number {
  let graph = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [v1, v2] of edges) {
    graph.get(v1)!.push(v2);
    graph.get(v2)!.push(v1);
  }

  function dfs(source: number) {
    visited.add(source);
    for (const neigh of graph.get(source)!) {
      if (!visited.has(neigh)) {
        dfs(neigh);
      }
    }
  }
  let visited = new Set<number>();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
}
