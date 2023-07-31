// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  // 1
  let sum = 0;
  //      1       (1 * n) (1 * n)
  for (let i = 1; i <= n; i++) {
    // (1 * n * n)
    sum += addNums(i);
  }
  // 1
  return sum;
} // T(1 + 1 + (1*n) + (1*n) + (1*n*n) + 1)
  // T(1 + 1 + n + n + (n*n) + 1)
  // T(n + n + (n^2))
  // O(n^2)



module.exports = [addNums, addManyNums];
