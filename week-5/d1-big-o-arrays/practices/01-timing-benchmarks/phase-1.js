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
  //      c
  let sum = 0;
  //         c     (c * n) (c * n)
  for (let i = 1; i <= n; i++) {
//(c * n)    (n * n)
    sum += addNums(i);
  }

  return sum;
} // T(c + c + (c * n) + (c * n) + (c * n) + (n * n))
  // T(1 + 1 + (1 * n) + (1 * n) + (1 * n) + (n * n));
  // T(1 + 1 + n + n + n + n^2)
  // T(n + n + n + n^2);
  // T(3n + n^2);
  // O(n^2)

 // O(n^2)

module.exports = [addNums, addManyNums];
