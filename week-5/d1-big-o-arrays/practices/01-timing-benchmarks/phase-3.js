const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Fill this in
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    const start = Date.now();
    arr.push(addNums(i * increment))
    const end = Date.now();
    console.log(end - start);
  }

  return arr;
}// Time O(n);
 // Space O(1)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10Timing(increment) {
  // Fill this in
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    const start = Date.now();
    arr.push(addManyNums(i * increment));
    const end = Date.now();
    console.log(end - start);
  }

  return arr;
} // Time O(n^2)
  // Space O(1)

n = 1000
console.log(`addNums(${n}): `);
console.time('addNums')
addNums10Timing(10000000);
console.timeEnd('addNums')

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
console.time('addManyNums');
addManyNums10Timing(1000);
console.timeEnd('addManyNums');
