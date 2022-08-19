
function bubbleSort(arr) {

  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        // let temp = arr[i]
        // arr[i] = arr[i + 1]
        // arr[i + 1] = temp
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; //Does the same as the 3 lines above
        hasSwapped = true;

        // Do not move this console.log
        console.log(arr.join(","));
      }
    }
  
    // If you get to the end of the array and no swaps have occurred, return
    // if (!hasSwapped) return arr;
  
    // Otherwise, repeat from the beginning
  }
  return arr;
  // Iterate through the array

    // If the current value is greater than its neighbor to the right
      // Swap those values

      // Do not move this console.log
      console.log(arr.join(","));

  // If you get to the end of the array and no swaps have occurred, return
  // Testing a commit
  // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
