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
  const neighbors = [];

  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i === row && j === col) continue;
      if (matrix[i] && matrix[i][j]) {
        neighbors.push([i,j]);
      }
    }
  }

  return neighbors;
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  const visited = new Set()
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // If an index contains a 1 and has not been visited, 
      if (matrix[row][col] && !visited.has([row,col].toString())) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        const stack = [[row,col]];
        // Add stringified version of current index to the visited set
        visited.add([row,col].toString());
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          const [currRow, currCol] = stack.pop();
          // Get valid neighbors of current element
          const neighbors = getNeighbors(currRow, currCol, matrix);
          // Iterate over neigbors
          neighbors.forEach(neighbor => {
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