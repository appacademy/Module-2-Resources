// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0; // 1
  //       1        1 * n  1 * n
  for (let i = 1; i <= n; i++) {
    sum += i; // 1 * n
  }
  return sum; // 1
} // O(1 + 1 (1 * n) + (1 * n) + (1 * n) + 1)
  // O(1 + 1 + (3 * n) + 1)
  // O(1 + 1 + n + 1)
  // O(n)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0; // 1
  //     1          1*n    1*n
  for (let i = 1; i <= n; i++) {
 // (1*n)  *  n
    sum += addNums(i);
  }
  return sum; // 1
} // O(1 + 1 + (1*n) + (1*n) + ((1*n) * n) + 1);
//   O(1 + 1 + ((3*n) * n) + 1);
//   O(1 + 1 + (n * n) + 1);
//   O(n*n)
//   O(n^2)



module.exports = [addNums, addManyNums];
