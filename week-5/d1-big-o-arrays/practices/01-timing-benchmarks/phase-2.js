const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const sums = [];

  for (let i = 1; i <= 10; i++) {
    sums.push(addNums(increment * i));
  }

  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const sums = [];

  for (let i = 1; i <= 10; i++) {
    sums.push(addManyNums(increment * i));
  }

  return sums;
}

module.exports = [addNums10, addManyNums10];
