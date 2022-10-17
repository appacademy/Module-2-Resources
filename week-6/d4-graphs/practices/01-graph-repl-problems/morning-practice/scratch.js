const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// findNeighbor(row, col, matrix1)
[[0,1], [1,0]]
// if (row < matrix1.length - 1)
const row = 1;
const col = 2;
console.log(matrix1[row][col]);
// for (let row = 0; row < matrix1.length; row++) {
//     for (let col = 0; col < matrix1[row].length; col++) {
//         console.log(matrix1[row][col])
//     }
// }



const matrix2 = [
    [1,1,1,0,0],
    [0,1,1,0,1],
    [0,1,1,0,1],
]