const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");

function addNums10Timing(increment) {

  // Copy your `addNums10` code here
  // Then, add timing code
  const sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    // console.time(`n=${n}`);

    startTime = Date.now();
    sums.push(addNums(n));
    endTime = Date.now();

    // console.timeEnd(`n=${n}`);
    console.log(`${endTime - startTime}`);
  }

  return sums;

}


function addManyNums10Timing(increment) {

  // Copy your `addManyNums10` code here
  // Then, add timing code
  const sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    // console.time(`n=${n}`);

    startTime = Date.now();
    sums.push(addManyNums(n));
    endTime = Date.now();

    // console.timeEnd(`n=${n}`);
    console.log(`${endTime - startTime}`);
  }

  return sums;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
