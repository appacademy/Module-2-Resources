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
  let queue = [];
  let visited = new Set();

  queue.push([start]);
  visited.add(start);

  while (queue.length) {
    let currentPath = queue.shift();
    let currentNode = currentPath[currentPath.length - 1];

    // Do The thing here
    if (currentNode === end) return currentPath;// something

    adjList[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...currentPath, neighbor]);
      }
    });
  }

  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
