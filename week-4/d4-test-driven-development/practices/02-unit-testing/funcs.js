function isFive(num) {
  // Your code here
  return num === 5;
  
  // if (num === 5) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function isOdd(number) {

  if (typeof number !== 'number') throw new Error();

  return number % 2 !== 0;


  // if (number % 2 === 0) {
  //   return false;
  // } else if (typeof number !== 'number') {
  //   throw new Error()
  // }
  // return true;
}

function myRange(min, max, step = 1) {
  let newArray = [];

    for (let i = min; i <= max; i += step) {
      newArray.push(i);
    }
  return newArray;
}


module.exports = { isFive, isOdd, myRange };
