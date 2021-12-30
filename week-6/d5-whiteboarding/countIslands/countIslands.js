function getNeighbors(row, col, graph) {
  
    const neighbors = [];

    // Check top
    if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);
    
    // Check top right
    if (row > 0 && col < graph[row].length - 1 &&  graph[row - 1][col + 1] === 1) neighbors.push([row - 1, col + 1]);
    
    // Check right
    if (col < graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);
    
    // Check bottom right
    if (row < graph.length - 1 && col < graph[row].length - 1 &&  graph[row + 1][col + 1] === 1) neighbors.push([row + 1, col + 1]);
    
    // Check bottom
    if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);
    
    // Check bottom left
    if (row < graph.length - 1 && col > 0 &&  graph[row + 1][col - 1] === 1) neighbors.push([row + 1, col - 1]);
    
    // Check left
    if (col > 0 &&  graph[row][col - 1] === 1) neighbors.push([row, col - 1]);
    
    // Check top left
    if (row > 0 && col > 0 &&  graph[row - 1][col - 1] === 1) neighbors.push([row - 1, col - 1]);
    
    // Return neighbors
    return neighbors;
}

function countIslands(graph) {
  
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let islandCount = 0;
  
  // Iterate through all indices in graph
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      
      // If an index contains a 1 and has not been visited, increment island count and start traversing neighbors.
      if (graph[i][j] === 1 && !visited.has(`${[i, j]}`)) {
        
        // DO THE THING (increment island count by 1)
        islandCount++;
        // Initialize a stack with current index
        const stack = [[i, j]];
        // Add stringified version of current index to visited
        visited.add(`${[i, j]}`)

        // While stack contains elements
        while (stack.length) {
          
          // Pop element from stack
          const node = stack.pop();
          const currentRow = node[0];
          const currentCol = node[1];
          // Get valid neighbors of current element
          const neighbors = getNeighbors(currentRow, currentCol, graph);
          
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