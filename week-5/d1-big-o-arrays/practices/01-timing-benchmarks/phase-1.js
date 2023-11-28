// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0     // 1

  //        1        n     n
  for (let i = 1; i <= n; i++) {
    // 1
    sum += i
  }


  return sum  // 1
}

// Time
// T(1 + ((1 + n + n) * 1) + 1)
// T((n + n)) ====> O(n)

// Space
// O(1), not taking up or asking for too much space in memory


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0  // c

  for (let i = 1; i <= n; i++) {  // n
    // c +    n
    sum += addNums(i)
  }

  return sum  // c
}

// Time
// T(c + (n * (c + n)) + c)
// T(n * n)
// O(n^2)

console.time("Briana's addNums")
addNums(100)
console.timeEnd("Briana's addNums")

console.log((Date.now()))
addNums(1000000)
console.log((Date.now()))

module.exports = [addNums, addManyNums];
