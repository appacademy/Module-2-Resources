// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  const midPoint = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midPoint);
  const rightArr = arr.slice(midPoint, arr.length);

  // Recursively sort the left half
  const sortedLeft = mergeSort(leftArr);
  // Recursively sort the right half
  const sortedRight = mergeSort(rightArr);
  // Merge the halves together and return
  return merge(sortedLeft, sortedRight);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const returnArr = [];

  // Point to the first value of each array
  let idxA = 0;
  let idxB = 0;

  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  while (idxA < arrA.length || idxB < arrB.length) {
    if (idxA === arrA.length) {
      returnArr.push(arrB[idxB]);
      idxB++;
    } else if (idxB === arrB.length) {
      returnArr.push(arrA[idxA]);
      idxA++;
    } else if (arrA[idxA] < arrB[idxB]) {
      returnArr.push(arrA[idxA]);
      idxA++;
    } else {
      returnArr.push(arrB[idxB]);
      idxB++;
    }
  }

  // Return the return array
  return returnArr;
}

module.exports = [merge, mergeSort];
