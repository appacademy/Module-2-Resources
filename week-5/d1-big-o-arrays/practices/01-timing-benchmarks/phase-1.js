// Adds up positive integers from 1-n
function addNums(n) {
  // O(n)
  // Fill this in
  let sum = 0; // => constant => 1

  //        1     (1 * n) (1 * n)
  for (let i = 1; i <= n; i++) {
    // (1 * n)
    sum += i;
  }
  // 1
  return sum;
} // T(1 + 1 + (1 * n) + (1 * n) + (1 * n) + 1)
// T(3 + n + n + n)
// T(3 + 3n)
// O(n)
// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // O(n^2)
  // Fill this in
  let sum = 0; // 1
  //        1     (1 * n)  (1* n)
  for (let i = 1; i <= n; i++) {
    // (1 * n * n)
    sum += addNums(i);
  }
  return sum;
} // T(1 + 1 + (1*n) + (1*n) + (1*n*n) + 1)
// T(3 + n + n + n^2)
// O(n^2)

module.exports = [addNums, addManyNums];
