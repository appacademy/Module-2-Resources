// const { adding, subtraction, division } = require('./adding')
// const subtraction  = require('./subtraction')
// const { multiplication: taco } = require('../other/multiplication')
const { quickFunc, anotherFunc } = require('./scratch')

console.log(quickFunc())
console.log(anotherFunc())

function functastic() {
  return 'will it work?'
}


// console.log(adding(5, 7)) //=> 12
// console.log(subtraction(8, 3)) //=> 5
// console.log(subtraction(2, 7)) // => 5
// console.log(taco(2,3))

module.exports = functastic