const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sums = [];
  for (let n = increment; n <= 10 * increment; n += increment) {
    sums.push(addNums(n));
  }
  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sums = [];
  for (let n = increment; n <= 10 * increment; n += increment) {
    sums.push(addManyNums(n));
  }
  return sums;
}

module.exports = [addNums10, addManyNums10];
