function getNeighbors(row, col, matrix) {

  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  const neighbors = []

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue

      const currRow = row + i
      const currCol = col + j

      if (currRow < 0 || currRow >= matrix.length) {
        continue
      } else if (currCol < 0 || currCol >= matrix[currRow].length) {
        continue
      } else {
        if (matrix[currRow][currCol] === 1) {
          neighbors.push([currRow, currCol])
        }
      }
    }
  }

  // console.log(neighbors)

  return neighbors
}

function islandTraversal(row, col, matrix, visited) {
  const stack = [[row, col]]
  visited.add([row, col].toString()) // node coordinate as a string

  while (stack.length) {
    const node = stack.pop()  // subarry of coordinate
    const [currentRow, currentCol] = node

    const neighbors = getNeighbors(currentRow, currentCol, matrix)

    for (const neighbor of neighbors) {
      const neighborStr = neighbor.toString()
      if (!visited.has(neighborStr)) {
        visited.add(neighborStr)
        stack.push(neighbor)
      }
    }
  }
}


function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  const visited = new Set()
  let islandCount = 0

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // [1, 2] === [1, 2] => false
      // '1, 2' === '1, 2' => true
      // interpolate, toString(), .join(''), JSON.stringify()
      const nodeStr = [row, col].toString() // '1, 2'
      if (matrix[row][col] === 1 && !visited.has(nodeStr)) {

        islandCount++
        islandTraversal(row, col, matrix, visited)
      }
    }
  }

  return islandCount
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
