// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in

  // 1
  let sum = 0

    // 1           n       1
  for (let i = 1; i <= n; i++) {
    // 1
    sum += i
  }

  // 1
  return sum
}
// T(1 + ((1 + n + 1) * 1) + 1)
// T ((1 + n + 1) * 1)
// Time O(n)
// Space O(1)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0

  // n
  for (let i = 1; i <= n; i++) {
    // 1 +    n
    sum += addNums(i)
  }

  return sum
}
// T(n * (1 + n))
// T(n * n)
// O(n^2)


module.exports = [addNums, addManyNums];

// console.time("Bri's addNums")
// addNums(1000000000)
// console.timeEnd("Bri's addNums")
