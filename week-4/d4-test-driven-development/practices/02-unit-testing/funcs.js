function isFive(num) {
  // Your code here
  // return num === 5;

  if (num === 5) return true
  else return false
  // try {
  //   if (typeof num !== 'number') {
  //     throw new Error('Not 5');
  //   }
  //   return num === 5;
  // } catch(e) {
  //   console.error(e.message);
  // }
}

function isOdd(number) {
  // Your code here
  if (typeof number === 'number') {
    return number % 2 === 1 || number % 2 === -1
  }
  throw new Error();
}

function myRange(min, max, step = 1) {
  // Your code here
  const newArr = [];
  for (let i = min; i <= max; i += step) {
    newArr.push(i);
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };
