const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Fill this in
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    const start = Date.now()
    arr.push(addNums(i * increment));
    const end = Date.now()
    console.log(end - start)
  }
  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10Timing(increment) {
  // Fill this in
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    const start = Date.now()
    arr.push(addManyNums(i * increment));
    const end = Date.now()
    console.log(end - start)
  }
  return arr;
}


n = 1000
console.log(`addNums(${n}): `);
console.time('addNums100')
addNums10Timing(10000000);
console.timeEnd('addNums100')

console.log("\n***********\n");

n = 1000

console.log(`addManyNums(${n}): `);
console.time('addManyNums100')
addManyNums10Timing(5000);
console.timeEnd('addManyNums100')
