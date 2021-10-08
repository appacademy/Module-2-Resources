// HINT:  Review counting islands before starting this problem!

function findNeighbors(node, matrix) {
  // Only consider N, S, E, W nodes

  // North

  // South

  // East

  // West

  //!!START
  let neighbors = [];
  let row = node[0];
  let col = node[1];

  // North
  if (row - 1 >= 0) {
    if (matrix[row - 1][col] < -5) {
      neighbors.push([row - 1, col]);
    }
  }

  // South
  if (row + 1 < matrix.length) {
    if (matrix[row + 1][col] < -5) {
      neighbors.push([row + 1, col]);
    }
  }

  // East
  if (col - 1 >= 0) {
    if (matrix[row][col - 1] < -5) {
      neighbors.push([row, col - 1]);
    }
  }

  // West
  if (col + 1 < matrix[row].length) {
    if (matrix[row][col + 1] < -5) {
      neighbors.push([row, col + 1]);
    }
  }

  return neighbors;
  //!!END
}

function trenchTraversal(node, matrix, visited) {
  // Don't bother traversing if it is to shallow

  // Traverse the potential trench to count it's length
  //!!START
  let row = node[0];
  let col = node[1];

  // No need to traverse if we're already too shallow
  if (matrix[row][col] >= -5) {
    // console.log("Too shallow")
    return false;
  }

  // Traverse the potential trench and count length
  let stack = [node];
  visited.add(`${row},${col}`);

  let trenchLength = 0;

  while (stack.length > 0) {
    let current = stack.pop();
    trenchLength++;

    let neighbors = findNeighbors(current, matrix);
    // Must have 1 or 2 neighbors
    if (neighbors.length > 2 || neighbors.length < 1) {
      console.log(`Too many or few neighbors: ${neighbors.length}`);
      return false;
    }

    for (let neighbor of neighbors) {
      neighborString = `${neighbor[0]},${neighbor[1]}`;
      if (!visited.has(neighborString)) {
        visited.add(neighborString);
        stack.push(neighbor);
      }
    }
  }
  console.log("Trench length: ", trenchLength);
  if (trenchLength >= 3) {
    return true;
  }
  //!!END
}

function identifyTrench(trenchMatrix) {
  // Start at 0,0 and attempt to traverse any unvisited nodes
  //!!START
  let visited = new Set();

  for (let row = 0; row < trenchMatrix.length; row++) {
    for (let col = 0; col < trenchMatrix[row].length; col++) {
      let stringCoords = `${row},${col}`;
      if (!visited.has(stringCoords)) {
        result = trenchTraversal([row, col], trenchMatrix, visited);
        if (result) {
          return true;
        }
      }
    }
  }

  return false;
  //!!END
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
