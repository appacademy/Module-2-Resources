const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  const sums = [];

  for (let i = increment; i <= increment * 100; i += increment) {
    sums.push(addNums(i));
  }

  return sums;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

const total = [];

for (let i = increment; i <= increment * 100; i += increment) {
  total.push(addManyNums(i));
}

return total;

}


