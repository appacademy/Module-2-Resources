// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
       // c = 1
  let total = 0;
           // c   // c * n  // c * n
  for (let i = 0; i <= n; i++) {
    // c * n
    total += i;
  }
  // c
  return total;
} // O(1 + 1 + (1 * n) + (1 * n) + (1 * n) + 1)
  // O(1 + 1 + (3 * n) + 1)
  // O(1 + 1 + n + 1)
  // O(n)

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
   // c
  let total = 0;
         // c      c * n   c * n
  for (let i = 0; i <= n; i++) {
     // (c * n) * n
    total += addNums(i);
  }
  // c
  return total;
} // O(1 + 1 + (1 * n) + (1 * n) + ((1 * n) * n) + 1)
  // O(1 + 1 + ((3 * n) * n) + 1)
  // O(1 + 1 + (n * n) + 1)
  // O(n^2)



module.exports = [addNums, addManyNums];
