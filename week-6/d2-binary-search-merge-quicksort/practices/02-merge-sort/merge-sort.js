// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  // Recursively sort the left half
  const leftSort = mergeSort(leftArray);
  // Recursively sort the right half
  const rightSort = mergeSort(rightArray);

  // Merge the halves together and return
  return merge(leftSort, rightSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  // // Point to the first value of each array
  // let a1 = arrA[0];
  // let a2 = arrB[0];
  // // While there are still values in each array...
  // while (arrA.length || arrB.length) {
    //   // Compare the first values of each array
    //   a1 = arrA.length ? arrA[0] : Infinity;
    //   a2 = arrB.length ? arrB[0] : Infinity;
    //   // Add the smaller value to the return array
    //   if (a1 < a2) {
      //     input = arrA.shift(); 
      //   }
      
      //   if (a2 < a1) {
        //     input = arrB.shift();
        //   }
        
        //   merged.push(input);
        // Move the pointer to the next value in that array
        
        
        // }
        
  const merged = [];

  let indexA = 0;
  let indexB = 0;

  // while (indexA < arrA.length || indexB < arrB.length) {

  //   if (indexA === arrA.length) {
  //     merged.push(arrB[indexB]);
  //     indexB++;
  //   } else if (indexB === arrB.length) {
  //     merged.push(arrA[indexA]);
  //     indexA++;
  //   } else if (arrA[indexA] <= arrB[indexB]) {
  //     merged.push(arrA[indexA]);
  //     indexA++;
  //   } else {
  //     merged.push(arrB[indexB]);
  //     indexB++;
  //   }

  // }

  while (indexA < arrA.length && indexB < arrB.length) {


    if (arrA[indexA] <= arrB[indexB]) {
      merged.push(arrA[indexA]);
      indexA++;
    } else {
      merged.push(arrB[indexB]);
      indexB++
    }

  }

  // Return the return array
  return [...merged, ...arrA.slice(indexA), ...arrB.slice(indexB)];
}


/*
                         M
              [10, 5, 1, 2, 8, 7]
            LH                   RH
        [10, 5, 1]            [2, 8, 7]
      LH         RH
    [10]        [5, 1]
              LH     RH
              [5]    [1]
                [1, 5]
        [1, 5, 10]
                          LH         RH
                          [2]       [8, 7]
                                  LH     RH
                                  [8]    [7]
                                    [7, 8]

                                  [2, 7, 8]    
                                  
              [1, 2, 5, 7, 8, 10]

*/

module.exports = [merge, mergeSort];
