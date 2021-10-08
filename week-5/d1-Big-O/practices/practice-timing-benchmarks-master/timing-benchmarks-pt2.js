const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");


// Runs `addNums` in 10 increasing increments
function addNums10(increment) {

  // Fill this in
  sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    sums.push(addNums(n));
  }

  return sums;
}


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {

  // Fill this in
  sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    sums.push(addManyNums(n));
  }

  return sums;
}


module.exports = [addNums10, addManyNums10];