function linearSearch(arr, target) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) return i;
  // }
  // return -1;

  // Can you solve this in one line?
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // [1,2,3,4,5,6,7,8] => 7
  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;
  // While high and low indices do not overlap...
  //             lm h
  while (lo <= hi) {
    // [1,2,3,4,5,6,7,8]
    // Find the midpoint between high and low indices
    const mid = Math.floor((lo + hi) / 2);
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if (arr[mid] === target) {
      // Return the midpoint index
      return mid;
    } else if (target > arr[mid]) {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
    } else {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

module.exports = [linearSearch, binarySearch];
