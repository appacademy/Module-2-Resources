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
  // Create an empty array
  const res = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (indexA < arrA.length && indexB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[indexA] <= arrB[indexB]) {
      res.push(arrA[indexA]);
      indexA++;
    } else {
      res.push(arrB[indexB]);
      indexB++;
    }
  }
  // Return the return array
  return [...res, ...arrA.slice(indexA), ...arrB.slice(indexB)];
}

/*
                                                                       m
                                                              [4,5,2,9,1,8,7,3,6]
                                          lh                                                rh
                                           m                                                m
                                      [4,5,2,9]                                        [1,8,7,3,6]
                              lh                   rh                            lh                rh
                               m                    m                               m                 m
                            [4,5]                [2,9]                           [1,8]             [7,3,6]
                        lh        rh            lh    rh                        lh     rh          lh     rh
                                                                                                             m
                     ls [4]    rs [5]       ls [2] rs [9]                    ls [1] rs [8]      ls [7]    [3,6]
                        res [4]                  res [2]                        res [1]                  lh    rh
                      [...4, ..., ...5]        [...2, ..., ...9]           [...1, ..., ...8]            [3]     [6]
                                a                       b                             a                    res [3]
                        ls [4,5]                  rs [2,9]                      ls [1,8]              [...3, ..., ...6]
                                      res [2,4,5]                                                        rs [3,6]
                                      [...2,4,5, ..., ...9]                                        res [3,6]
                                               a
                                     ls [2,4,5,9]                                                   [...3,6, ...7, ...]
                                                                                                                b  
                                                                                                      rs [3,6,7]
                                                                                          res [1,3,6,7]
                                                                                          [...1,3,6,7, ...8, ...] 
                                                                                                   b  
                                                                                    rs [1,3,6,7,8]
                                                            res  [1,2,3,4,5,6,7,8]

                                                            [...1,2,3,4,5,6,7,8, ...9, ...]
                                                            [1,2,3,4,5,6,7,8,9]
*/

module.exports = [merge, mergeSort];
