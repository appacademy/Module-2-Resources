function getNeighbors(row, col, matrix) {
  
  const neighbors = [];
  
  // Check top
  if (row > 0 && matrix[row - 1][col] === 1) neighbors.push([row - 1, col]);
  
  // Check top right
  if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1) neighbors.push([row - 1, col + 1]);
  
  // Check right
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1) neighbors.push([row, col + 1]);
  
  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1] === 1) neighbors.push([row + 1, col + 1]);
  
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) neighbors.push([row + 1, col]);
  
  // Check bottom left
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1) neighbors.push([row + 1, col - 1]);
  
  // Check left
  if (col > 0 &&  matrix[row][col - 1] === 1) neighbors.push([row, col - 1]);
  
  // Check top left
  if (row > 0 && col > 0 && matrix[row - 1][col - 1] === 1) neighbors.push([row - 1, col - 1]);
  
  // Return neighbors
    return neighbors;
  //!!END
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let islandCount = 0;
  
  // Iterate through all indices in matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      
      // If an index contains a 1 and has not been visited, 
      if (matrix[i][j] === 1 && !visited.has(`${[i, j]}`)) {
        
        // increment island count and start traversing neighbors
          // DO THE THING (increment island count by 1)
          // Initialize a stack with current index
          islandCount++;
          const stack = [[i, j]];
          // Add stringified version of current index to the visited set
          visited.add(`${[i, j]}`)
          
          // While stack contains elements
          while (stack.length) {
            
            // Pop element from stack
            const node = stack.pop();
            // Get valid neighbors of current element
            const currentRow = node[0];
            const currentCol = node[1];
            const neighbors = getNeighbors(currentRow, currentCol, matrix);
            
            // Iterate over neigbors
            for (const neighbor of neighbors) {
              // If neighbor has not been visited
              if (!visited.has(`${neighbor}`)) {
                // Add neighbor to stack
                stack.push(neighbor);
                // Mark neighbor as visited
                visited.add(`${neighbor}`)
              }
            }
          }
        }
      }
    }
    
  // Return island count
  return islandCount;
}

module.exports = [countIslands, getNeighbors];