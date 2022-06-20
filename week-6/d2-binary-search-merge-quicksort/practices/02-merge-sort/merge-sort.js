// Merge Sort out-of-place
// Do not modify the original array
// [8, 3, 6, 5]

function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr
    // If so, it's already sorted: return

  // Divide the array in half
  const midpoint = Math.floor(arr.length/2)
  const left = arr.slice(0, midpoint)
  const right = arr.slice(midpoint, arr.length)

  // Recursively sort the left half
  const leftSorted = mergeSort(left)

  // Recursively sort the right half
  const rightSorted = mergeSort(right)

  // Merge the halves together and return

  return merge(leftSorted, rightSorted)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const res = []

  // Point to the first value of each array
  let indexA = 0
  let indexB = 0

  // While there are still values in each array...
  while (indexA < arrA.length || indexB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

    if (indexA === arrA.length) {
      res.push(arrB[indexB])
      indexB++
    } else if (indexB === arrB.length) {
      res.push(arrA[indexA])
      indexA++
    } else if (arrA[indexA] <= arrB[indexB]) {
      res.push(arrA[indexA])
      indexA++
    } else if (arrB[indexB] <= arrA[indexA]) {
      res.push(arrB[indexB])
      indexB++
    }

    // if (arrA[indexA] < arrB[indexB]) {
    //   res.push(arrA[indexA])
    //   indexA++
    // } else if (arrB[indexB] < arrA[indexA]) {
    //   res.push(arrB[indexB])
    //   indexB++
    // } else if (indexA === arrA.length) {
    //   res.push(arrB[indexB])
    //   indexB++
    // } else if (indexB === arrB.length) {
    //   res.push(arrA[indexA])
    //   indexA++
    // }
  }
  // Return the return array
  return res
}

module.exports = [merge, mergeSort];
