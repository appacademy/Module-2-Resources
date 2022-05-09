const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    console.time(`i=${i}`);
    // startTime = Date.now()

    sums.push(addNums(i));
    // endTime = Date.now()

    console.timeEnd(`i=${i}`);
    // console.log(`$${i} = ${endTime - startTime}`)
  }

  return sums;
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
const sums = [];

for (let i = increment; i <= 10 * increment; i += increment) {
  console.time(`i=${i}`);
  sums.push(addManyNums(i));
  console.timeEnd(`i=${i}`);
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
