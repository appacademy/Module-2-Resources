/*
Selection sort works very similar to Bubble Sort, but it works on sending the
smallest elements down to the beginning of the array instead of sending the
largest elements up. For the same reasons as Bubble Sort, Selection Sort is not
very efficient at all.

The algorithm can be summarized as follows:
1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN
4. Increment MIN to point to next element
5. Repeat until list is sorted
*/

//Again, we will need to implement our swap function:
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/*
In order to find MIN, we will need to search the array to find the minimum
value: This COULD be done in isolation with the following function: function
minValueIdx(arr) {let minIdx = 0; for(let j = 0; j < arr.length; j++) {if
(arr[minIdx] > arr[j]) {minIdx = j;
        }
    }
    return minIdx
}

However, we can build this logic right into the algorithm for Selection Sort:
*/

function selectionSort(arr) {
  // the `i` loop will track the index that points to the first element of the
  //    unsorted region: this means that the sorted region is everything left of
  //    index i and the unsorted region is everything to the right of index i
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // the `j` loop will iterate through the unsorted region and find the index
    // of the smallest element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // after we find the minIndex in the unsorted region, swap that minIndex
    // with the first index of the unsorted region
    swap(arr, i, minIndex);
  }
  return arr;
}

