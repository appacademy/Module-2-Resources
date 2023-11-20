// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0 // 1

  //               n
  for (let i = 1; i <= n; i++) {
    // 1
    sum += i
  }

  // 1
  return sum
}

// T(1 + (n * 1) + 1)
// Time O(n)
// Space O(1)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0  // 1
  //                 n
  for (let i = 1; i <= n; i++) {
    //  1 + O(n)
    sum += addNums(i)
  }

  // 1
  return sum
}
// T(1 + (n * (1 + n)) + 1) => T (1 + (n * n) + 1)
// Time O(n^2)



module.exports = [addNums, addManyNums];

console.time("Briana")
addNums(100)
console.timeEnd("Briana")

const start = Date.now()
// some code
const end = Date.now()

console.log(end - start)
