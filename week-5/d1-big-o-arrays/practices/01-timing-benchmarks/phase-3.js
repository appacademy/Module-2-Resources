const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    // Fill this in
    const arr = [];
  
    for (let i = 1; i <= 100; i++) {
      const start = Date.now();
      arr.push(addNums(i * increment));
      const end = Date.now();
      console.log(end - start);
    }
  
    return arr;
  } // O(n)
  
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
  } // O(n^2)

n = 1000
console.log(`addNums(${n}): `);

console.time('addNums10')
addNums10Timing(100000);
console.timeEnd('addNums10')

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);

console.time('addManyNums10')
addManyNums10Timing(4000);
console.timeEnd('addManyNums10')