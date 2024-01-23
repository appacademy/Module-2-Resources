// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = Math.floor(arr.length / 2);

  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);
  // Recursively sort the left half
  const leftSort = mergeSort(leftHalf);
  // Recursively sort the right half
  const rightSort = mergeSort(rightHalf);
  // Merge the halves together and return
  return merge(leftSort, rightSort);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty holding array
  const holding = [];
  // Point to the first value of each array
  let idxA = 0;
  let idxB = 0;
  // While there are still values in each array...
  while (idxA < arrA.length && idxB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[idxA] <= arrB[idxB]) {
      holding.push(arrA[idxA]);
      idxA++;
    } else {
      holding.push(arrB[idxB]);
      idxB++;
    }
  }
  // Return the return array
  return [...holding, ...arrA.slice(idxA), ...arrB.slice(idxB)];
}

/*
                                                                                  m
                                                                         [4,5,2,1,8,7,3,6]
                                                                lh                                  rh
                                                                 m                                   m
                                                            [4,5,2,1]                           [8,7,3,6]
                                                          lh        rh                         lh        rh
                                                           m          m                          m          m
                                                        [4,5]      [2,1]                      [8,7]      [3,6]
                                                      lh    rh     lh    rh                 lh    rh      lh   rh
                                                       a     b      a        b              a        b      a   b
                                                    [4]     [5]    [2]   [1]               [8]    [7]     [3]  [6]
                                                        [4]            [1]                     [7]           [3]
                                                [...4, ..., ...5]   [...1, ...2, ...]  [...7, ...8, ...]  [...3, ..., ...6]
                                                        a                  b                  a                     b
                                                       [4,5]          [1,2]                  [7,8]             [3,6]
                                                                [1,2]                                 [3,6]
                                                      [...1,2, ...4,5, ...]                     [...3,6, ...7,8, ...]
                                                                     a                                 b
                                                            [1,2,4,5]                               [3,6,7,8]
                                                                                 [1,2,3,4,5]
                                                                              [...1,2,3,4,5, ..., ...6,7,8]
                                                                              [1,2,3,4,5,6,7,8]
*/

module.exports = [merge, mergeSort];
