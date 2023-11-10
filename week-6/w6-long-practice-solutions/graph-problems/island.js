function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  //!!START
  const neighbors = [];

  // Check top
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);

  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);

  // Check left
  if (col > 0 &&  graph[row][col - 1] === 1) neighbors.push([row, col - 1]);

  // Check right
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);

  return neighbors;
  //!!END
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  //!!START
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the starting node in visited
  visited.add(`${row},${col}`)

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {

    // Pop the first node
    let node = stack.pop();
    let currentRow = node[0];
    let currentCol = node[1];

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(currentRow, currentCol, graph);
    for (let neighbor of neighbors) {
      let nodeString = `${neighbor[0]},${neighbor[1]}`
      if (!visited.has(nodeString)) {
        console.log('Pushing ${neighbor}')
        stack.push(neighbor);
        visited.add(nodeString)
      }
    }
  }

  return size;
  //!!END
}

module.exports = [getNeighbors, islandSize];
