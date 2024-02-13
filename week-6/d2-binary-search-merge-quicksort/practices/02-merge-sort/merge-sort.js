/*

   Merge sort
   * Merge sort is the first of the efficient algorithms you will learn.

   * Merge sort operates with a much better time complexity than the more naive approaches we started with.

   The main ideas of merge sort are:
    * 1. It is easy to merge elements of two sorted arrays into a single sorted array
    * 2. You can consider an array containing only a single element as already sorted
    * 3. You can also consider an empty array as sorted

    Time Complexity
     * Best case: O(n log n)
     * Worst case: O(n log n)
    Space complexity
     * O(n) - proportional to size of call stack

    This algorithm sorts values using the following divide and conquer approach:
     * Split the unsorted array in half (divide)
     * Sort the halves (conquer)
     * Merge the newly sorted halves


*/

// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  debugger;
  if (arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Divide the array in half
  const midpoint = Math.floor(arr.length / 2);

  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint, arr.length);

  debugger;
  // Recursively sort the left half
  const leftSorted = mergeSort(left);

  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  debugger;
  // Merge the halves together and return
  let res = merge(leftSorted, rightSorted);

  return res;
}


console.log(mergeSort([1, 7, 3, 4, 2, 0, 8, 9]))


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const returnArr = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;

  debugger;
  // While there are still values in each array...
  while (indexA < arrA.length || indexB < arrB.length) {
    debugger;
    // Compare the first values of each array
    // Add the smaller value to the return array
    // // Move the pointer to the next value in that array

    if (indexA === arrA.length || arrA[indexA] > arrB[indexB]) {
      returnArr.push(arrB[indexB]);
      indexB++;
    } else {
      returnArr.push(arrA[indexA]);
      indexA++;
    }

    // if (indexA === arrA.length) {
    //   returnArr.push(arrB[indexB]);
    //   indexB++;
    //   debugger;
    // } else if (indexB === arrB.length) {
    //   returnArr.push(arrA[indexA]);
    //   indexA++;
    //   debugger;
    // } else if (arrA[indexA] < arrB[indexB]) {
    //   returnArr.push(arrA[indexA]);
    //   indexA++;
    //   debugger;
    // } else {
    //   returnArr.push(arrB[indexB]);
    //   indexB++;
    //   debugger;
    // }
  }

  // Return the return array
  return returnArr;
}


// let zainyMerge = merge(merge(merge([{obj: 'a', value:'2}], [7]), merge([3], [4])), merge(merge([2], [0]), merge([8], [9])))

// console.log(zainyMerge)

/*

   [0, 1, 2, 3, 4, 7, 8, 9];
   [ 1, 3, 4, 7 ]        [ 0, 2, 8, 9 ]
   [ 1, 7 ][ 3, 4 ]     [ 0, 2 ][ 8, 9 ]

*/


// [1, 7, 3, 4]     [2, 0, 8, 9]
// [1, 7]  [3,4]  [2, 0]  [8, 9]
// [1] [7] [3] [4] [2] [0]  [8] [9]
// console.log(merge([1], [7])); // [ 1, 7 ]
// console.log(merge([3], [4])); // [ 3, 4 ]
// console.log(merge([2], [0])); // [ 0, 2 ]
// console.log(merge([8], [9])); // [ 8, 9 ]

// console.log(merge([1, 7], [3, 4])); // [ 1, 3, 4, 7 ]
// console.log(merge([0, 2], [8, 9])); // [ 0, 2, 8, 9 ]

// console.log(merge([1, 3, 4, 7], [0, 2, 8, 9]));// [0, 1, 2, 3, 4, 7, 8, 9];

module.exports = [merge, mergeSort];
