const [addNums, addManyNums] = require('./phase-1');

function addNums10Timing(increment) {
  // Fill this in
  const res = [];
  for (let i = 1; i <= 10; i++) {
    const start = Date.now();
    const sum = addNums(i * increment);
    res.push(sum); // [1,3]
    const end = Date.now();
    console.log(end - start);
  }
  return res;
}

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
addNums10Timing(10000000);

console.log('\n***********\n');

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(1000);
