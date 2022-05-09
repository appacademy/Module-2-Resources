function isFive(num) {
<<<<<<< HEAD
  // Your code here
=======
>>>>>>> ca423129d11dac4022b85601f1aae38f00941f9c
  return num === 5;
}

function isOdd(number) {
<<<<<<< HEAD
  // Your code here
  if (typeof number !== 'number') throw Error("NOT A NUMBER");

=======
  if (typeof number !== "number") throw new Error('Not a number')
>>>>>>> ca423129d11dac4022b85601f1aae38f00941f9c
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
