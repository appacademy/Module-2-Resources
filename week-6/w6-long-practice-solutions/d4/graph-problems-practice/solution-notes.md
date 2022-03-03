## Island size in a binary matrix

Given a binary matrix, return the size of the island starting from the given row and column. An island consists of 1s that are adjacent in the north, south, west and east directions. (No diagonals.) The following example has an island of size 7 starting from row 0 and column 0.

```js
matrix = [
    [1,1,1,0,0],
    [0,1,1,0,1],
    [0,1,1,0,1],
]

islandSize(0, 0, matrix);  // 7
```

### 1. Identify and define the type of graph

Once again, start by identifying and defining the type of graph. The nodes are 1s and the edges are connections between 1s. Those edges can go both ways, so it's an undirected, cyclic graph. No edge weights. The problem requires visiting and counting each node in a particular island, which sounds like a breadth or depth-first traversal. Either should work fine.

### 2. Implement the `getNeighbors` function

On to step 2. How do you get the neighbors of a particular node? Start by thinking the problem through. The node at row 0, column 0 has one neighbor: row 0, column 1. That node has three neighbors: nodes at row 0, column 0; row 0, col 2; and row 1, column 1. And so on. How did you figure this out?

You might have come up with a plan like the following:

1. Check the nodes to the top, bottom, left and right
2. Add the coordinates of all nodes containing 1 to the return array

```js
function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top
  if (graph[row][col - 1] === 1) neighbors.push([row, col - 1]);

  // Check bottom
  if (graph[row][col + 1] === 1) neighbors.push([row, col + 1]);

  // Check left
  if (graph[row - 1][col] === 1) neighbors.push([row - 1, col]);

  // Check right
  if (graph[row + 1][col] === 1) neighbors.push([row + 1, col]);

  return neighbors;
}
```

Testing this with `getNeighbors(0, 0, matrix)` returns an error. Can you spot the bug?

Through debugging, you might realize that checking above the node at 0, 0 will go outside the bounds of the array. You can fix this by adding boundary checks to each check.

```js
function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top if not on the top row
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);

  // Check bottom if not on the bottom row
  if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);

  // Check left if not on the far left column
  if (col > 0 &&  graph[row][col - 1] === 1) neighbors.push([row, col - 1]);

  // Check right if not on the far right column
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);

  return neighbors;
}
```

Now `getNeighbors(0, 0, matrix)` correctly returns `[[0, 1]]` and `getNeighbors(0, 1, matrix)` returns `[ [ 1, 1 ], [ 0, 0 ], [ 0, 2 ] ]`. Nice!

### 3. Traverse the graph

With `getNeighbors` working, all that's left is to traverse the graph and count up the nodes in the island. We'll use a depth-first traversal for this.

```js
function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [ [row, col] ];

  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {

    // Pop the first node
    let node = stack.pop();
    let currentRow = node[0];
    let currentCol = node[1];

    // Stringify node (needed for visited check)
    let nodeString = `${currentRow},${currentCol}`

    // Check if it's been visited
    if (!visited.has(nodeString)) {

      // If not, mark it as visited
      visited.add(nodeString);

      // DO THE THING (increment size by 1)
      size++;

      // Then push all the neighbors on top of the stack
      let neighbors = getNeighbors(currentRow, currentCol, graph);
      for (let i = 0 ; i < neighbors.length ; i++) {
        let neighbor = neighbors[i];
        stack.push([neighbor[0], neighbor[1]]);
      }
    }
  }

  return size;
}
```

Voila! `islandSize(0, 0, matrix)` correctly counts up the nodes in the large island and returns 7 while `islandSize(1, 4, matrix)` counts the small island and return 2. There's one more bug in this implementation. Can you spot and fix it?