const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sums = [];

  for (let i = 1; i <= 10; i++) {
    sums.push(addNums((i * increment)))
  }
  return sums;
} // Time complexity: O(n)
  // Space complexity: O(1)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sums = [];

  for (let i = 1; i <= 10; i++) {
    sums.push(addManyNums(i * increment));
  }
  // console.log(sums)
  return sums;
} // Time complexity: O(n^2)
  // Space complexity: O(1)

module.exports = [addNums10, addManyNums10];
