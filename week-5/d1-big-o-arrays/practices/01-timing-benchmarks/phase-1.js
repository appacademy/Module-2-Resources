// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  //    c 
  let sum = 0;
  //     c        (c * n) (c * n)
  for (let i = 1; i <= n; i++) {
  // (c * n)
    sum += i;
  }
  // c
  return sum;
} // O(n)
// T(c + c + (c*n) + (c*n) + (c*n) + c)
// T(c + c + n + n + n + c)
// T(n + n + n) => 3n
// O(n)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  //    c
  let sum = 0;
  //      c        (c * n) (c*n)
  for (let i = 1; i <= n; i++) {
  //  (c * n * n)
    sum += addNums(i);
  }
  // c
  return sum;
} // O(n^2)
  // T(c + c + (c*n) + (c*n) + (c*n*n) + c)
  // T(c + c + n + n + n^2 + c)
  // T(n + n + n^2)
  // O(n^2)

console.time('addNums');
addNums(10000);
console.timeEnd('addNums');
console.time('addManyNums');

addManyNums(10000);
console.timeEnd('addManyNums');

module.exports = [addNums, addManyNums];
