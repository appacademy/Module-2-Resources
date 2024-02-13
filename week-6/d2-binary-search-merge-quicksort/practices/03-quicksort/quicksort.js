/*


  Quick sort
  * Just like Merge Sort, Quick Sort uses a divide and conquer strategy.

  The key ideas of Quick Sort are:
  * 1. It is easy to sort elements of an array relative to a particular target value.
  * 2. An array of 0 or 1 elements is already sorted


  Time Complexity
    Best case: O(n log(n))
    * First, we’ll divide the array into two sub-arrays recursively, which will cost a time complexity of O(log n).
    * For each function call, we are calling the partition function, which costs O(n) time complexity.
    * Hence the total time complexity is O(nlogn).

  Worst case: O(n^2)
  * When the array is sorted in descending order or all the elements are the same in the array, the time complexity jumps to O(n²), since the sub-arrays are highly unbalanced.

  Space complexity
  * O(n) - proportional to size of call stack

  This algorithm sorts values using the following divide and conquer approach:
  * Split the unsorted array in half (divide)
  * Sort the halves (conquer)
  * Merge the newly sorted halves

  Use cases
  * In computer graphics, QuickSort is used for image rendering.
  * Data visualization.
  * In numerical computations, QuickSort is used for matrix sorting.

  ! When the partitioning algorithm always chooses the middle element or near the middle element as the pivot

*/

function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  // Pick the first value as the pivot
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  // Recursively sort the left
  // Recursively sort the right
  // Return the left, pivot and right in sorted order
}

console.log(quicksort([4, 3, 1, 7, 2]));

module.exports = [quicksort];
