function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr

  // Pick the first value as the pivot
  const pivot = arr[0]
  const leftGroup = []
  const rightGroup = []

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) leftGroup.push(arr[i])
    // every number larger (or equal) than the pivot is to the right
    else rightGroup.push(arr[i])

  }

  // Recursively sort the left
  let leftSorted = quicksort(leftGroup)
  // Recursively sort the right
  let rightSorted = quicksort(rightGroup)

  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted]

}


module.exports = [quicksort];


// Built-in sorts
// const arr = [
//   {name: "Briana", age: 45},
//   {name: "Gary", age: 20},
//   {name: "Charlie", age: 24}
// ]

// console.log(arr)

// // sort by age property
// arr.sort((a, b) => {
//   return a.age - b.age
// })
// console.log(arr)
