// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort the left half
  const leftSort = mergeSort(leftHalf);
  const rightSort = mergeSort(rightHalf);
  // Recursively sort the right half

  // Merge the halves together and return
  return merge(leftSort, rightSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const res = []
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (indexA < arrA.length || indexB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    // if (indexA === arrA.length) {
    //   res.push(arrB[indexB]);
    //   indexB++;
    // } else if (indexB === arrB.length) {
    //   res.push(arrA[indexA]);
    //   indexA++;
    // } else if (arrA[indexA] <= arrB[indexB]) {
    //   res.push(arrA[indexA]);
    //   indexA++;
    // } else {
    //   res.push(arrB[indexB]);
    //   indexB++;
    // }

    if (arrA[indexA] <= arrB[indexB]) {
      res.push(arrA[indexA]);
      indexA++;
    } else {
      res.push(arrB[indexB]);
      indexB++;
    }

    
  }
  
  // return res;
  return [...res, ...arrA.slice(indexA), ...arrB.slice(indexB)]
  // Return the return array

}

      //            M
      // [10, 5, 1, 2, 8, 7]
      //  LH               RH
      // [10,5,1]        [2,8,7]
      //    
      //  [10,5,1]
      //  LH     RH
      // [10]   [5,1]

      // [10]

      //        [5,1]
      //        LH    RH
      //       [5]   [1]
      //       [1,5]

      // [1,5,10]

                      // [2,8,7]
                      // LH    RH
                      // [2]   [8,7]

                      // [2]
                      //      LH   RH
                      //      [8]  [7]
                      //      [7,8]

                      // [2,7,8]
      // [1,2,5,7,8,10]

module.exports = [merge, mergeSort];
