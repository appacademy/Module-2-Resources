# BFT Path - Matrix Graph Practice

In this practice, you will implement a breadth-first traversal of a matrix.

## Setup

1. Clone the starter from the bottom of the page.
2. `npm install` to install dependencies
3. Fill out code in __bft-path.js__ to solve the problem
4. Uncomment the marked code and run `node bft-path.js` to run local
   test cases
5. `npm test` to run the test specs

## The Problem

Given a matrix, start node, and end value, traverse the matrix from start node
until you find the end value using a **breadth-first traversal**. 

Return an array of nodes tracing the traversal path of `[row, col]` coordinates
from start node to the node of the end value. If the end value is not found,
return false.

Examples:

```javascript
const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

bftPath(matrix1, [ 0, 0 ], 16);
// returns an array of coordinates with no duplicates:

// [
//   [ 0, 0 ], [ 1, 0 ],
//   [ 0, 1 ], [ 2, 0 ],
//   [ 1, 1 ], [ 0, 2 ],
//   [ 3, 0 ], [ 2, 1 ],
//   [ 1, 2 ], [ 0, 3 ],
//   [ 3, 1 ], [ 2, 2 ],
//   [ 1, 3 ], [ 3, 2 ],
//   [ 2, 3 ], [ 3, 3 ]
// ]

// Note: The coordinates represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16
// This information may be helpful for debugging purposes


bftPath(matrix1, [ 2, 2 ], 17)
// returns false since end value is not included in the matrix
```

### `findNeighbors` function

This function should accept a single node from the matrix, as well as the matrix
itself. The function should return an array containing all of the valid
neighbor nodes of that node, in `[ row, col ]` format. 

*A valid neighbor is a node directly above, below, to the left and to the right
of the node, and does **NOT** include diagonal neighbors.*

Run the first set of local tests to confirm that your `findNeighbors` function
is returning the correct array of nodes, and correctly accounts for nodes at the
edge or corners of the matrix.

### `bftPath` function

This function should accept a matrix (two-dimensional array), a start node, and
an end value. The start node is in the `[ row, col ]` format, and points to a
specific coordinate on the matrix itself. 

The function should return an array of `[ row, col ]` coordinates that represent
the path of the breadth-first traversal.

Run the second set of local tests to confirm that your `bftPath` function
is returning the correct path, and returns `false` if the `endValue` does not
exist within the array.
