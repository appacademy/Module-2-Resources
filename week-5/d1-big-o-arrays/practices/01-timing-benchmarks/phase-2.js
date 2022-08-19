const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    sums.push(addNums(i));
  }
  // console.log(sums)
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

module.exports = [addNums10, addManyNums10];
