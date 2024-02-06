const [addNums, addManyNums] = require("./phase-1");




function addNums10Timing(increment) {
  let res = [];


  for (let i = 1; i <= 10; i++) {
    startTime = Date.now();
    res.push(addNums(i * increment));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }

  return res;
}


function addManyNums10Timing(increment) {
  let res = [];

  for (let i = 1; i <= 10; i++) {
    startTime = Date.now();
    res.push(addManyNums(i * increment));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }

  return res;
}


n = 1000;
console.log(`addNums(${n}ms): `);


// startTime = Date.now();
addNums10Timing(50000000);
// endTime = Date.now();

// console.log(`Time 1: ${endTime - startTime}ms`);


console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}ms): `);


// startTime = Date.now();
addManyNums10Timing(9000);
// endTime = Date.now();

// console.log(`Time 2: ${endTime - startTime}ms`);
