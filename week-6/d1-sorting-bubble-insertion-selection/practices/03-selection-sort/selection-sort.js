






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


// console.log(selectionSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]




// [2, 4, 0, 8, 1]
/*




*/















function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves

  let divider = 0;
  // Repeat while the unsorted half is not empty:

  while(divider < arr.length) {
  // Do not move this console.log
  // console.log(arr.join(","));

    let minIndex = divider;

    for(let i = divider + 1; i < arr.length; i++) {
      if(arr[i] < arr[minIndex]){
        minIndex = i;
      }
    };


    let minValue = arr[minIndex];

    console.log('arr:', arr, 'd:', divider, 'minIndex:', minIndex, 'minValue:', minValue)


    for(let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1];
    };

    arr[divider] = minValue;

    divider++;

  }
  return arr;
}

// console.log(selectionSortInPlace([2,4,0,8,1]))

module.exports = [selectionSort, selectionSortInPlace];
