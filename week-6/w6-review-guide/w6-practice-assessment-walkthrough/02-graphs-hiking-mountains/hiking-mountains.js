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
      starts.push([0, i]);
    }
  }

  // Bottom Row
  for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
    if (matrix[matrix.length - 1][i] == 0) {
      starts.push([matrix.length - 1, i]);
    }
  }

  // Left except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][0] == 0) {
      starts.push([i, 0]);
    }
  }

  // Right except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][matrix[0].length - 1] == 0) {
      starts.push([i, matrix[0].length - 1]);
    }
  }

  return starts;
}

function findNeighbors(node, matrix) {
  // Don't forget to include diagonal neighbors!!!

  const [row, col] = node;
  const neighbors = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col + 1],
  ];

  const currentHeight = matrix[row][col];

  const validNeighbors = neighbors.filter((currentNode) => {
    const [currentRow, currentCol] = currentNode;

    // -1 => 1
    // 0 => 0
    // 1 => 1
    // const neighborHeight = matrix[currentRow][currentCol];
    return (
      matrix[currentRow] &&
      Math.abs(matrix[currentRow][currentCol] - currentHeight) <= 1
    );
  });

  return validNeighbors;
}

function pathTraversal(node, matrix, visited, peak) {
  const stack = [node];
  visited.add(node.toString());

  while (stack.length) {
    const node = stack.pop();
    const [row, col] = node;

    if (matrix[row][col] === peak) return true;

    const neighbors = findNeighbors(node, matrix);

    for (const neighbor of neighbors) {
      const neighborStr = neighbor.toString();
      if (!visited.has(neighborStr)) {
        visited.add(neighborStr);
        stack.push(neighbor);
      }
    }
  }

  return false;
}

function identifyPath(mountain) {
  // Find the peak
  const peak = findPeak(mountain);
  // Find the start
  const starts = findStarts(mountain);
  // console.log({ peak });
  // console.log({ starts });

  const visited = new Set();

  // Traverse from the starts and try to get to the top
  for (const start of starts) {
    if (pathTraversal(start, mountain, visited, peak)) return start;
  }

  return false;
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
