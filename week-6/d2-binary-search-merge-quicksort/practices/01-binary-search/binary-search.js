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
    const mid = Math.floor((hi + lo) / 2);
    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    if (target === arr[mid]) return mid;
      
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    if (target > arr[mid]) lo = mid + 1;
      
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    if (target < arr[mid]) hi = mid - 1;
    
    // NOTE: we are allowed to have 3 "if"s instead of "else-if"s because the mid pointer never changes.
    // if one "if" executes, it is guaranteed that the other "if"s will not execute, in this case.
    // (feel free to use an else-if/else if you want)
  } 

  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]
