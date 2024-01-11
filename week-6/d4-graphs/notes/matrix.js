/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 1, 0, 1, 1 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ];

const matrix = [
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

// let row = 1;
// let col = 1;

// console.log(matrix[row + 1][col + 1]);

function findNeighbors(row, col, matrix) {
  const neighbors = [];

  // Up
  if (row > 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Down
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Left
  if (col > 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Right
  if (col < matrix[row].length - 1 && matrix[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }

  return neighbors;
}

// console.log(findNeighbors(1, 1, matrix));

function localTraversal(node, matrix, visited) {
  const queue = [node];
  visited.add(node.toString());

  while (queue.length) {
    const [row, col] = queue.shift();

    const neighbors = findNeighbors(row, col, matrix);

    // DO THE THING
    if (neighbors.length === 4) return true;

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor.toString())) {
        queue.push(neighbor);
        visited.add(neighbor.toString());
      }
    });
  }
  return false;
}

// console.log(localTraversal([3, 2], matrix, new Set()));

function driver(matrix) {
  const visited = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (localTraversal([row, col], matrix, visited)) {
        console.log("We found a 4 way intersection!!!!");
        return;
      }
    }
  }

  console.log("We did not find a 4 way intersection");
}

driver(matrix);
