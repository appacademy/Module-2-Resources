function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Up
  if (row > 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Down
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Left
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Right
  if (col < graph[row].length - 1 && graph[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }

  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add([row, col].toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    const curr = stack.pop();
    // DO THE THING (increment size by 1)3
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    const neighbors = getNeighbors(row, col, graph);

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
