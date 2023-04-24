// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) { //arr = [2,4,6,8,1,3,5,7,9];
  // Your code here
  // Copy the original array
  const copy = [...arr] // => arr.slice() [2,4];
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty:
  while (copy.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','))
    // - Pop a value from the array
    const val = copy.pop(); // => 6
    // - Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);
    let i = sorted.length - 1; // => 6
    // - Walk through the sorted array in reverse order
    while (i > 0) {
      // - Check if the value to the left is smaller than the new value
      if (sorted[i-1] <= val) {
        // - If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // - If not shift the index to the right by 1 and continue
        sorted[i] = sorted[i-1];
        i--;
      }
    }
    // - Insert the unsorted value at the break point
    sorted[i] = val;
  }
  // Return the sorted array
  return sorted;
  //                    i
} // sorted = [1. 3, 5, 6, 7, 8, 9];

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(','));
    // - Grab the first value from the unsorted half
    const val = arr[divider]; // => 7
    // - For each value starting from the divider,
    let i = divider;
    while (i > 0) {
      // - Check if the value to the left is smaller than the unsorted value
      // - If so, you've reached the insertion point so exit the loop
      if (arr[i-1] <= val) {
        break
      }
      // - If not shift the value to the right by 1 and continue
      arr[i] = arr[i-1];
      i--;
    }

    // - Insert the unsorted value at the break point
    arr[i] = val;
    // - Increment the dividing pointer and repeat
    divider++;

  }
  // Return the mutated array
  return arr;
  //                    d
} // [1,2,3,4,5,6,7,8,9]
  //                  i

module.exports = [insertionSort, insertionSortInPlace];
