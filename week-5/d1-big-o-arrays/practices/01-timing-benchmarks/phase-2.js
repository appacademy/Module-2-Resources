const [addNums, addManyNums] = require('./phase-1');

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
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
} // O(n)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const res = [];
  for (let i = 1; i <= 10; i++) {
    const start = Date.now();
    res.push(addManyNums(i * increment));
    const end = Date.now();
    console.log(end - start);
  }
  return res;
} // O(n^2)

// console.time('addNums10');
// addNums10(1000);
// console.timeEnd('addNums10');
// console.time('addManyNums10');
// addManyNums10(1000);
// console.timeEnd('addManyNums10');

module.exports = [addNums10, addManyNums10];
