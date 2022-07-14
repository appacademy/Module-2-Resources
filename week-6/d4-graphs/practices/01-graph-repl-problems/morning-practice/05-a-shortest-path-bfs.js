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
  const queue = [[start]]; //[]
  const visited = new Set(); // {1, 2, 5}

  visited.add(start);

  // while queue has length
  while (queue.length) {
    // shift out the currentPath
    const currentPath = queue.shift(); //[1, 2, 5]
    // console.log({currentPath})
    // [...currrentPath, neighbor]
    const currentNode = currentPath[currentPath.length - 1]; // 1
    // console.log({currentNode})
  
    if (currentNode === end) return currentPath;

    const neighbors = adjList[currentNode]; // [2, 5]

    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {


        queue.push([...currentPath, neighbor]); // 
        console.log({queue});
        visited.add(neighbor);
        console.log(visited);
      }
    });
  }
  return false;
  }

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution) [1]
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false
