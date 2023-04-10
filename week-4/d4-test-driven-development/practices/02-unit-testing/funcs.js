function isFive(num) {
  // Your code here
  // if (num === 5) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return num === 5 ? true : false;
  return num === 5;

}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw new Error()
  }
  // Your code here

  // if (number % 2 !== 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here
  const arr = [];

  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }

  return arr;
}


module.exports = { isFive, isOdd, myRange };
