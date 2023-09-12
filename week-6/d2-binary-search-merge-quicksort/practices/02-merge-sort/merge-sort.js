// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr
  }

  // Divide the array in half
  const mid = Math.floor(arr.length / 2)
  const leftSlice = arr.slice(0, mid)
  const rightSlice = arr.slice(mid)

  // Recursively sort the left half
  const leftSort = mergeSort(leftSlice)

  // Recursively sort the right half
  const rightSort = mergeSort(rightSlice)

  // Merge the halves together and return
  return merge(leftSort, rightSort)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const sorted = []

  // Point to the first value of each array
  let idxA = 0
  let idxB = 0

  // While there are still values in each array...
  while (idxA < arrA.length && idxB < arrB.length) {

    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[idxA] < arrB[idxB]) {
      sorted.push(arrA[idxA])
      idxA++
    } else {
      sorted.push(arrB[idxB])
      idxB++
    }

  }

  // Return the return array
  return [...sorted, ...arrA.slice(idxA), ...arrB.slice(idxB)]
}

module.exports = [merge, mergeSort];


/*

                                   [5, 2, 1, 3, 6, 4]
                                             m
                        lH                             rH
                      [5, 2, 1]                     [3, 6, 4]

                    [5]      [2, 1]               [3]       [6, 4]

                              a     b                         a     b
                             [2] [1]                         [6] [4]

                          [...1, 2, ...]                    [...4, ...6, ...]
                               [1, 2]                         [4, 6]


                      a         b                       a  b
                     [5]  [1, 2]                     [3]  [4, 6]

                     [...1, 2, ...5, ...]           [...3, ..., ...4, 6]
                     [1, 2, 5]                         [3, 4, 6]

                                        a        b
                               [1, 2, 5]  [3, 4, 6]

                               [...1, 2, 3, 4, 5, ..., ...6]
                                    [1, 2, 3, 4, 5, 6]
*/
