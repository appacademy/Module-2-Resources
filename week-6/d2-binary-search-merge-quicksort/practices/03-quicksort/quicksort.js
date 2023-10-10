function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  const pivot = arr[0]; // safer way => find the median index. 

  const leftHalf = [];
  const rightHalf = [];
  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    // every number larger (or equal) than the pivot is to the right
    if (arr[i] < pivot) {
      leftHalf.push(arr[i]);
    }

    if (arr[i] >= pivot) {
      rightHalf.push(arr[i]);
    }
  }
  // Recursively sort the left
  const leftSort = quicksort(leftHalf);
  // Recursively sort the right
  const rightSort = quicksort(rightHalf);
  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort]
}


module.exports = [quicksort];
