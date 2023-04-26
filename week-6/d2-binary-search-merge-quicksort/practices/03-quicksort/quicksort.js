function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];
  const left = [];
  const right = [];
  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) left.push(arr[i])
    // every number larger (or equal) than the pivot is to the right
    if (arr[i] >= pivot) right.push(arr[i]);

  }

  // Recursively sort the left
  const leftSort = quicksort(left);
  // Recursively sort the right
  const rightSort = quicksort(right);
  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort];
}


/*
                                                    p
                                                  [10,5,2,9,1,8,7,3]
                                              lh                    rh
                                           p
                                          [5,2,9,1,8,7,3]           []
                                    lh                    rh
                                   p                     p
                                  [2,1,3]               [9,8,7]
                                lh     rh              lh     rh
                                                       p
                                [1]    [3]            [8,7]   []
                              [...1,2,..3]            lh  rh
                                  [1,2,3]            [7]   []
                                                  [...7,8,...]
                                                     [...7,8,9,...]
                                                     [7,8,9]

                                                [1,2,3,5,7,8,9]
                                            [...1,2,3,5,7,8,9, 10, ...]
                                          [1,2,3,5,7,8,9,10]     

*/

module.exports = [quicksort];
