function getNeighbors(row, col, graph) {
  
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  
}

function countIslands(graph) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in graph
    // If an index contains a 1 and has not been visited increment island count and start traversing neighbors.
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to visited
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
}

module.exports = [countIslands, getNeighbors];