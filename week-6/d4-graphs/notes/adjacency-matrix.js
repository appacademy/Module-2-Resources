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

// matrix[2][1+1]
                       
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
    
}

function driver(matrix) {
    
}