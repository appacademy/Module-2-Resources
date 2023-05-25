const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  // Your code here
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    //  [[1,5,4]]
    const currPath = queue.shift(); // [1, 2, 3]
    const currNode = currPath[currPath.length - 1]; // 3

    // DO THE THING
    if (currNode === end) return currPath; // [1,2,3]

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
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log('Second Test:');
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log('Third Test:');
// console.log(aShortestPath(6, 1)); // -> false
