const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function degreesOfSeparation(start, end) {
  // your code here
  let queue = [[start]]; //array is path
  let visited = new Set().add(start);

  while (queue.length > 0) {
    let currentPath = queue.shift(); //array
    const currentNode = currentPath[currentPath.length - 1]; //a node
    if (currentNode === end) return currentPath.length - 1; // number of steps 
    adjList[currentNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(currentPath.concat(neighbor));
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
