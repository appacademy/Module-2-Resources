const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const sums = [];

  console.time('addNums10');
  for (let i = 1; i <= 10; i++) {
    const start = Date.now();
    sums.push(addNums(increment * i));
    const end = Date.now();
    const difference = end - start;
    console.log(difference);
  }
  console.timeEnd('addNums10')
  return sums;
} // O(n)

function addManyNums10Timing(increment) {
  const sums = [];
  console.time('addManyNums10');
  for (let i = 1; i <= 10; i++) {
    const start = Date.now();
    sums.push(addManyNums(increment * i));
    const end = Date.now();
    const difference = end - start;
    console.log(difference);
  }
  console.timeEnd('addManyNums10')
  return sums;

} // O(n^2)

n = 1000
console.log(`addNums(${1000000000}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${5000}): `);
addManyNums10Timing(5000);