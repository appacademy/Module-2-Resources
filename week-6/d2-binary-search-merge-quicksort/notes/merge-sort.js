/*
Merge sort is the first of the efficient algorithms you will learn. 

Merge sort operates with a much better time complexity than the more naive approaches we started with.

The main ideas of merge sort are:
1. It is easy to merge elements of two sorted arrays into a single sorted array
2. You can consider an array containing only a single element as already sorted
3. You can also consider an empty array as sorted
*/

function merge(array1, array2) {
  let merged = [];

  // keep running while either array still contains elements
  while (array1.length || array2.length) {
    // if array1 is nonempty, take its the first element as ele1 otherwise
    // array1 is empty, so take Infinity as ele1
    let ele1 = array1.length ? array1[0] : Infinity;

    // do the same for array2, ele2
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    // remove the smaller of the eles from it's array
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    // and add that ele to the new array
    merged.push(next);
  }

  return merged;
}

//Now that we have the merge helper function, we can move on to the sorting
//algorithm:

function mergeSort(array) {
  if (array.length <= 1) { //if the array is either length = 1 || 0
    return array; //return the array because it is already sorted
  }

  let midIdx = Math.floor(array.length / 2); //find the middle index
  let leftHalf = array.slice(0, midIdx); //split the array in two using slice
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf); //recursively call mergeSort on each half
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);  //use our helper function to merge the sorted halves
}