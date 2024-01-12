function getNeighbors(row, col, matrix) {
  const neighbors = [];

  const deltas = [
    [row + 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col],
    [row - 1, col + 1],
    [row - 1, col - 1],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ];

  deltas.forEach((delta) => {
    const [r, c] = delta;
    if (matrix[r] && matrix[r][c] === 1) {
      neighbors.push(delta);
    }
  });

  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited,
      if (matrix[row][col] === 1 && !visited.has([row, col].toString())) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        const stack = [[row, col]];
        // Add stringified version of current index to the visited set
        visited.add([row, col].toString());
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          const [r, c] = stack.pop();

          // Get valid neighbors of current element
          const neighbors = getNeighbors(r, c, matrix);

          // Iterate over neigbors
          neighbors.forEach((neighbor) => {
            // If neighbor has not been visited
            if (!visited.has(neighbor.toString())) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(neighbor.toString());
            }
          });
        }
      }
    }
  }
  // Return island count
  return count;
  // Your code here
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
