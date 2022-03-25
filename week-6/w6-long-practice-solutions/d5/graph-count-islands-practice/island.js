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
  
  //!!START
    const neighbors = [];

    if (row > 0 && matrix[row - 1][col] === 1) neighbors.push([row - 1, col]);

    if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1) neighbors.push([row - 1, col + 1]);

    if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1) neighbors.push([row, col + 1]);

    if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1] === 1) neighbors.push([row + 1, col + 1]);

    if (row < matrix.length - 1 && matrix[row + 1][col] === 1) neighbors.push([row + 1, col]);

    if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1) neighbors.push([row + 1, col - 1]);

    if (col > 0 &&  matrix[row][col - 1] === 1) neighbors.push([row, col - 1]);

    if (row > 0 && col > 0 && matrix[row - 1][col - 1] === 1) neighbors.push([row - 1, col - 1]);

    return neighbors;
  //!!END
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
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  //!!START
  const visited = new Set();
  let islandCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {

      if (matrix[i][j] === 1 && !visited.has(`${[i, j]}`)) {
        
        islandCount++;
        const stack = [[i, j]];
        visited.add(`${[i, j]}`)

        while (stack.length) {
          
          const node = stack.pop();
          const currentRow = node[0];
          const currentCol = node[1];
          const neighbors = getNeighbors(currentRow, currentCol, matrix);

          for (const neighbor of neighbors) {
            if (!visited.has(`${neighbor}`)) {
              stack.push(neighbor);
              visited.add(`${neighbor}`)
            }
          }
        }
      }
    }
  }

  return islandCount;
  //!!END
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