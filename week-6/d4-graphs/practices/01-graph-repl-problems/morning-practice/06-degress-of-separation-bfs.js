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
    //  [[1,5,4]]
    const currPath = queue.shift(); // [1]
    const currNode = currPath[currPath.length - 1]; // 3

    // DO THE THING
    if (currNode === end) return currPath.length - 1; // [1,2,3]

    adjList[currNode].forEach((neighbor) => {
      // [1, 2, 4]
      if (!visited.has(neighbor)) {
        // {1,2,5,3,4}
        queue.push([...currPath, neighbor]);
        visited.add(neighbor);
      }
    });
  }
  return false;
}

console.log('First Test:');
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log('Second Test:');
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log('Third Test:');
console.log(degreesOfSeparation(6, 1)); // -> false
