
function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
        swapped = false;
        // Iterate through the array
        for (let i = 0; i < arr.length - 1; i++) {
          // If the current value is greater than its neighbor to the right
          // console.log(arr[i], arr[i + 1])
          if (arr[i] > arr[i + 1]) {
            // Swap those values
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swapped = true;
            // Do not move this console.log
            console.log(arr.join(","));
          }
        }
        // If you get to the end of the array and no swaps have occurred, return
        // return arr;
        if (!swapped) return arr;
        // Otherwise, repeat from the beginning

  }
  return arr;
}

const arr = [3,2,0,4,1];
console.log(arr.join(","));
bubbleSort(arr);

module.exports = bubbleSort;
