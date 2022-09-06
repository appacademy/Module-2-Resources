// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Your code here
  // Copy the original array
  const copy = [...arr];
  // Create an array to store the sorted values
  const sorted = [];
  // While the copied array is not empty:
  while (copy.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','));
    // - Pop a value from the copied array
    const val = copy.pop();
    // - Create a new spot at the end of the sorted array with null to help with comparisons
    sorted.push(null);
    // - Walk through the sorted array in reverse order
    let i = sorted.length - 1;
    while (i > 0) {
      // - Check if the value to the left is smaller than the new value
      // - If so, you've reached the insertion point so exit the loop
      if (sorted[i - 1] <= val) break;
      else {
        // - If not shift the value to the right by 1 and continue
        sorted[i] = sorted[i - 1];
        i--;
      }
    }
    // - Insert the unsorted value at the break point
    sorted[i] = val;

  }
  // Return the sorted array
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Your code here
  // Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(','));
    // - Grab the first value from the unsorted half
    let val = arr[divider];
    // - For each value starting from the divider,
    let i = divider;
    while (i > 0) {
      // - Check if the value to the left is smaller than the unsorted value
      if (arr[i - 1] > val) {
        arr[i] = arr[i-1];
        i--;
      } else {
        // - If so, you've reached the insertion point so exit the loop
        break;
      }
  

    }
    // - If not shift the value to the right by 1 and continue
    // - Insert the unsorted value at the break point
    // - Increment the dividing pointer and repeat
    arr[i] = val;
    divider++;

  }
  // Return the mutated array
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
