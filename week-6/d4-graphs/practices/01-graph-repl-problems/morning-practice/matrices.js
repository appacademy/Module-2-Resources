const matrix = [
    [ 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];








                       
function findNeighbors(row, col, matrix) {
    const neighbors = [];
     // up
     if (row > 0 && matrix[row-1][col] === 1) {
        neighbors.push([row-1, col]);
     }

     // right
     if (col < matrix[row].length - 1 && matrix[row][col+1] === 1) {
        neighbors.push([row, col+1]);
     }

     return neighbors;
}


function localTraversal(node, matrix, visited) {
    const queue = [node];
    const visited = new Set([node]);

    while (queue.length) {

        const curr = queue.shift();


        // DO THE THING

        const neighbors = findNeighbors(node[0], node[1], matrix)
        neighbors.forEach(neighbor => {
        if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
        }
        });
    }
    // return ???
}




function driver(matrix) {
    const visited = new Set()
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
                localTraversal([row, col], matrix)
            }
        }
    }
}