/*



  Problem solving approach to graphs

  1. Identify and define the type of graph
    * What is the problem asking you to do?
    * What does the matrix represent?
    * What does each node represent?
    * What relationship do the edges represent?
    * What is considered a valid neighbor, in the context of this problem?
    * Is this a search or traversal problem?
    * Does this require a depth-first or breadth-first approach?

  2. Implement the getNeighbors function

*/

// * Adjacency List - represents relationships as an object data type
// * Node 1 has two neighbor nodes [2, 5]

adjacencyList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

// * Adjacency List
function getNeighbors(adjacencyList, currentNode) {
  return adjacencyList[currentNode];
}


// * Matrix - represents relationships as a two-dimensional (2-D) array data type
// * Try to visualize a matrix as columns and rows
// * columns - up and down
// * row - left
// ex: [row][col] - [0][1]


let matrix = [
  [0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

// * This function will get us neighbors of our current node
// * The [0,0] node has three neighbor nodes [ [0,1], [1,0], [1,1] ],
// * if we are counting diagonals as valid neighbors
function getNeighbors(node, matrix) {
  let neighbors = [];
  let row = node[0];
  let col = node[1];

  // * we can modify the logic to only get nodes that contain a specific value
  // ! depends on what the problem is asking
  // Up
  if (row - 1 >= 0) {
    neighbors.push([row - 1, col]);
  }

  // Down
  if (row + 1 < matrix.length) {
    neighbors.push([row + 1, col]);
  }

  // Left
  if (col - 1 >= 0) {
    neighbors.push([row, col - 1]);
  }

  // Right
  if (col + 1 < matrix[row].length) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;
}

// // * returns the correct neighbors from an internal node
// console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [2,1], [2,3] ]

// // * returns the correct neighbors from a corner node
// console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]

// // * returns the correct neighbors from an edge node
// console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]

// * This get neighbors function gets top, bottom, left, and right
// ! you may run into problems that ask you to get the top-left, top-right, bottom-left, bottom-right as well
// * you will need to modify your getNeighbors function depending on what the problem is asking

/*


  3. Traverse the graph

  * Create a queue and enqueue the starting node
  * Create a set to store visited nodes
  * While the queue is not empty, repeat steps 4-6
  * Dequeue the first node and check if it's been visited
  * If not, mark it as visited and DO THE THING
  * Put all its neighbors in the back of the queue


*/

// ! May need to modify breadthFirstSearch depending on what problem is asking
function printBreadthFirst(start) {
  const queue = [start];
  const visited = new Set([start]);

  // ? Are you tracking shortest path
  // let path = []
  // ? Are you counting something
  // let count = 0;


  while (queue.length) {
    const curr = queue.shift();

    // ! DO THE THING

    // * FIND NEIGHBORS
    let neighbors = adjList[curr];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
}


// ! Note! If you need to store coordinates you must store them as strings
// Arrays are reference data types so if you try to compare you will get misleading results
// ex:


// console.log([1,2] === [1,2]);

console.log(`1,2` == `1,2`)
// `${neighbor[0]},${neighbor[1]}`
