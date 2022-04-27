const [addNums, addManyNums] = require("./phase-1");

// function addNums10Timing(increment) {
//   // Copy your `addNums10` code here
//   // Then, add timing code
//   const arr = [];

//   for (let i = increment; i <= increment * 10; i+=increment) {
//     console.time(`${i}: `)
//     let startTime = Date.now()
//     arr.push(addNums(i));
//     let endTime = Date.now()
//     console.timeEnd(`${i}: `)
//     console.log(`${i}: ${endTime - startTime}`);
//   }

//   return arr;
// }


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
  const arr = [];
  for (let i = increment; i <= increment * 10; i+=increment) {
    console.time(`${i}: `)
    let startTime = Date.now()
    arr.push(addManyNums(i));
    let endTime = Date.now()
    console.timeEnd(`${i}: `)
    console.log(`${i}: ${endTime - startTime}`);
  }

  return arr;
}


// n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
