const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  // Your code here
  const queue = [];
  queue.push([start]);
  const visited = new Set();
  visited.add(start);
  // console.log({ queue });
  // console.log({ visited });

  while (queue.length) {
    const currentPath = queue.shift();
    const currentNode = currentPath[currentPath.length - 1];

    // DO THE THING
    if (currentNode === end) return currentPath;

    // queue = [[1,2,5], [1,5,4]]
    // visited = {1,2,3,5,4}
    // currentPath = [1,2,3]
    // currentNode = 3
    // end = 3
    //                    i   
    // neighbors = [1, 2, 4]

    adjList[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([...currentPath, neighbor]);
        visited.add(neighbor);
        // console.log({ queue });
        // console.log({ visited });
      }
    });
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false
