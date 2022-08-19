function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  // const pivot = arr[arr.length - 1];
  const pivot = arr[0];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  const left = []; // all elements in the array less than the pivot
  const right = []; // all elements in the array greater than the pivot
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // Recursively sort the left
  const leftSorted = quicksort(left);
  // Recursively sort the right
  const rightSorted = quicksort(right);
  
  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted];
}


// [1, 2, 3, 4, 5, 6]




module.exports = [quicksort];
