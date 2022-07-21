const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const sums = [];

  for (let i = increment; i <= increment * 10; i += increment) {
    sums.push(addNums(i));
  }

  return sums;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const total = [];

  for (let i = increment; i <= increment * 10; i += increment) {
    total.push(addManyNums(i));
  }

  return total;

}

module.exports = [addNums10, addManyNums10];
