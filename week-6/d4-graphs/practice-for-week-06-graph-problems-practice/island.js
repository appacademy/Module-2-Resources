function getNeighbors(row, col, graph) {
  const neighbors = [];
  // Check top
  if (row > 0 && graph[row-1][col] === 1) {
    neighbors.push([row-1,col]);
  }
  // Check bottom
  if (row < graph.length - 1 && graph[row+1][col]) {
    neighbors.push([row+1,col]);
  }
  // Check left
  if (col > 0 && graph[row][col-1] === 1) {
    neighbors.push([row,col-1]);
  }
  // Check right
  if (col < graph[row].length - 1 && graph[row][col+1] === 1) {
    neighbors.push([row,col+1]);
  }
  // Return neighbors

  // Your code here
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = []
  // Put the stringified starting node in visited
  stack.push([row,col]);
  visited.add([row,col].toString());

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    console.log({stack})
    const curr = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    const neighbors = getNeighbors(curr[0], curr[1], graph);
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor.toString())) {
        console.log({visited})
        stack.push(neighbor);
        visited.add(neighbor.toString());
      }
    })
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  }

  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];