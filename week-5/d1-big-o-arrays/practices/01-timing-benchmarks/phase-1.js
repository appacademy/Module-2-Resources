// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
} // O(n)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    // const start = Date.now();
    sum += addNums(i);
    // const end = Date.now();
    // console.log(end - start)
  }


  return sum;
} // O(n^2)

// console.time('addNums');
// addNums(100000000);
// console.timeEnd('addNums');

// addManyNums(100000)

module.exports = [addNums, addManyNums];
