function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    const mid = Math.floor((lo + hi) / 2);
    // console.log({mid});
  
    // Compare the target value to the midpoint value
    
    // If the target equals the midpoint...
    if (target === arr[mid]) return mid;
      // Return the midpoint index
    // If the target is higher than the midpoint...
    if (target > arr[mid]) lo = mid + 1;
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
    if (target < arr[mid]) hi = mid - 1
      // Move the high pointer to midpoint - 1

  }

  return -1;
  // Return -1 if the loop exits with overlapping pointers

}

binarySearch([2, 4, 5, 7, 8, 10], 8)

//           L  T   H
// [2, 4, 5, 7, 8, 10]
//              M     



module.exports = [linearSearch, binarySearch]
