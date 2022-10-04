function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  const pivot = arr[0];

  // Orient the pivot so that...
  const leftHalf = [];
  const rightHalf = [];

  for (let i = 1; i < arr.length; i++) {

    const val = arr[i];
    // every number smaller than the pivot is to the left
    if (val <= pivot) leftHalf.push(val);
    // every number larger (or equal) than the pivot is to the right
    else rightHalf.push(val);
  }

  // Recursively sort the left
  const leftSort = quicksort(leftHalf);
  // Recursively sort the right
  const rightSort = quicksort(rightHalf);
  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort];
}

//     P
//    [2, 1, 3]
//   LH      RH
//  [1]      [3]
//     [...1, 2, ...3]


//   P
//  [2, 1, 3, 5, 4]
//  LH           RH
//               P
//  [1]         [3,5,4]
//              LH    RH
//                     P 
//              []    [5,4]
//                   LH   RH
//                   [4]  []
//                     [...4, 5, ...]
//                [..., 3, ...4, 5]
//        [...1, 2, ...3,4,5]

module.exports = [quicksort];
