function getNeighbors(row, col, matrix) {
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  /* iterative solution */
  // const neighbors = [];

  // for (let i = -1; i <= 1; i++) {
  //   for (let j = -1; j <= 1; j++) {
  //     if (i === 0 && j === 0) continue;

  //     const currRow = row + i;
  //     const currCol = col + j;

  //     if (currRow < 0 || currRow >= matrix.length) {
  //       continue;
  //     } else if (currCol < 0 || currCol >= matrix[currRow].length) {
  //       continue;
  //     } else if (matrix[currRow][currCol] === 1) {
  //       neighbors.push([currRow, currCol]);
  //     }
  //   }
  // }

  // return neighbors;

  /* filter solution */
  const neighbors = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col + 1],
  ];

  const validNeighbors = neighbors.filter((currentNode) => {
    const [currentRow, currentCol] = currentNode;
    // const currentRow = currentNode[0]
    // const currentCol = currentNode[1];

    return matrix[currentRow] && matrix[currentRow][currentCol] === 1;
    // return matrix[currentRow] && matrix[currentRow][currentCol] && matrix[currentRow][currentCol] === 1;

    /**
     * matrix[1] => some value
     * matrix[-1] => undefined
     * matrix[-1][1] => TypeError
     * matrix[1][-1] => undefined
     */
  });

  return validNeighbors;
}

function islandTraversal(row, col, matrix, visited) {
  const stack = [[row, col]];
  visited.add([row, col].toString());

  while (stack.length) {
    const node = stack.pop();

    const neighbors = getNeighbors(node[0], node[1], matrix);

    for (const neighbor of neighbors) {
      const neighborStr = neighbor.toString();
      if (!visited.has(neighborStr)) {
        visited.add(neighborStr);
        stack.push(neighbor);
      }
    }
  }
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited,
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neighbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count

  const visited = new Set();

  let islandCount = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const nodeStr = [row, col].toString();

      if (matrix[row][col] === 1 && !visited.has(nodeStr)) {
        islandCount++;
        islandTraversal(row, col, matrix, visited);
      }
    }
  }

  return islandCount;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
