/*
Just like Merge Sort, Quick Sort uses a divide and conquer strategy. The key
ideas of Quick Sort are:
1. It is easy to sort elements of an array relative to a particular target
   value.
2. An array of 0 or 1 elements is already sorted


There are some standard steps when implementing a quick sort algorithm:
1. choose an element called "the pivot", how that's done is up to the
   implementation
2. take two variables to point left and right of the list excluding pivot
3. left points to the low index
4. right points to the high
5. while value at left is less than pivot move right
6. while value at right is greater than pivot move left
7. if both step 5 and step 6 does not match swap left and right
8. if left ≥ right, the point where they met is new pivot
9. repeat, recursively calling this for smaller and smaller arrays


*/
function quickSort(array) {
  if (array.length <= 1) {
    //array of length = 0 || 1 is already sorted
    return array;
  }

  let pivot = array.shift(); //The element that we will use to create our left and right arrays
  let left = array.filter((el) => el < pivot); //elements less than the pivot
  let right = array.filter((el) => el >= pivot); //elements greater than or equal to the pivot

  let leftSorted = quickSort(left); //recursively call quickSort on each half
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted]; //return the new sorted array
}