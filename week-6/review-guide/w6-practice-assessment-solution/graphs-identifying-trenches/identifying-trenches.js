// HINT:  Review counting islands before starting this problem!

function findNeighbors(node, matrix) {
    // Only consider N, S, E, W nodes
    // const row = node[0]
    // const col = node[1]

    const [row, col] = node
    const neighbors = []

    // console.log(matrix[row + 1][col], `[${row + 1}, ${col}]`)
    // North
    if (row - 1 >= 0 && matrix[row - 1][col] < -5) {
        neighbors.push([row - 1, col])
    }
    // South
    if (row + 1 < matrix.length && matrix[row + 1][col] < -5) {
        neighbors.push([row + 1, col])
    }

    // West
    if (col - 1 >= 0 && matrix[row][col - 1] < -5) {
        neighbors.push([row, col - 1])
    }

    // East
    if (col + 1 < matrix[row].length && matrix[row][col + 1] < -5) {
        neighbors.push([row, col + 1])
    }

    return neighbors
}

function trenchTraversal(node, matrix, visited) {
    const [row, col] = node

    // Don't bother traversing if it is to shallow
    if (matrix[row][col] >= -5) {
        // console.log('False: too shallow')
        return false
    }

    const stack = [node]
    visited.add(node.toString())

    let trenchLength = 0

    // Traverse the potential trench to count it's length
    while (stack.length) {
        const current = stack.pop()

        trenchLength++

        const neighbors = findNeighbors(current, matrix)

        if (neighbors.length < 1 || neighbors.length > 2) {
            console.log('Too few or too many neighbors: ', neighbors.length)
            return false
        }

        for (const neighbor of neighbors) {
            const neighborStr = neighbor.toString()
            if (!visited.has(neighborStr)) {
                visited.add(neighborStr)
                stack.push(neighbor)
            }
        }
    }

    console.log('Trench length: ', trenchLength)
    if (trenchLength >= 3) return true
    else return false
    // Your code here
}

function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
    const visited = new Set()

    for(let row = 0; row < trenchMatrix.length; row++) {
        for(let col = 0; col < trenchMatrix[row].length; col++) {
            // console.log(`[${row}, ${col}]`)

            if (!visited.has([row, col].toString())) {
                const result = trenchTraversal([row, col], trenchMatrix, visited)

                if (result) return true
                // if (trenchTraversal([row, col], trenchMatrix, visited)) return true
            }
        }
    }

    return false
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
