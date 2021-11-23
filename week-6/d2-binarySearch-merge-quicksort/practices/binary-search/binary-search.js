function linearSearch(arr, target) {
  // Can you solve this in one line?
  // return arr.includes(target) ? target : -1;
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

  // Find the midpoint between high and low indices

  // Compare the target value to the midpoint value

  // If the target equals the midpoint...
  // Return the midpoint index
  // If the target is higher than the midpoint...
  // Move the low pointer to midpoint + 1
  // If the target is less than the midpoint...
  // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

module.exports = [linearSearch, binarySearch];
