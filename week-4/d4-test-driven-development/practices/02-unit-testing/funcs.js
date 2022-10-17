function isFive(num) {
  // if (num === 5) return true;
  // else return false;

  return num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') throw new Error();
  // if (number % 2 === 0) return false;
  // if (number % 2 !== 0) return true;

  return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  let finalArr = [];

  for (let i = min; i <= max; i += step) {
    finalArr.push(i);
  }
  return finalArr;
}


module.exports = { isFive, isOdd, myRange };
