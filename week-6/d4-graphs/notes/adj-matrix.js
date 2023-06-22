/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 1, 0, 1, 1 ], [ 0, 1, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ];

const matrix = [
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

function findNeighbors(row, col, matrix) {
  const neighbors = [];

  // up
  if (row > 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // down
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // left

  // right

  return neighbors;
}

console.log(findNeighbors(1, 1, matrix));

function localTraversal(node, matrix, visited) {}

function driver(matrix) {}
