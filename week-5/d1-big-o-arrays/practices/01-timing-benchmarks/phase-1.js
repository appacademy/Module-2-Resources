// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
}// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  //    c
  let sum = 0;

       //    c    (c * n) (c * n)
  for (let i = 1; i <= n; i++) {
    // (c * n)
    sum += i;
  }
  // c
  return sum;
} // O(n)

// T(c + c + (c * n) + (c * n) + (c * n) + c);
// T(c + c + n + n + n + c);
// T(n + n + n)
// T(n * 3)
// O(n)


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




module.exports = [addNums, addManyNums];
