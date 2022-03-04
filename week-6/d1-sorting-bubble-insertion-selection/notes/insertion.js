/*
Insertion Sort works similar to Selection Sort in that it gradually builds up a
larger and larger sorted region at the left-most end of the array. However, they
differ in that insertion sort focuses on sorting each element in the order they
appear from left to right, regardless of their value, and inserting them into
the most appropriate position in the already sorted region.

Steps of Insertion Sort:
1. If it is the first element, it is already sorted. return 1;
2. Pick next element
3. Compare with all elements in the sorted sub-list
4. Shift all the elements in the sorted sub-list that is greater than the value
   to be sorted
5. Insert the value
6. Repeat until list is sorted
*/

//This algorithm does not require the swap function we have used previously.

function insertionSort(arr) {
  // the `i` loop will iterate through every element of the array we begin at i
  // = 1, because we can consider the first element of the array as a trivially
  // sorted region of only one element insertion sort allows us to insert new
  // elements anywhere within the sorted region
  for (let i = 1; i < arr.length; i++) {
    // grab the first element of the unsorted region
    let currElement = arr[i];

    // the `j` loop will iterate left through the sorted region, looking for a
    // legal spot to insert currElement
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      // keep moving left while currElement is less than the j-th element

      arr[j + 1] = arr[j];
      // the line above will move the j-th element to the right, leaving a gap
      // to potentially insert currElement
    }
    // insert currElement into that gap
    arr[j + 1] = currElement;
  }
  return arr;
}