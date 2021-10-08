function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw Error('not a number')
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here
  const array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };