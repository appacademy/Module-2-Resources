const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {
  // Your code here
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    const currentPath = queue.shift();
    const currentNode = currentPath[currentPath.length - 1];

    // DO THE THING
    if (currentNode === end) return currentPath.length - 1;

    adjList[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([...currentPath, neighbor]);
        visited.add(neighbor);
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
