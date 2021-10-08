// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Copy the original array
  let arrCopy = [...arr];
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...

  while (arrCopy.length > 0) {
    console.log(sorted.join(","));
    // Pop a value from the array

    let val = arrCopy.pop();
    // Create a new spot at the end of the array
    sorted.push(null);
    // Walk through the sorted array in reverse order

    let i = sorted.length - 1;
    while (i > 0) {
      // Check if the value to the left is smaller than the new value

      if (sorted[i - 1] < val) {
        // If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // If not shift the value to the right by 1 and continue
        sorted[i] = sorted[i - 1];
        i--;
      }
    }
    // Insert the unsorted value at the break point

    sorted[i] = val;
  }
  // Return the sorted array

  return sorted;

  // Do not move this console.log
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Set a pointer diving the array into sorted and unsorted halves
  let divider = 1;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    // Grab the first value from the unsorted half
    let val = arr[divider];
    // For each value starting from the divider,
    // Check if the value to the left is smaller than the unsorted value
    let i = divider;
    while (i > 0) {
      // If so, you've reached the insertion point so exit the loop
      if (arr[i - 1] < val) {
        break;
      } else {
        // If not shift the value to the right by 1 and continue
        arr[i] = arr[i - 1];
        i--;
      }
    }
    // Insert the unsorted value at the break point
    arr[i] = val;
    // Increment the dividing pointer and repeat
    divider++;
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
