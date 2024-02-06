





const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// ? Time complexity - O(n)
function addNums10(increment) {

  let res = [];

  // 10
  for(let i = 1; i <= 10; i++) {
    // were performing O(n) operation a 10/constant of times
    res.push(addNums(i * increment));
  }

  return res;
}

// Runs `addManyNums` in 10 increasing increments
// ? Time complexity - O(n^2)
function addManyNums10(increment) {


  let res = [];

  // 10
  for(let i = 1; i <= 10; i++) {
    // were performing O(n^2) operation a 10/constant of times
    res.push(addManyNums(i * increment));
  }

  return res;

}

module.exports = [addNums10, addManyNums10];
