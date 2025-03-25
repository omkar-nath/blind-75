export default function findWordInGrid(
  grid: string[][],
  target: string,
): boolean {
  function find(i: number, j: number, index: number) {
    if (index === target.length) {
      return true;
    }
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return false;
    }
    if (grid[i][j] !== target[index]) return false;

    grid[i][j] = "*";
    let l1 = find(i + 1, j, index + 1);
    let l2 = find(i, j + 1, index + 1);
    let l3 = find(i - 1, j, index + 1);
    let l4 = find(i, j - 1, index + 1);

    let result = l1 || l2 || l3 || l4;

    grid[i][j] = target[index];

    return result;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (find(i, j, 0)) return true;
    }
  }
  return false;
}
