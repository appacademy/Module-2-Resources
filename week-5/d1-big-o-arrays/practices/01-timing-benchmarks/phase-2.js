const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arr = [] // 1

  for (let i = 1; i <= 10; i++) {   // 10

    // 1       n
    arr.push(addNums(i * increment))
  }

  // console.log(arr)
  return arr  // 1
}

// Time
// T(1 + (10 * (1 + n)) + 1)
// O(n)

// Space
// O(1) making a new array, but only adding in 10 things each addNums10 call, no matter the size of increment


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let arr = []

  for (let i = 1; i <= 10; i++) {
             // n^2
    arr.push(addManyNums(i * increment))
  }

  return arr
}

// Time
// O(n^2)

// Space
// O(1)

module.exports = [addNums10, addManyNums10];
