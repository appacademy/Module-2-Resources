const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

// shortest number of edges between start and end
function degreesOfSeparation(start, end) {
  // Your code here
  const queue = [[start]]
  const visited = new Set([start])

  while (queue.length) {
    const currPath = queue.shift()
    const last = currPath[currPath.length - 1]

    // Do the thing, if the last node in the path is our target,
    // return the number of edges from start to end in the path
    if (last === end) return currPath.length - 1

    adjList[last].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)

        queue.push([...currPath, neighbor])
      }
    })

  }

  return false
}

/*
             6

    4---3
    |   |
    5---2
     \ /
      1
*/

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false

// const newSet = new Set()

// newSet.add([1, 2, 3, 4].toString())
// newSet.add([1, 2, 3, 4].toString())
// // newSet.add([1, 2, 3, 4])
// // newSet.add([1, 2, 3, 4])
// // newSet.add([1, 2, 3, 4])

// console.log(newSet)
