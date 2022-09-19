
// function bubbleSort(arr) {
//   // let swapped = false;
//   // let counter = 0;

//   // // Iterate through the array
//   // for (let i = 0; i < arr.length - 1; i++) {
//   //   if (arr[i] > arr[i+1]) {
//   //     [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//   //     console.log(arr.join(","));
//   //     swapped = true;
//   //   }
//   //   if (i + counter === arr.length) break;
//   // }
//   // counter++;
//   // if (swapped) return bubbleSort(arr);


//   let swapped = true;

//   while (swapped) {
//     swapped = false;

//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i+1]) {
//         // let temp = arr[i];
//         // arr[i] = arr[i+1];
//         // arr[i+1] = temp;
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//         console.log(arr.join(","));
//         swapped = true;
//       }
//     }
//     if (!swapped) return arr;
//   }

//     // If the current value is greater than its neighbor to the right
//       // Swap those values

//       // Do not move this console.log

//   // If you get to the end of the array and no swaps have occurred, return

//   // Otherwise, repeat from the beginning

// }

// micro optimized bubble sort
const bubbleSort = (arr) => {
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
    swapped = false;
  }
}

module.exports = bubbleSort;
