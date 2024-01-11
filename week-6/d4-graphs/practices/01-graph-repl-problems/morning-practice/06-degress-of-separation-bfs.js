const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function degreesOfSeparation(start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    const currPath = queue.shift();
    const currNode = currPath[currPath.length - 1];

    if (currNode === end) return currPath.length - 1;

    adjList[currNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor]);
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
