function isFive(num) {
  // Your code here
  // if (num === 5) {
  //   return true;
  // } else {
  //   return false;
  // }
  // ||
  // return num !== 5 ? false : true;
  // ||
  // return num === 5 ? true : false;
  // ||
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') throw new Error()
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here
  const range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}


module.exports = { isFive, isOdd, myRange };
