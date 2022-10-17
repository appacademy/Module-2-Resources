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
  const queue = [[start]]; // []
  const visited = new Set([start]);
  console.log({queue})
  console.log({visited})

  while (queue.length) {
    const currentPath = queue.shift(); // [4, 5, 1]
    const currentNode = currentPath[currentPath.length - 1]; // 1

    if (currentNode === end) return currentPath; // [4, 5, 1]

    adjList[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([...currentPath, neighbor]);// 
        console.log({queue})
        visited.add(neighbor)
        console.log({visited})
      }
    });
    // for (let i = 0; i < adjList[currentNode].length; i++) {
    //   let neighbor = adjList[currentNode][i];
    //   if (!visited.has(neighbor)) {
    //     queue.push([...currentPath, neighbor]);
    //   }
    // }

    // let neighbors = adjList[currentNode];
    // console.log(neighbors)
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
