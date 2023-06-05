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
    if (arr[i] < pivot) left.push(arr[i]);
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

module.exports = [quicksort];
