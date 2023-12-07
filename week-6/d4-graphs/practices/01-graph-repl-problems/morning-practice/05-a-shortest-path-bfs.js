const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  // [4, 1]
  // Your code here
  const queue = [[start]]; // []
  const visited = new Set([start]); // {4, 3, 5, 2, 1}

  while (queue.length) {
    const currPath = queue.shift(); // [4,5,1]
    const currNode = currPath[currPath.length - 1]; // 1

    // DO THE THING
    if (currNode === end) return currPath;
    //           i
    adjList[currNode].forEach((neighbor) => {
      // [1, 3, 5]
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor]);
        visited.add(neighbor);
      }
    });
  }
  return false;
}

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false

/*
queue = [[1]]
currPath = [1]
currNode = 1

queue = [ [1,2,5], [1,5,4]]
currPath = [1,2,3]
currNode = arr[arr.length-1] => 3

queue.push([...currPath, neighbor])
*/
