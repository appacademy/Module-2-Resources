
function bubbleSort(arr) {

  // Iterate through the array

    // If the current value is greater than its neighbor to the right
      // Swap those values

      // Do not move this console.log
      // console.log(arr.join(","));

  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning
  
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] > arr[i + 1]) {
        // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        
        swapped = true;
        console.log(arr.join(","));
      }
    }
    
    if (swapped === false) return arr;
  }
  
  // return arr;
}

module.exports = bubbleSort;
