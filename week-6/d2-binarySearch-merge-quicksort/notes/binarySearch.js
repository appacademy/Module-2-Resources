/*
Binary Search: 
-Binary Search utilizes the divide and conquer approach. 
-You've already used this without even knowing...
        ex: Phonebooks, dictionaries, etc.
Binary search method first looks at the midpoint of a
SORTED array, and then checks to see if that element is 
greater than, less than, or equal to the element you are looking for.

IT ONLY WORKS WITH SORTED ARRAYS, so it is often needed to have a
sorting function that can quickly sort your array if it is not presorted
*/

//quick way of sorting arrays in Javascript

let array = [5, 28, 98, 13, 4, 87, 45, 2];
array.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(array);


function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((hi + lo) / 2);

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    if (target === arr[mid]) {
      // Return true
      return true;
      // If the target is higher than the midpoint...
    } else if (target > arr[mid]) {
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
      // If the target is less than the midpoint...
    } else {
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }

  // Return false if the loop exits with overlapping pointers
  return false;
}

console.log(binarySearch(array, 13));