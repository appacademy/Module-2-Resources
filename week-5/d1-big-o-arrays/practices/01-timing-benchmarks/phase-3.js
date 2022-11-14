const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const sums = [];

  console.time('addNumsTiming');
  for (let i = 1; i <= 50; i++) {
    const start = Date.now();
    sums.push(addNums(increment * i));
    const end = Date.now();
    console.log(end - start);
  }
  console.timeEnd('addNumsTiming');
  return sums;
} // O(n)

function addManyNums10Timing(increment) {
  const sums = [];

  console.time('addManyNumsTiming')
  for (let i = 1; i <= 50; i++) {
    const start = Date.now();
    sums.push(addManyNums(increment * i));
    const end = Date.now();
    console.log(end - start);
  }
  console.timeEnd('addManyNumsTiming')
  return sums;

} // O(n^2)

n = 1000
console.log(`addNums(${n}): `);
addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(1000);
