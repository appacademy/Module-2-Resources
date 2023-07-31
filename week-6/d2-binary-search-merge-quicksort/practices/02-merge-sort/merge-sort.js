// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // Recursively sort the left half
  const leftSort = mergeSort(left);
  // Recursively sort the right half
  const rightSort = mergeSort(right);
  // Merge the halves together and return
  return merge(leftSort, rightSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty sorted array
  const sorted = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (indexA < arrA.length && indexB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[indexA] <= arrB[indexB]) {
      sorted.push(arrA[indexA]);
      indexA++;
    } else {
      sorted.push(arrB[indexB]);
      indexB++;
    }

  }

  // Return the return array
   return [...sorted, ...arrA.slice(indexA), ...arrB.slice(indexB)];
}

/*
                                                                     m
                                                            [4,5,2,9,1,8,7,3,6]
                                      lh                                                              rh
                                       m                                                               m
                                  [4,5,2,9]                                                       [1,8,7,3,6]
                          lh                 rh                                     lh                     rh
                            m                                                        m                       m
                         [4,5]              [2,9]                                 [1,8]                   [7,3,6]
                    lh         rh         lh       rh                          lh      rh               lh       rh
                       a        b            a      b                              a     b                          m
                 ls [4]     rs [5]     ls [2]   rs [9]                       ls [1]  rs [8]           [7]        [3,6]
                        s [4]                 s [2]                               s [1]                 a        lh    rh
                [...4, ..., ...5]      [...2, ..., ...9]                    [...1, ..., ...8]       ls [7]         a     b
                            a                      b                                    a                    ls [3]  rs [6]
                   ls  [4,5]                 rs [2,9]                             ls [1,8]                         s [3]
                               s [2,4,5]                                                                          [...3, ..., 6]
                                                                                                                              b
                          [...2,4,5, ..., ...9]                                                                       rs [3,6]
                                          a
                                ls [2,4,5,9]                                                              s [3,6]
                                                                                                          [...3,6, ...7, ...]
                                                                                                                        b
                                                                                                              rs [3,6,7]
                                                                                          s [1,3,6,7]
                                                                                      [...1,3,6,7, ...8, ...]
                                                                                                    b
                                                                                      rs [1,3,6,7,8]
                                                                                                
                                                                  s[1,2,3,4,5,6,7,8]

                                                                [...1,2,3,4,5,6,7,8, ...9, ...]

                                                                [1,2,3,4,5,6,7,8,9]
*/

module.exports = [merge, mergeSort];
