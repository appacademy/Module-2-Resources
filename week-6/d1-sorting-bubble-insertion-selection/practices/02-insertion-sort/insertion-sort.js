// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Copy the original array
  let arrCopy = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty:
  while (arrCopy.length > 0) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(","));

    // - Pop a value from the array
    let val = arrCopy.pop();

    // - Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);

    // - Walk through the sorted array in reverse order
    let i = sorted.length - 1;

    while (i > 0) {
      // - Check if the value to the left is smaller than the new value
      if (sorted[i - 1] < val) {
        // - If so, you've reached the insertion point so exit the loop
        break;
      } else {
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

// console.log(insertionSort([2, 4, 0, 8, 1]));

/*

  copy: [2, 4, 0, 8 ] val: 1 sorted:  [1]
  copy: [2, 4, 0,   ] val: 8 sorted:  [1, 8] i: 1
  copy: [2, 4,      ] val: 0  sorted: [0, 1, 8] i: 0
  copy: [2,         ] val: 4  sorted: [0, 1, 4, 8] i: 2
  copy: [           ] val: 2  sorted: [0, 1, 2, 4, 8] i: 2


*/











// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Set a pointer dividing the array into sorted and unsorted halves
  // Repeat while the unsorted half is not empty:
  // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  // - Grab the first value from the unsorted half
  // - For each value starting from the divider,
  // - Check if the value to the left is smaller than the unsorted value
  // - If so, you've reached the insertion point so exit the loop
  // - If not shift the value to the right by 1 and continue
  // - Insert the unsorted value at the break point
  // - Increment the dividing pointer and repeat
  // Return the mutated array
}

// console.log(insertionSortInPlace([2, 4, 0, 8, 1]));

module.exports = [insertionSort, insertionSortInPlace];
