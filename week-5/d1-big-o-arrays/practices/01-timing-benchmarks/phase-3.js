const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  const sums = [];

  for (let i = increment; i <= 100 * increment; i += increment) {
    // console.time(`i=${i}`)
    const startTime = Date.now();
    sums.push(addNums(i));
    // console.timeEnd(`i=${i}`)
    const endTime = Date.now();

    console.log(endTime - startTime);
  }
  // console.log(sums)
  return sums;
}


function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  const sums = [];

  for (let i = increment; i <= 100 * increment; i += increment) {
    // console.time(`i=${i}`)
    const startTime = Date.now();
    sums.push(addManyNums(i));
    // console.timeEnd(`i=${i}`)
    const endTime = Date.now();

    console.log(endTime - startTime);
  }

  return sums;
}


n = 1000
console.log(`addNums(${n}): `);
addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(1000);
