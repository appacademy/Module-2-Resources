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
  const leftSorted = mergeSort(left);
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const returnArr = [];
  // Point to the first value of each array
  let idx1 = 0;
  let idx2 = 0;
  // While there are still values in each array...
  while (idx1 < arrA.length || idx2 < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (idx1 === arrA.length) {
      returnArr.push(arrB[idx2]);
      idx2++;
    } else if (idx2 == arrB.length) {
      returnArr.push(arrA[idx1]);
      idx1++;
    } else if (arrA[idx1] < arrB[idx2]) {
      returnArr.push(arrA[idx1]);
      idx1++;
    } else {
      returnArr.push(arrB[idx2]);
      idx2++;
    }
  }
  // Return the return array
  return returnArr;
}

module.exports = [merge, mergeSort];
