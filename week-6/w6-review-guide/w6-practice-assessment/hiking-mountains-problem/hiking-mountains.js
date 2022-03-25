function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length-1].length; i++) {
        if (matrix[matrix.length-1][i] == 0) {
            starts.push([matrix.length-1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length-1])
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    // Don't forget to include diagonal neighbors!!!
    /* filter solution */
    const [row, col] = node
    const neighbors = [
        [row - 1, col],  // top
        [row + 1, col],  // bottom
        [row, col - 1],  // left
        [row, col + 1],  // right
        [row - 1, col - 1],
        [row - 1, col + 1],
        [row + 1, col - 1],
        [row + 1, col + 1]
    ]

    const currentHeight = matrix[row][col]
    console.log({neighbors})

    const validNeighbors = neighbors.filter(currentNode => {
        const [currentRow, currentCol] = currentNode
        return matrix[currentRow] && Math.abs(matrix[currentRow][currentCol] - currentHeight) <= 1  // 6 - 0 = 6
        return matrix[currentRow] && matrix[currentRow][currentCol] && Math.abs(matrix[currentRow][currentCol] - currentHeight) <= 1
    })

    console.log({validNeighbors})
    return validNeighbors

    /* why matrix[currentRow] works the way it does */
    // const matrix = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    // ];

    // const test1 = matrix[2][0];
    // const test2 = matrix[2][-1];

    // // const test3 = matrix[3][0];
    // // const test4 = matrix[3][-1];

    // const test5 = matrix[-1];
    // const test6 = matrix[3];

    // console.log(test1, test2); // => 7 undefined
    // // console.log(test3); // => TypeError
    // // console.log(test4); // => TypeError
    // console.log(test5, test6); // => undefined undefined

    /* if statement solution */
    // const [row, col] = node

    // const neighbors = [];

    /*
    // value for this node in the matrix must be +/- = 1 => -1, 0, 1
    // matrix[row][col] <= 1 && matrix[row][col] >= -1
    // absolute value |-1| === 1 => true
    // Math.abs()
    */


    // const currentHeight = matrix[row][col] // value of current height

    // if (row > 0 && Math.abs(matrix[row - 1][col] - currentHeight) <= 1) neighbors.push([row - 1, col]);

    // if (row > 0 && col < matrix[row].length - 1 && Math.abs(matrix[row - 1][col + 1] - currentHeight) <= 1) neighbors.push([row - 1, col + 1]);

    // if (col < matrix[row].length - 1 && Math.abs(matrix[row][col + 1] - currentHeight) <= 1) neighbors.push([row, col + 1]);

    // if (row < matrix.length - 1 && col < matrix[row].length - 1 && Math.abs(matrix[row + 1][col + 1] - currentHeight) <= 1) neighbors.push([row + 1, col + 1]);

    // if (row < matrix.length - 1 && Math.abs(matrix[row + 1][col] - currentHeight) <= 1) neighbors.push([row + 1, col]);

    // if (row < matrix.length - 1 && col > 0 && Math.abs(matrix[row + 1][col - 1] - currentHeight) <= 1) neighbors.push([row + 1, col - 1]);

    // if (col > 0 &&  Math.abs(matrix[row][col - 1] - currentHeight) <= 1) neighbors.push([row, col - 1]);

    // if (row > 0 && col > 0 && Math.abs(matrix[row - 1][col - 1] - currentHeight) <= 1) neighbors.push([row - 1, col - 1]);

    // return neighbors;
}

function pathTraversal(node, matrix, visited, peak) {
    const stack = [node]
    visited.add(node.toString())

    // const pathTaken = []  // what if we wanted to keep the path

    while(stack.length) {
        const currentNode = stack.pop()
        // const currentNode = stack.shift()
        const [currentRow, currentCol] = currentNode

        // ???? do the thing
        // pathTaken.push(currentNode)
        // if (matrix[currentRow][currentCol] === peak) return pathTaken // return path if we found our end
        if (matrix[currentRow][currentCol] === peak) return true

        const neighbors = findNeighbors(currentNode, matrix)
        // console.log(currentNode)
        for (const neighbor of neighbors) {
            const neighborStr = neighbor.toString()
            if (!visited.has(neighborStr)) {
                visited.add(neighborStr)
                stack.push(neighbor)
            }
        }
    }

    return false
}

function identifyPath(mountain) {
    // Find the peak
    const peak = findPeak(mountain)
    // Find the start
    const starts = findStarts(mountain)

    const visited = new Set()

    // Traverse from the starts and try to get to the top
    for (const start of starts) {
        if(pathTraversal(start, mountain, visited, peak)) return start
    }

    return false
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
