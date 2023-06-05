function bubbleSort(arr) {
  // [3,9,1,7,5,6,4,8,2]
  let swapped = true;

  while (swapped) {
    // true
    swapped = false;
    // Iterate through the array                                 i
    for (let i = 0; i < arr.length - 1; i++) {
      // [1,3,5,6,4,7,2,8,9]
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;

        // Do not move this console.log
        console.log(arr.join(','));
      }
    }
    if (!swapped) return arr;
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  }
}

const arr = [1, 3, 5, 6, 4, 7, 2, 8, 9];

function bubbleSort2(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        console.log(arr.join(','));
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}

bubbleSort2(arr);

module.exports = bubbleSort;
