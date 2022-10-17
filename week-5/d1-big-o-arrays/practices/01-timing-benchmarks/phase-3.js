const [addNums, addManyNums] = require("./phase-1");

<<<<<<< HEAD
=======
function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  const sums = [];

  console.time('addNums');
  for (let i = increment; i <= increment * 100; i += increment) {
    const start = Date.now();
    sums.push(addNums(i));
    const end = Date.now();
    console.log(end - start);
  }
  console.timeEnd('addNums');

  return sums;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

const total = [];

console.time('addManyNums');
for (let i = increment; i <= increment * 100; i += increment) {
  const start = Date.now();
  total.push(addManyNums(i));
  const end = Date.now();
  console.log(end - start);
}
console.timeEnd('addManyNums');

return total;

}
>>>>>>> faa3cfeb5fd070808b5c0d9af0ab81ceaaef4213

let n = 100000;

addNums10Timing(n);

console.log('\n*****************\n');

n = 1000
addManyNums10Timing(n)


