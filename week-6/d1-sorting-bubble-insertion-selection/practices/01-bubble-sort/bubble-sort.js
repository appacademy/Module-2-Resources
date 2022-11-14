
function bubbleSort(arr) {

  let swapped = true;

  while (swapped) {
    swapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]) {
        // Swap those values
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
        // Do not move this console.log
        console.log(arr.join(","));

      }
    }

    // Otherwise, repeat from the beginning

  }
  return arr;
}

function bubbleSort2(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
        console.log(arr.join(","));
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}

 //          i
// [1, 4, 2, 3, 5]

module.exports = bubbleSort;
