// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0; // c

  for (let i = 1; i <= n; i++) { // c n c
    sum += i; // c
  }
  return sum; // c
  // c + c + n + c + c + c 
  // n
} // O(n)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += addNums(i);
  }
  return total;
} // O(n^2);



module.exports = [addNums, addManyNums];
