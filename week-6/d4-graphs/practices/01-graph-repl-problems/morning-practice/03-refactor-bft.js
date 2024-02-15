const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

function printBreadthFirst(start) {
  // ! MEMORIZE
  // * Create a queue and enqueue the starting node
  const queue = [start];

  // * Create a set to store visited nodes
  const visitedNodes = new Set([start]);

  let res = [];

  // * While the queue is not empty, repeat steps 4-6
  while (queue.length) {
    // * Dequeue the first node
    const currentNode = queue.shift();

    // * DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
    res.push(currentNode);// [ 3, 2, 4, 1, 5, 6 ]

    // * For each unvisited neighbor,
    // * add it to the visited nodes and to the back of the queue
    let neighbors = adjList[currentNode];
    // console.log(neighbors);

    neighbors.forEach((neighbor) => {
      if (!visitedNodes.has(neighbor)) {
        visitedNodes.add(neighbor);
        queue.push(neighbor);
      }
    });
  };

  return res;
}

console.log("First Test:");//
console.log(printBreadthFirst(3)); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  [ 3, 2, 4, 1, 5, 6 ]

// console.log("Second Test:");
console.log(printBreadthFirst(6)); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]

// console.log("Third Test:");
console.log(printBreadthFirst(4)); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
