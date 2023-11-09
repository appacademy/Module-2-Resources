const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}


/*
             6

    4---3
    |   |
    5---2
     \ /
      1
*/

function aShortestPath(start, end) {
  // Your code here
  const queue = [[start]] // queue of paths
  const visited = new Set([start])

  while (queue.length) {
    console.log({queue})
    const path = queue.shift()
    // console.log({path})  // [1]

    const lastNode = path[path.length - 1] // 1

    // DO THE THING
    if (lastNode === end) return path

    const neighbors = adjList[lastNode]

    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)

        // adding new path with original path + new neighbor
        queue.push([...path, neighbor])
      }
    })

  }

  return false
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
