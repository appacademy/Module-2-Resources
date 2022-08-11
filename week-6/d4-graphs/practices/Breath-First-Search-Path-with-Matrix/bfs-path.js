function findNeighbors(node, matrix) {
    // Up
    if (row - 1 >= 0) {
        neighbors.push([row - 1, col]);
    }

    // Down
    if (row + 1 < matrix.length) {
        neighbors.push([row + 1, col]);
    }

    // Left
    if (col - 1 >= 0) {
        neighbors.push([row, col - 1]);
    }
    
    // Right
    if (col + 1 < matrix[row].length) {
        neighbors.push([row, col + 1]);
    }
    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
    let queue = [];
    let visited = new Set(); 
    let path = [];

    queue.push(startNode);
    visited.add(`${startNode[0]},${startNode[1]}`);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        path.push(currentNode);

        if (matrix[currentNode[0]][currentNode[1]] === endValue) {
            return path;
        }

        let neighbors = findNeighbors(currentNode, matrix);

        for (const neighbor of neighbors) {
            let stringCoords = `${neighbor[0]},${neighbor[1]}`;
            if (!visited.has(stringCoords)) {
                queue.push(neighbor);
                visited.add(stringCoords);
            }
        }
    }
    return false;
}

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];