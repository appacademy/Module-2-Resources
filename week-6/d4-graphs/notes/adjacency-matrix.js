/*
 PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM. 
 THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

const matrix = [
    [ 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

// const node = matrix[2][1]

// matrix[2][1+1]s
                       
function findNeighbors(row, col, matrix) {
    const neighbors = []; // [[row-1,col], [row+1, col]]
    // up
    if (row > 0 && matrix[row-1][col] === 1) {
        neighbors.push([row-1,col])
    }

    // up & right
    if (row > 0 && col < matrix[row].length - 1 && matrix[row-1][col+1] === 1) {
     
        neighbors.push([row-1,col+1]);
    }

    // down
    if (row < matrix.length - 1  && matrix[row+1][col] === 1) { 
        neighbors.push([row+1,col]);
    }
    // left
    if (col > 0 && matrix[row][col-1] === 1) {
        neighbors.push([row,col-1]);
    }
    // right
    if (col < matrix[row].length - 1 && matrix[row][col+1] === 1) {
        neighbors.push([row,col+1]);
    }

    return neighbors;
}

console.log(findNeighbors(3, 0, matrix));

function localTraversal(node, matrix, visited) {
    const queue = [node]; // => [row, col]

    visited.add(node.toString());

    while (queue.length) {
        const curr = queue.shift();

        // DO THE THING!!!!!

        const neighbors = findNeighbors(curr[0], curr[1], matrix);

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                queue.push(neighbor);
                visited.add(neighbor.toString());
            }
        });
    }
    // return ???
}

function driver(matrix) {
    const visited = new Set();

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
               if (localTraversal([row,col], matrix, visited)) {
                // do some stuff
               }

            }
        }
    }
    // return ???
}