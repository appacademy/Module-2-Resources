const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  const queue = [];
  const visited = new Set();

  queue.push(start);
  visited.add(start);

  while (queue.length) {
    const node = queue.shift();

    if (node === end) return true;

    const neighbors = adjList[node];

    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
