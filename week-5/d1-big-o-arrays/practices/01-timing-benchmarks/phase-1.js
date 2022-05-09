// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
// O(n) time, O(1) space

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += addNums(i);
  }

  return total;
}
// O(n^2) time, O(n)


module.exports = [addNums, addManyNums];
