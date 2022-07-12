// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

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
