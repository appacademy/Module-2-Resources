const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    sums.push(addNums(i));
  }

  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    sums.push(addManyNums(i));
  }

  return sums;
}

// O(n^3) time, O(n) space

module.exports = [addNums10, addManyNums10];
