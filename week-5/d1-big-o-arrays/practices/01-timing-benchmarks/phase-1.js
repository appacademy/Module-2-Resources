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
    sum += addNums(i);
  }
  return sum;
} // O(n^2)

module.exports = [addNums, addManyNums];
