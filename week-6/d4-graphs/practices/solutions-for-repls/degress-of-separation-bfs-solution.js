adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function degreesOfSeparation(start, end) {
  let queue = [];
  let visited = new Set();

  queue.push([start]);
  visited.add(start);

  while (queue.length > 0) {
    let currentPath = queue.shift()
    let currentNode = currentPath[currentPath.length-1]
    if (currentNode === end) {
        // Found the node!
        return currentPath.length-1;
    }
    adjList[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push(currentPath.concat([neighbor]));
        visited.add(neighbor);
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(4, 2)); // -> 2
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
