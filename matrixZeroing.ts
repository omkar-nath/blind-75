// Brute force
export function matrixZeroing(matrix: number[][]): void {
  let rows = new Set<number>();
  let cols = new Set<number>();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (rows.has(row) || cols.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
}

// Time complexity : O(n*m)
// Space complexity: O(1)
// Instead of using seperate sets for storing rows and columns

function setzeroes(matrix: number[][]): void {
  if (matrix.length === 0) return;

  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstrowzero = false;
  let firstcolzero = false;

  // check if the first row contains any zero
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstrowzero = true;
      break;
    }
  }

  // check if the first column contains any zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstcolzero = true;
      break;
    }
  }

  // use first row and first column as markers for zeros
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // set matrix elements to zero using the markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // update the first row if needed
  if (firstrowzero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // update the first column if needed
  if (firstcolzero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}

// Example usage:
let matrix: number[][] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setzeroes(matrix);
console.log(matrix);
