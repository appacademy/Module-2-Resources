// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  //  Copy the original array
  const copy = [...arr]; // arr.slice();
  //  Create an array to store the sorted values
  const sorted = [];
  //  While the copied array is not empty:
  while (copy.length) {
    //  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','))
    //  - Pop a value from the array
    const value = copy.pop();
    //  - Create a new spot at the end of the sorted array with null to help with comparisons
    sorted.push(null);
    //  - Walk through the sorted array in reverse order
    let i = sorted.length - 1;

    while (i > 0) {
      //  - Check if the value to the left is smaller than the new value
      //  - If so, you've reached the insertion point so exit the loop
      if (sorted[i-1] <= value) { 
        break
      } else {
        //  - If not shift the value to the right by 1 and continue
        //                           i
        sorted[i] = sorted[i-1]; // [1, 2, 3, 5] <- 1
        i--;
      }
    }
    //  - Insert the unsorted value at the break point
    sorted[i] = value;
  }
  //  Return the sorted array
  return sorted;
  // Your code here
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  //  Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;
  //  Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    //  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(','))
    //  - Grab the first value from the unsorted half
    const val = arr[divider];
    let i = divider;
    //  - For each value starting from the divider,
    while (i > 0) {
      //  - Check if the value to the left is smaller than the unsorted value
      if (arr[i-1] > val) {
        //  - If not shift the value to the right by 1 and continue
        arr[i] = arr[i-1];
        i--
      } else {
        //  - If so, you've reached the insertion point so exit the loop
        break;
      }

    }
    //  - Insert the unsorted value at the break point
    arr[i] = val;
    //  - Increment the dividing pointer and repeat
    divider++;

  }
  //  Return the mutated array
  return arr;
  //     i
} // [1, 2, 4, 6, 8, 3, 5, 7, 9] 

module.exports = [insertionSort, insertionSortInPlace];
