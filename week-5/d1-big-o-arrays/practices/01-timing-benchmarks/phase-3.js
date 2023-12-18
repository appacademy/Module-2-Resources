const [addNums, addManyNums] = require("./phase-1");



n = 1000
console.log(`addNums(${n}): `);
addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(1000);
