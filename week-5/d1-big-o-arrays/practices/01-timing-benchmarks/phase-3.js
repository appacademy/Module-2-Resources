const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Fill this in
  const res = [];

  for (let i = 1; i <= 100; i++) {
    const start = new Date();
    res.push(addNums(i * increment));
    const end = new Date();

    console.log(end - start);
  }

  return res;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10Timing(increment) {
  // Fill this in
  const res = [];

  for (let i = 1; i <= 10; i++) {
    const start = Date.now();
    res.push(addManyNums(i * increment));
    const end = Date.now();
    console.log(end - start);
  }

  return res;
}

n = 1000;
console.log(`addNums(${n}): `);
console.time("addNums10");
addNums10Timing(100000);
console.timeEnd("addNums10");

console.log("\n***********\n");

n = 1000;
console.time("addManyNums10");
console.log(`addManyNums(${n}): `);
addManyNums10Timing(10000);
console.timeEnd("addManyNums10");
