//
// SWAPPING
//
const arr = [0, 1, 2, 3, 4, 5, 6];

// Swap two values with a temporary variable
let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

console.log(arr); // [0, 2, 1, 3, 4, 5, 6]

// Swap two values with destructured array assignment
[arr[4], arr[6]] = [arr[6], arr[4]];

console.log(arr); // [0, 2, 1, 3, 6, 5, 4]

// //
// //
// //
// //
// //
// //
// //

// //
// // SHIFTING
// //
// const arr1 = [0, 1, 2, 3, 4, 5];
// const arr2 = [0, 1, 2, 3, 4, 5];

// // If you want to shift the array to the right by 1...

// // Shifting from front to back will overwrite all values
// for (let i = 1; i < arr1.length; i++) {
//     arr1[i] = arr1[i - 1];
// }

// console.log(arr1); // [ 0, 0, 0, 0, 0, 0 ]

// // Instead, start from the back and shift backwards
// for (let i = arr2.length - 1; i > 0; i--) {
//     arr2[i] = arr2[i - 1];
// }

// console.log(arr2); // [ 0, 0, 1, 2, 3, 4 ]

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

//
// Array.sort()
//

// const numbers = [5, 6, 4, 3, 2, 0, 1];
// const letters = ['C', 'B', 'F', 'A', 'D', 'G', 'E'];

// console.log(numbers.sort()); // [ 0, 1, 2, 3, 4, 5, 6 ]
// console.log(letters.sort()); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

// const moreNumbers = [12, 10, 120, 100, 1100, 11];

// console.log(moreNumbers.sort()); // ???

// moreNumbers.sort((a, b) => console.log({ a }, { b }));

// console.log(
//     numbers.sort((a, b) => {
//     letters.sort((a, b) => {
//     moreNumbers.sort((a, b) => {
//         a = `${a}`;
//         b = `${b}`;

//         console.log(a);
//         for (let i = 0; i < a.length; i++) {
//             console.log(`UTF-16 code ${a.charCodeAt(i)} at index ${i}`);
//         }

//         console.log(b);
//         for (let j = 0; j < b.length; j++) {
//             console.log(`UTF-16 code ${b.charCodeAt(j)} at index ${j}`);
//         }
//     })
// );

// compareFunction(a, b) return value sort order
// > 0	sort b before a
// < 0	sort a before b

// ascending
// console.log(moreNumbers.sort((a, b) => a - b));

// ascending
// console.log(moreNumbers.sort((a, b) => b - a));
