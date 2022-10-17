// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0;  // c

        // c              // c * n
  for (let i = 0; i <= n; i++) {
    // c * n
    sum += i;
  }
  // c
  return sum;
} // O(n)

// O(1 + 1 + (1 * n) +  (1 * n) + 1)
// O(1 + 1 + n + n + 1)
// O(n)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0;  // c

        // c               c * n
  for (let i = 1; i <= n; i++) {
    // c * n   * n
    sum += addNums(i);
  }
 // c
  return sum;
} // O(n^2)

  // O(1 + 1 + (1 * n) + (1 * n * n) + 1);
  // O(1 + 1 + n + n^2 + 1)
  // O(n^2)



module.exports = [addNums, addManyNums];
