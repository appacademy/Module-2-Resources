function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== "number") throw new Error('Not a number')
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
