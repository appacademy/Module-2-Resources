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
  // Create an empty return array
  const res = [];
  // Point to the first value of each array
  let idxA = 0;
  let idxB = 0;
  // While there are still values in each array...
  while (idxA < arrA.length && idxB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[idxA] <= arrB[idxB]) {
      res.push(arrA[idxA]);
      idxA++;
    } else {
      res.push(arrB[idxB]);
      idxB++;
    }
  }
  // Return the return array
  return [...res, ...arrA.slice(idxA), ...arrB.slice(idxB)];
}

/*
                                                               m
                                                      [4,5,2,9,1,8,7,3,6]
                                  lh                                                           rh
                                   m                                                           m 
                              [4,5,2,9]                                                   [1,8,7,3,6]
                  lh                       rh                                     lh                    rh
                   m                         m                                      m                     m
                [4,5]                     [2,9]                                  [1,8]                 [7,3,6]
              lh     rh                 lh     rh                               lh    rh               lh     rh
                                                                                                                 m
              [4]    [5]               [2]     [9]                              [1]    [8]             [7]    [3,6]
          ls=[4]    rs=[5]           ls=[2]   rs=[9]                            ls=[1]  rs=[8]        ls=[7]  lh   rh
                 [4]                       [2]                                        [1]                      [3]  [6]
            [...4, ..., ...5]           [...2, ..., ...9]                   [...1, ..., ...8]                   ls=[3] rs=[6]
               [4,5]                      [2,9]                                 [1,8]                              [3]
                     ls=[4,5]         rs=[2,9]                                    ls=[1,8]                    [...3, ..., ...6]
                              [2,4,5]                                                                               [3,6]
                            [...2,4,5, ..., ...9]                                                                rs=[3,6]
                            [2,4,5,9]                                                                   [3,6]
                                      ls=[2,4,5,9]                                                  [...3,6, ...7, ...]
                                                                                                          [3,6,7]
                                                                                                    rs=[3,6,7]
                                                                                            [1,3,6,7]
                                                                                [...1,3,6,7, ...8, ...]
                                                                                  [1,3,6,7,8]
                                                                          rs=[1,3,6,7,8]
                                                        [1,2,3,4,5,6,7,8]
                                                      [...1,2,3,4,5,6,7,8, ...9, ...]

                                                      [1,2,3,4,5,6,7,8,9]
*/

module.exports = [merge, mergeSort];
