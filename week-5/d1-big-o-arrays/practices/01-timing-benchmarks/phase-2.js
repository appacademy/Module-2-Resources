const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const array = []

  for (let i = 1; i <= 10; i++) {
              //  O(n)
    array.push(addNums(i * increment))
  }

  // console.log(array)
  return array
}
// Time O(n)
// Space O(1)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

  const array = []

  for (let i = 1; i <= 10; i++) {
                 // n^2
    array.push(addManyNums(i * increment))
  }

  // console.log(array)
  return array
}

// Time O(n^2)
// Space O(1)

module.exports = [addNums10, addManyNums10];
