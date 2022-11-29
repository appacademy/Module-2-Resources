const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// O(n)
function addNums10(increment) {
  // Fill this in
  let sums = [];
  for (let i = 1; i <= 10; i++) {
    sums.push(addNums(i * increment))
  }
  return sums;
}

// Runs `addManyNums` in 10 increasing increments
// O(n^2)
function addManyNums10(increment) {
  // Fill this in
  let sums = [];

  for (let i = 1; i <= 10; i++) {
    sums.push(addManyNums(i * increment));
  }
  return sums;

}

module.exports = [addNums10, addManyNums10];
