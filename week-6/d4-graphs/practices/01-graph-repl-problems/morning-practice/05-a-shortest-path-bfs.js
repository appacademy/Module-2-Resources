const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
  // your code here
  let queue = [[start]];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    console.log({queue});
    console.log({visited});
    let currentPath = queue.shift();
    let currentNode = currentPath[currentPath.length - 1];
    console.log({currentPath});
    console.log({currentNode});
    if (currentNode === end) {
      return currentPath;
    }

    let neighbors = adjList[currentNode];
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([...currentPath, neighbor]);
        visited.add(neighbor);
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
