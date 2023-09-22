/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 1, 1, 1 ], [ 0, 0, 0, 1, 0 ] ];
const matrix1 = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 1, 1, 0, 1 ],
    [ 0, 0, 0, 1, 0 ],
    [ 0, 0, 1, 1, 1 ],
    [ 0, 0, 0, 1, 0 ]
];

// first row
// console.log(matrix1[0]) // [ 0, 1, 0, 0, 1 ]

// first element in row
// console.log(matrix1[0][0]) // 0

// first element
// let row = 0
// let col = 0

// console.log(matrix1[row][col])

// last ele in 2nd row
// row = 1
// col = 4

// console.log(matrix1[row][col]) // 1


// coordinates in array
// [row, col]

// first element in the graph position is
// [0, 0] // row 0, col 0

// position
// const [row, col] = node
// const [row, col] = [1, 1]
// const neighbors = []

// console.log(matrix1[row][col], "ORIGINAL") //  1

// row above original, same col
// console.log(matrix1[row - 1][col], "above") // 1
// pushing in coordinates
// let aboveCoords = [row - 1, col]
// neighbors.push(aboveCoords)
// neighbors.push([row - 1, col])

// row below original, same col
// console.log(matrix1[row + 1][col], "below") // 0
// neighbors.push([row + 1, col])

// col to left
// console.log(matrix1[row][col - 1], "left") // 1
// neighbors.push([row, col - 1])

// col to right
// console.log(matrix1[row][col + 1], "right") // 1
// neighbors.push([row, col + 1])

// console.log(neighbors, "NEIGHBORS")


// find neighbors
function findNeighbors(row, col, matrix) {
    const neighbors = []

    // up
    if (row > 0 && matrix[row - 1][col] === 1) {
        // console.log("I CAN LOOK UP!")
        neighbors.push([row - 1, col])
    }

    // down
    if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
        // console.log("I CAN LOOK DOWN!")
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

// console.log(findNeighbors(1, 1, matrix1))
// console.log(findNeighbors(3, 3, matrix1))
// console.log(findNeighbors(0, 4, matrix1))


// local traversal
function localTraversal(node, matrix, visited) {
    // console.log(node)
    const queue = [node]
    visited.add(node.toString())
    // console.log(visited)
    // console.log(visited.has([0, 1].toString()))

    while (queue.length) {
        const curr = queue.shift()
        const [row, col] = curr


        const neighbors = findNeighbors(row, col, matrix)
        // console.log(neighbors, "in while")
        // DO THE THING
        if (neighbors.length === 4) return true

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                queue.push(neighbor)
                visited.add(neighbor.toString())
            }
        })
    }

    return false
}

// console.log(localTraversal([0, 1], matrix1, new Set())) // false
// console.log(localTraversal([2, 3], matrix1, new Set())) // true



// driver
function driver(matrix) {

    const visited = new Set()

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] === 1) {
                if (localTraversal([row, col], matrix, visited)) {
                    console.log("WE FOUND AN INTERSECTION")
                    return
                }
            }
        }
    }

    console.log("NO INTERSECTION...")
}

driver(matrix1)
