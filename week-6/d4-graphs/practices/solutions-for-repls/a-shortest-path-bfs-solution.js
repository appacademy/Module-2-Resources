adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
  let queue = [];
  let visited = new Set();

  queue.push([start]); // Note that start is in an array!
  visited.add(start);

  while (queue.length > 0) {
    console.log("queue", queue);
    let currentPath = queue.shift()
    console.log("currentPath", currentPath);
    let currentNode = currentPath[currentPath.length - 1]
    console.log('currentNode', currentNode)
    if (currentNode === end) {
        // Found the node!
        return currentPath;
    }
    adjList[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        // NOTE TO INSTRUCTORS!
        // A _very_ common and confusing error here is for students to do something like:
        // currentPath.push(neighbor)
        // queue.push(currentPath)
        // This is a mistake! Doing it this way will mutate the original array in the queue!
        queue.push(currentPath.concat([neighbor]));
        visited.add(neighbor);
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
