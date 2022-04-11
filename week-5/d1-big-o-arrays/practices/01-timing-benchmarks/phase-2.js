const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const arr = [];

  for (let i = increment; i <= increment * 10; i+=increment) {
    arr.push(addNums(i));
  }

  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const arr = [];

  for (let i = increment; i <= increment * 10; i+=increment) {
    arr.push(addManyNums(i));
  }

  return arr;
}

module.exports = [addNums10, addManyNums10];
