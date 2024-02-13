
function bubbleSort(arr) {
  let hasSwapped = true;

  // Iterate through the array
  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right

      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        hasSwapped = true;

        // Do not move this console.log
        console.log(arr.join(","));
      }
    }


  }

  return arr;

  // If you get to the end of the array and no swaps have occurred, return
  // Otherwise, repeat from the beginning
}

console.log(bubbleSort([2, 4, 0, 8, 1]));

module.exports = bubbleSort;




/*


  [2, 4, 0, 8, 1]

  [2, 0, 4, 8, 1]
  [2, 0, 4, 1, 8]
  [0, 2, 4, 1, 8]
  [0, 2, 1, 4, 8]
  [0, 1, 2, 4, 8]
  [0, 1, 2, 4, 8]
  
*/
