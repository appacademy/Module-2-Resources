function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') throw Error("NOT A NUMBER");

  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here
}


module.exports = { isFive, isOdd, myRange };
