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
  let queue = [];
  let visited = new Set();

  queue.push([start]);
  visited.add(start);

  while (queue.length) {
    let currentPath = queue.shift();
    let currentNode = currentPath[currentPath.length - 1];

    // Do The thing here
    if (currentNode === end) return currentPath.length - 1;// something

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
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
