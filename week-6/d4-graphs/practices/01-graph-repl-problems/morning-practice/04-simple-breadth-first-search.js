const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
// ! MEMORIZE
  // * Create a queue and enqueue the starting node
  const queue = [start];

  // * Create a set to store visited nodes
  const visitedNodes = new Set([start]);

  // * While the queue is not empty, repeat steps 4-6
  while (queue.length) {
    // * Dequeue the first node
    const currentNode = queue.shift();

    // ? WHAT IS THE  THING THAT YOU NEED TO FOR THE DEQUEUED NODE
    // console.log(currentNode);
    // res.push(currentNode);// [ 3, 2, 4, 1, 5, 6 ]
     if(currentNode === end) return  true;

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

  return false;
}
console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
