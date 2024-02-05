/*


  Space vs Time Complexity
  * Time deals with speed
    * How many operations are we dealing with
  * Space deals with memory
    * How much memory does a function require
    * What am I adding into array/object?
    * Space deals with reference data types
    * arrays and objects
    ! Usually more concerned about time as space is not an issues

*/


// Linear space complexity: O(n)
// * Take a look at this function, getNumList which returns an array containing every number from 0 to n-1.
// * n amount of values will be place in a new arrays
// * space grows in relation to n
function getNumList(n) {
  let nums = [];


  for (let i = 0 ; i < n ; i++) {
    // 1 * n
    // pushing n amount of values in an array
      nums.push(i);
  }

  return nums;
}


// Quadratic space complexity: O(n2)
// * an array is created for each loop and that array is than placed in a new array
function getNumPairsList(n) {

  let pairs = [];


  for (let i = 0 ; i < n ; i++) {
      for (let j = 0 ; j < n ; j++) {
          // * creating n arrays n amount of times
          // (1 * n) * (1 * n)
          pairs.push([i, j]);
      }
  }

  return pairs;
}


//  Modifying arrays in-place
// * In JavaScript, arrays and objects are passed to functions by reference. This means you can modify the array you are passed instead of creating a new one to optimize space. For example, take the following function, increaseByOne which takes an array of numbers as an argument and returns an array with each number increased by one.

// * out-of-place
// O(n)
function increaseByOne(nums) {

// n amount of values will be place in a new array
const increased = [];

for (let i = 0 ; i < nums.length ; i++) {
    increased.push(nums[i] + 1);
}

return increased;
};


nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(increaseByOne(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// * in-place
// * no memory is needed to allocate as we already using an existing array
// * O(1) - constant memory
function increaseByOneInPlace(nums) {

for (let i = 0 ; i < nums.length ; i++) {
    nums[i]++;
}

return nums;
}

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(increaseByOneInPlace(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



n = '?'
// 1 + (1 * n) + (1 * n)
for(let i = 0; i < n; i++){
  // 1 + 100 + 100
  for(let j =0; j < 100; j++){

  }
}
// 1 + (1 * n) + (1 * n) * 1 + 100 + 100
// 1 + n + n * 201
// 2n + 202
// n
