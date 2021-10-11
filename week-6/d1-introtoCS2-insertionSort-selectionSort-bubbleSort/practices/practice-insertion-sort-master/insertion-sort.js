
// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log
    console.log(sorted.join(","));

    // Pop a value from the array

    // Create a new spot at the end of the array

    // Walk through the sorted array in reverse order
      // Check if the value to the left is smaller than the new value
        // If so, you've reached the insertion point so exit the loop
        // If not shift the value to the right by 1 and continue

    // Insert the unsorted value at the break point

  // Return the sorted array

}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {

  // Set a pointer diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Grab the first value from the unsorted half

    // For each value starting from the divider,
      // Check if the value to the left is smaller than the unsorted value
        // If so, you've reached the insertion point so exit the loop
        // If not shift the value to the right by 1 and continue

    // Insert the unsorted value at the break point

    // Increment the dividing pointer and repeat

}

module.exports = [insertionSort, insertionSortInPlace];
