function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  const pivot = arr[0];
  console.log('pivot', pivot)
  // Orient the pivot so that...
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      // every number larger (or equal) than the pivot is to the right
      right.push(arr[i]);
    }
  }
  // Recursively sort the left
  const leftSorted = quicksort(left);
  console.log("leftSorted", leftSorted);
  // Recursively sort the right
  const rightSorted = quicksort(right);
  console.log("rightSorted", rightSorted);
  // Return the left, pivot and right in sorted order
  console.log([...leftSorted, pivot, ...rightSorted]);
  return [...leftSorted, pivot, ...rightSorted];
}

module.exports = [quicksort];

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
quicksort(arr);
