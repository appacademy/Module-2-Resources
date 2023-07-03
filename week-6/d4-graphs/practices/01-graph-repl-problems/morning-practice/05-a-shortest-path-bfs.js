const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  // start === 1, end === 3
  // Your code here
  const queue = [[start]]; // [[[1,5,4]]
  const visited = new Set([start]); // {1,2,5,3}

  while (queue.length) {
    const currentPath = queue.shift(); // [1,2,3]
    const currentNode = currentPath[currentPath.length - 1]; // 3

    // DO THE THING
    if (currentNode === end) return currentPath; // [1,2,3]
    //           i
    adjList[currentNode].forEach((neighbor) => {
      // [1, 2, 4]
      if (!visited.has(neighbor)) {
        queue.push([...currentPath, neighbor]);
        visited.add(neighbor);
      }
    });
  }
  return false;
}

console.log('First Test:');
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log('Second Test:');
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log('Third Test:');
console.log(aShortestPath(6, 1)); // -> false
