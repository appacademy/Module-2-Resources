const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  const sums = [];

  console.time(`addNums10Timing`);
  for (let i = increment; i <= 50 * increment; i += increment) {
    let start = Date.now();
    sums.push(addNums(i));
    let end = Date.now();
    console.log(end - start);
  }
  console.timeEnd(`addNums10Timing`);
  return sums;
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
  const sums = [];
  console.time(`addManyNums10Timing`);
  for (let i = increment; i <= 50 * increment; i += increment) {
    let start = Date.now();
    sums.push(addManyNums(i));
    let end = Date.now();
    console.log(end - start);
  }
  console.timeEnd(`addManyNums10Timing`);
  return sums;
}


n = 1000
console.log(`addNums(${n}): `);
addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(10000);
