function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
  const leftArr = [];
  const rightArr = [];
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }

  // Recursively sort the left
  const leftSorted = quicksort(leftArr);
  // Recursively sort the right
  const rightSorted = quicksort(rightArr);

  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted];
}


module.exports = [quicksort];
