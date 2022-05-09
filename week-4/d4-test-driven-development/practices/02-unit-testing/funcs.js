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
  const array = []

  for (let i = min; i <= max; i += step) {
    array.push(i)
  }

  return array
}


// console.log(typeof 5, typeof "word")
// console.log(5 % 2)
// console.log('word' % 2 !== 0)
// const word = { defintion: 'phrase'}
// console.log(word.defintion) // phrase
// console.log(notAWord.defintion) // referenceerror


module.exports = { isFive, isOdd, myRange };
