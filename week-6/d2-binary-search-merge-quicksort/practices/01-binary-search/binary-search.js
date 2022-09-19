function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) return i;
  // }
  // return -1;
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let hi = arr.length - 1;
  let lo = 0;
  let mid;

  // While high and low indices do not overlap...
  while (hi >= lo) {
    // Find the midpoint between high and low indices
    mid = Math.floor((hi + lo) / 2);
  
    // Compare the target value to the midpoint value
    // target > arr[mid] ? lo = mid + 1 : hi = mid - 1; 
    // If the target equals the midpoint...
    // Return the midpoint index
    if (arr[mid] === target) return target;
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    if (target > arr[mid]) lo = mid + 1;
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    if (target < arr[mid]) hi = mid - 1;

  }

  return -1;
  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]
