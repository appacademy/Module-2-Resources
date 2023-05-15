const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const res = [];

  for (let i = 1; i <= 10; i++) {
    res.push(addNums(i * increment));
  }

  return res;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const res = [];

  for (let i = 1; i <= 10; i++) {
    res.push(addManyNums(i * increment));
  }

  return res;
}

module.exports = [addNums10, addManyNums10];
