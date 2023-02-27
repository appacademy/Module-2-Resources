// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) { // [2,4,6,8,1,3,5,7,9]
  // Copy the original array
  const copy = arr.slice() // => [...arr]; [2,4,6]
  // Create an array to store the sorted values
  //                                    i
  const sorted = []; // => [1, 3, 5, 7, 8, 9]
  // While the copied array is not empty:
  while (copy.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(',')); // => '1,3,5,7,9'
    // - Pop a value from the array
    const val = copy.pop(); // => 8
    // - Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);
    // - Walk through the sorted array in reverse order
    let i = sorted.length - 1; // => 5
    while (i > 0) {
      // - Check if the value to the left is smaller than the new value
      if (sorted[i-1] <= val){
        // - If so, you've reached the insertion point so exit the loop
        break
      } else {
        // - If not shift the value to the right by 1 and continue
        sorted[i] = sorted[i-1];
        i--;        
      }
    }
    // - Insert the unsorted value at the break point
    sorted[i] = val;
  }
  // Return the sorted array
  return sorted;
  // Your code here
}  // 

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
    const val = arr[divider];
    let i =  divider;
    // - For each value starting from the divider,
    while (i > 0) {
      // - Check if the value to the left is smaller than the unsorted value
      if (arr[i-1] <= val) {
        // - If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // - If not shift the value to the right by 1 and continue
        arr[i] = arr[i-1];
        i--;
      }
     
    }
    // - Insert the unsorted value at the break point
    arr[i] = val;
    // - Increment the dividing pointer and repeat
    divider++;
  }
  // Return the mutated array
  return arr;
  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
