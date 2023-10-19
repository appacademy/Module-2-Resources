/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 1, 1, 1 ], [ 0, 0, 0, 1, 0 ] ];
// all 1s are islands
// 3 islands, valid neighbors are up, down, left, right

const matrix1 = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 1, 1, 0, 1 ],
    [ 0, 0, 0, 1, 0 ],
    [ 0, 0, 1, 1, 1 ],
    [ 0, 0, 0, 1, 0 ]
];

// console.log(matrix1[0]) // [ 0, 1, 0, 0, 1 ]
// console.log(matrix1[0][0]) // 0

// let row = 0
// let col = 0

// coordinates
// let [row, col] = [0, 0]
// console.log(matrix1[row][col]) // 0


// Find neighbors for row 1, col 1

// let [row, col] = [1, 1]
// console.log("ORIGINAL NODE", matrix1[row][col]) // 1

// const neighbors = []

// // up
// console.log(matrix1[row - 1][col]) // 1
// neighbors.push([row - 1, col])

// // down
// console.log(matrix1[row + 1][col]) // 0
// neighbors.push([row + 1, col])

// // left
// console.log(matrix1[row][col - 1]) // 1
// neighbors.push([row, col - 1])

// // right
// console.log(matrix1[row][col + 1]) // 1
// neighbors.push([row, col + 1])

// console.log(neighbors)


// Finding neighbors function for any coordinate
function findNeighbors(row, col, matrix) {

    const neighbors = []

    // up
    if (row > 0 && matrix[row - 1][col] === 1) {
        neighbors.push([row - 1, col])
    }

    // down
    if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
        neighbors.push([row + 1, col])
    }

    // left
    if (col > 0 && matrix[row][col - 1] === 1) {
        neighbors.push([row, col - 1])
    }

    // right
    if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1) {
        neighbors.push([row, col + 1])
    }

    return neighbors
}

// Looking for accessible neighbors that are 1
// console.log(findNeighbors(1, 1, matrix1)) // [ [ 0, 1 ], [ 1, 0 ], [ 1, 2 ] ]
// console.log(findNeighbors(0, 1, matrix1)) // [ [ 1, 1 ] ]


// Traverse any given coordinate for and island, does the island have an intersection?

function localTraversal(node, matrix, visited) {

    console.log(node)
    const stack = [node]  // [[3, 2]]
    visited.add(node.toString())

    while (stack.length) {
        const curr = stack.pop() // [3, 2]
        const row = curr[0]
        const col = curr[1]


        const neighbors = findNeighbors(row, col, matrix)

        // Do the thing, does this node have 4 neighbors?
        if (neighbors.length === 4) return true

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                stack.push(neighbor)
                visited.add(neighbor.toString())
            }
        })
    }

    return false

}

// console.log(localTraversal([3, 2], matrix1, new Set())) // true
// console.log(localTraversal([1, 0], matrix1, new Set())) // false


// Driver, look at every node, traverse any islands found, see if there is an intersection

function driver(matrix) {

    const visited = new Set()
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1 && !visited.has([row, col].toString())) {
                if (localTraversal([row, col], matrix, visited)) return `Intersection found!`
            }
        }
    }

    return `No intersection in this map`
}

console.log(driver(matrix1))
