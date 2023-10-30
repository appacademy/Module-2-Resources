const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in

  const arr = []

  for (let i = 1; i <= 10; i++) {
    arr.push(addNums(i * increment))
  }

  return arr
}
// Time O(1 + (10 * n) + 1) => O(1 + n + 1)
// => O(n)
// Space O(1), making a new array but it will always contain 10 items


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const arr = []

  for (let i = 1; i <= 10; i++) {
    //       O(n^2)
    arr.push(addManyNums(i * increment))
  }

  return arr
}

// Time O(n^2)
// Space O(1)

module.exports = [addNums10, addManyNums10];
