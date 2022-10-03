
function bubbleSort(arr) {

  // Iterate through the array
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]) {
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;

        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        // Do not move this console.log
        console.log(arr.join(","));
  
        hasSwapped = true;
      }
      // Swap those values

    }
    if (!hasSwapped) return arr;
    // If you get to the end of the array and no swaps have occurred, return
  
    // Otherwise, repeat from the beginning



  }


}

module.exports = bubbleSort;
