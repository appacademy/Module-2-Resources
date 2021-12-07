//O(n^2) quadratic time
//O(1) constant space
function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return true;
    }
  }
  return false;
}

//O(nlogn) linearithmic time
//O(n) linear space
function okayTwoSum1(arr, targetSum) {
  arr.sort();
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let currentSum = arr[i] + arr[j];
    if (currentSum > targetSum) {
      j -= 1;
    } else if (currentSum < targetSum) {
      i += 1;
    } else {
      return true;
    }
  }

  return false;
}

//O(nlogn) linearithmic time
//O(n) linear space
// another implementation using binary search
function okayTwoSum2(arr, targetSum) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = targetSum - num;
    let complement_idx = binarySearch(arr, complement);
    if (complement_idx != -1 && complement_idx != i) {
      return true;
    }
  }

  return false;
}

function binarySearch(array, target) {
  let lowerIdx = 0,
    upperIdx = array.length - 1,
    midIdx;

  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }

  return -1;
}

//O(n) linear time
//O(n) linear space
function twoSum(arr, targetSum) {
  let complements = {};
  for (let num of arr) {
    let complement = targetSum - num;
    if (complements[complement]) return true;
    complements[num] = true;
  }

  return false;
}

//O(n) linear time
//O(n) linear space
// This can be easily adapted to also return the indices of the two numbers:
function twoSumIndices(arr, targetSum) {
  let complements = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = targetSum - num;
    if (complements[complement]) {
      let complement_idx = complements[complement];
      return [i, complement_idx];
    }
    complements[num] = i;
  }
  return [];
}
