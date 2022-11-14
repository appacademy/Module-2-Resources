// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const midPoint = Math.floor(arr.length / 2);

  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);
  // Recursively sort the left half
  const leftSort = mergeSort(left);
  // Recursively sort the right half
  const rightSort = mergeSort(right);
  // Merge the halves together and return
  return merge(leftSort, rightSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
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

//                                                m
//                                        [10,5,1,2,8,7]
//                       lh                                                 rh
//                          m                                                m
//                     [10, 5, 1]                                        [2, 8, 7]
//                 lh             rh                              lh                rh
//                                                                                     m
//                                   m                            [2]               [8,7]
//                 [10]           [5,1]                           [2]             lh     rh
//                 [10]         lh      rh                                       [8]      [7]
//                             [5]       [1]
//                             [5]       [1]
//                                  [...1, ...5, ...]                               [7,8]
//                                 [1, 5]                   
//                    [1, 5, 10]                                          [2,7,8]
//                                            [1,2,5,7,8,10]

module.exports = [merge, mergeSort];
