const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(addNums(i * increment));
  }

  return arr;
} // O(n)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(addManyNums(i * increment));
  }

  return arr;
} // O(n^2)

module.exports = [addNums10, addManyNums10];
