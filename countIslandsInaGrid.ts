export default function countGridIslands(grid: number[][]): number {
    let visited = Array.from({ length: grid.length + 1 }, () =>
        new Array(grid[0].length + 1).fill(0),
    );

    const isNotValid = (r: number, c: number, visited: number[][]) =>
        r < 0 ||
        c < 0 ||
        r >= grid.length ||
        c >= grid[0].length ||
        grid[r][c] !== 1 ||
        visited[r][c] == 1;
    const direction = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    function dfs(r: number, c: number, visited: number[][]) {
        if (isNotValid(r, c, visited)) return;

        visited[r][c] = 1;
        for (let i = 0; i < 4; i++) {
            const newRow = r + direction[i][0];
            const newCol = c + direction[i][1];
            dfs(newRow, newCol, visited);
        }
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1 && visited[i][j] === 0) {
                dfs(i, j, visited);
                count++;
            }
        }
    }

    return count;
}

const input = [
    [1, 0],
    [0, 0],
    [0, 1],
    [0, 1],
    [1, 1],
];

console.log(countGridIslands(input)); // Output : 2
