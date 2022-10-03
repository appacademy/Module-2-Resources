
function bubbleSort(arr) {

  // let swapped = true;

  // while (swapped) {
  //   swapped = false;
  //   // Iterate through the array

  //   for (let i = 0; i < arr.length -1; i++) {
  //     // If the current value is greater than its neighbor to the right
  //     if (arr[i] > arr[i+1]) {
  //       // Swap those values
  //       // let temp = arr[i];
  //       // arr[i] = arr[i+1];
  //       // arr[i+1] = temp;

  //       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
  //       // Do not move this console.log
  //       console.log(arr.join(","));
  //       swapped = true;

  //     }

  //   }
  
  //   if (!swapped) return arr;
    // If you get to the end of the array and no swaps have occurred, return
  
    // Otherwise, repeat from the beginning

  // }

  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        console.log(arr.join(","));
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}


function bubbleSort2(arr) {

  const array = [...arr]

  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        // console.log(array.join(","));
        swapped = true;
      }
    }
    if (!swapped) return array;
  }
  return array;
}



const arr = [];
// make the array larger to see the difference in optimization
const n = 25000

for (let i = 0; i < n; i++) {
  arr.push(Math.floor(Math.random() * n));
}

// console.log(arr)

console.time("Bubble Sort");
bubbleSort(arr);
console.timeEnd("Bubble Sort");

console.time("Bubble Sort 2");
bubbleSort2(arr);
console.timeEnd("Bubble Sort 2");

// [2,4,1,6,8,3,5,7,9]

module.exports = bubbleSort;
