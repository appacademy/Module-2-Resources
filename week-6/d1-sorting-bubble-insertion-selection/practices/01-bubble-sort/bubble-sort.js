
function bubbleSort(arr) {

  let swapped = true;

  while (swapped) {
    swapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
        // Swap those values
      if (arr[i] > arr[i+1]) {
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
  

    }
    // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) return arr;
  }

  // Otherwise, repeat from the beginning
  //                   i
} // => [2,4,1,3,5,6,7,8,9]


const arr = [3,9,1,7,5,6,4,8,2];

function bubbleSort2(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
        console.log(arr.join(','));
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}

console.log(bubbleSort2(arr));

module.exports = bubbleSort;
