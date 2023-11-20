function isFive(num) {
  // Your code here
  // if (num === 5) return true
  // else return false
  return num === 5
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") throw new Error()

  // if (number % 2 !== 0) return true
  // return false

  return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  // Your code here
  const arr = []

  for (let i = min; i <= max; i += step) {
    arr.push(i)
  }

  // console.log(arr)
  return arr
}


module.exports = { isFive, isOdd, myRange };
