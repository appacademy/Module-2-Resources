// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  // Recursively sort the left half
  const sortedLeft = mergeSort(left);
  // Recursively sort the right half
  const sortedRight = mergeSort(right);
  // Merge the halves together and return
  return merge(sortedLeft, sortedRight);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const merged = [];
  // Point to the first value of each array
  let idxA = 0;
  let idxB = 0;
  // While there are still values in each array...
  while (idxA < arrA.length || idxB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (idxA === arrA.length) {
      merged.push(arrB[idxB]);
      idxB++;
    } else if (idxB === arrB.length) {
      merged.push(arrA[idxA]);
      idxA++;
    } else if (arrA[idxA] < arrB[idxB]) {
      merged.push(arrA[idxA]);
      idxA++;
    } else if (arrB[idxB] < arrA[idxA]) {
      merged.push(arrB[idxB]);
      idxB++;
    }
  }
  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
