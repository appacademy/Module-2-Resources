const [addNums, addManyNums] = require("./phase-1");

const arr = [];

console.time('array')
for (let i = 0; i < 10000; i++) {
    const start = Date.now();
    // console.log(start)
    arr.push(addManyNums(i));
    const end = Date.now();
    console.log(end - start);
}

console.timeEnd('array');



// n = 1000
// console.log(`addNums(${n}): `);
// addNums10Timing(10000000);

// console.log("\n***********\n");

// n = 1000
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(1000);
