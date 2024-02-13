






function selectionSort(arr) {
  // Copy the original array
  let copy = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half
    let minValue = Math.min(...copy);
    let minIndex = copy.indexOf(minValue);

    // Save and remove the value at the min index
    copy.splice(minIndex, 1);

    // Add the min value to the end of the sorted array
    sorted.push(minValue);
    console.log(sorted, copy);
  }

  return sorted;
}


console.log(selectionSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]








function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

  // Do not move this console.log
  console.log(arr.join(","));

  // Find the index of the minimum value in the unsorted half

  // Save the min value

  // Shift every unsorted value to the left of the min value to the right by 1

  // Put the min value at the divider

  // Increment the divider and repeat
}

// console.log(selectionSortInPlace([2,4,0,8,1]))

module.exports = [selectionSort, selectionSortInPlace];
