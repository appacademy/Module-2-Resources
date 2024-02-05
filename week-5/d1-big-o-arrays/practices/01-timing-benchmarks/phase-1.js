



// Adds up positive integers from 1-n
function addNums(n) {
  // 1
  let total = 0;

  // 1 (1 * n) + (1 * n)
  for(let i = 1; i <= n; i++){
    // (1 * n)
    total += i;
  };

  return total;
}
// T(1 + (1 * n) + (1 * n) + (1 * n) + 1)
// T(1 1n + 1n + 1n + 1)
// T(2 + 3n)
// T(n)
// Time complexity - O(n)

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {

  let total = 0;

  // 1 + (1 * n) + (1 * n)
  for(let i  = 1; i <= n; i++){
    // O(n)
    // n amount of work n amount times
    // (1 * n) + O(n)
    total += addNums(i);
  };

  return total;
}
// T(n * n);
// T(n^2)
//1 + (1 * n) + (1 * n) + (1 * n) * O(n)
// O(n^2)


module.exports = [addNums, addManyNums];
