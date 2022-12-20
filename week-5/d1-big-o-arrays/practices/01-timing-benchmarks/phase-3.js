const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    let sums = [];
    console.time('addNums10');
    for (let i = 1; i <= 10; i++) {
      const start = Date.now();
      sums.push(addNums((i * increment)))
      const end = Date.now();
      console.log(end - start);
    }
    console.timeEnd('addNums10')
    return sums;
  } 
  
  function addManyNums10Timing(increment) {
    let sums = [];
  
    console.time('addManyNums10')
    for (let i = 1; i <= 10; i++) {
      const start = Date.now();
      sums.push(addManyNums(i * increment));
      const end = Date.now();
      console.log(end - start);
    }
    console.timeEnd('addManyNums10')
    return sums;
  } 



n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(n);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(n);
