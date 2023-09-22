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
  const queue = [[start]]
  const visited = new Set([start])

  while (queue.length) {
    console.log("iteration")
    console.log({queue})
    console.log(visited)
    const currPath = queue.shift() // [1]
    const last = currPath[currPath.length - 1]  // 1

    // DO THE THING
    if (last === end) return currPath

    adjList[last].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        // add to queue
        queue.push([...currPath, neighbor])
        // add neighbor to visited
        visited.add(neighbor)
      }
    })
  }
  return false
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false
