const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let sums = [];
  for (let n = increment; n <= 10 * increment; n += increment) {
    let startTime = Date.now();
    sums.push(addNums(n));
    let endTime = Date.now();
    console.log(endTime - startTime);
  }
  return sums;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  let sums = [];
  for (let n = increment; n <= 10 * increment; n += increment) {
    let startTime = Date.now();

    sums.push(addManyNums(n));
    let endTime = Date.now();
    console.log(endTime - startTime);
  }
  return sums;
}

n = 1000000000;
console.log(`addNums(${n}): `);
// console.time('timer1')
addNums10Timing(1000000);
// console.timeEnd('timer1')

console.log("\n***********\n");

n = 10000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
