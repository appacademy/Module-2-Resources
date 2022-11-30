

function selectionSort(arr) {

  // Copy the original array
  const copy = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIdx = 0;
    for (let i = 1; i < copy.length; ++i) {
      if (copy[i] < copy[minIdx]) {
        minIdx = i;
      }
    }
    // Save and remove the value at the min index
    const smallest = copy.splice(minIdx, 1)[0];
    // Add the min value to the end of the sorted array
    sorted.push(smallest);
  }
  
  return sorted;
}



function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIdx = divider;
    for (let i = divider; i < arr.length; ++i) {
      if (arr[i] < arr[minIdx]) {
        minIdx = i;
      }      
    }

    // Save the min value
    const num = arr[minIdx];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIdx; i > divider; --i) {
      arr[i] = arr[i - 1];
    }
    // NOTE: this will not pass spec, but is a valid replacement for the 
    // for loop above. This will swap the values at the divider and minIdx.
    // [arr[minIdx], arr[divider]] = [arr[divider], arr[minIdx]]

    
    // Put the min value at the divider
    arr[divider] = num;

    // Increment the divider and repeat
    ++divider;
  }
  
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
