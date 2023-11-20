/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 1, 1, 1 ], [ 0, 0, 0, 1, 0 ] ];
// valid neighbors are up/down/left/right, nondiagonal

const matrix = [
    [0, 1, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 1, 0],
];

// looking at top row
// console.log(matrix[0]) // [ 0, 1, 0, 0, 1 ]

// looking at first element in top row
// console.log(matrix[0][0]) // 0
// console.log(matrix[1][4]) // 1

// let row = 0
// let col = 0
// console.log(matrix[row][col]) // 0

// row = 3
// col = 2
// console.log(matrix[row][col]) // 1

// coordinates
// let [row, col] = [1, 1]
// console.log(matrix[row][col]) // 1

// const neighbors = []

// // up
// console.log(matrix[row - 1][col], "up") // 1
// neighbors.push([row - 1, col])

// // down
// console.log(matrix[row + 1][col], "down") // 0
// neighbors.push([row + 1, col])

// // left
// console.log(matrix[row][col - 1], "left") // 1
// neighbors.push([row, col - 1])

// // right
// console.log(matrix[row][col + 1], "right") // 1
// neighbors.push([row, col + 1])

// console.log(neighbors)


function findNeighbors(row, col, matrix) {

    const neighbors = []

    // up,
    // if row is greater than 0, we're able to look at any row above
    // if value at coordinate is 1
    if (row > 0 && matrix[row - 1][col] === 1) {
        // console.log(matrix[row - 1][col], "looking UP!!")
        neighbors.push([row - 1, col])
    }

    // down,
    // if row is less than matrix length - 1, we're able to look at any row below
    if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
        // console.log(matrix[row + 1][col], "looking DOWN!!")
        neighbors.push([row + 1, col])
    }

    // left,
    // if col is greater than 0, we're able to look at any col to the left
    if (col > 0 && matrix[row][col - 1] === 1) {
        // console.log(matrix[row][col - 1], "looking LEFT!!")
        neighbors.push([row, col - 1])
    }

    // right,
    // if col is less than row length - 1, we're able to look at any col to the right
    if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1) {
        // console.log(matrix[row][col + 1], "looking RIGHT!!")
        neighbors.push([row, col + 1])
    }

    return neighbors
}

// console.log(findNeighbors(1, 1, matrix)) // [ [ 0, 1 ], [ 1, 0 ], [ 1, 2 ] ]
// console.log(findNeighbors(0, 4, matrix)) // [ [ 1, 4 ] ]
// console.log(findNeighbors(3, 4, matrix)) // [ [ 3, 3 ] ]


// localTraversal
// start at a node, see if it or any of it's neighbors has 4 neighbors

// start at one node, and traverse to other nodes
function localTraversal(node, visited, matrix) {

    // start queue with first coordinate
    const queue = [node]

    visited.add(node.toString())

    while (queue.length) {
        const currNode = queue.shift() // [0, 1]
        // console.log(currNode, "currNode")

        const [row, col] = currNode
        // const row = currNode[0]
        // const col = currNode[1]


        const neighbors = findNeighbors(row, col, matrix)
        // console.log(neighbors, "neighbors") // should be an array

        // DO THE THING, does it have 4 neighbors
        if (neighbors.length === 4) return true

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString())
                queue.push(neighbor)
            }
        })

    }

    return false
}

// Is there a 4-way intersection if I start at these particular nodes?
// console.log(localTraversal([0, 1], new Set(), matrix)) // false
// console.log(localTraversal([2, 3], new Set(), matrix)) // true


// driver, given a matrix, see if 4-way intersection exists
function driver(matrix) {

    const visited = new Set()
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
                console.log([row, col], "row, col going into local traversal")
                if (localTraversal([row, col], visited, matrix)) return "WE FOUND A 4-WAY Intersection!!!"
            }
        }
    }

    return "No luck in this matrix"
}

console.log(driver(matrix))
