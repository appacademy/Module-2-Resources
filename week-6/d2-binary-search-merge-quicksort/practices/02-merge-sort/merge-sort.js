/*



   Merge sort
   * Merge sort is the first of the efficient algorithms you will learn.

   * Merge sort operates with a much better time complexity than the more naive approaches we started with.

   The main ideas of merge sort are:
    * 1. It is easy to merge elements of two sorted arrays into a single sorted array
    * 2. You can consider an array containing only a single element as already sorted
    * 3. You can also consider an empty array as sorted

    Time Complexity
     * Best case: O(n log n)
     * Worst case: O(n log n)
    Space complexity
     * O(n) - proportional to size of call stack

    This algorithm sorts values using the following divide and conquer approach:
     * Split the unsorted array in half (divide)
     * Sort the halves (conquer)
     * Merge the newly sorted halves


*/




// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

}

module.exports = [merge, mergeSort];
