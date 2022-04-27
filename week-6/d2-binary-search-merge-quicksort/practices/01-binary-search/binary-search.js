function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while(low <= high) {
    // Find the midpoint between high and low indices
    let midPoint = Math.floor((high + low) / 2);
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === arr[midPoint]) return midPoint;
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    else if (target > arr[midPoint]) low = midPoint + 1; 
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    else high = midPoint - 1;
  }

  return -1;
}


module.exports = [linearSearch, binarySearch]
