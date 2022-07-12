function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];
  const leftHalf = [];
  const rightHalf = [];

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    // every number smaller than the pivot is to the left
    if (val < pivot) leftHalf.push(val)
    // every number larger (or equal) than the pivot is to the right
    else rightHalf.push(val)
  }

  // Recursively sort the left
  const leftSort = quicksort(leftHalf); // [1]  []
  const rightSort = quicksort(rightHalf);
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort];
}

// P
//[2, 1, 3]
// [1]  [3]

//[...1, 2, ...3]

//  P
// [2, 1, 3, 5, 4]

// [1]   [3, 5, 4]
//        P
//       [3, 5, 4]
//       []  [5, 4]
//            P
//           [5, 4]
//       [4]  []
//        [...4, 5]

//   [, 3, ... 4, 5]

// [...1, 2, ...3,4,5]
[1]


module.exports = [quicksort];
