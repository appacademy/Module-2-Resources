const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function degreesOfSeparation(start, end) {
  // your code here
  let queue = [[start]];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    let currentPath = queue.shift();
    let currentNode = currentPath[currentPath.length - 1];

    // Comparison here
    if (currentNode === end) return currentPath.length - 1;

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
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
