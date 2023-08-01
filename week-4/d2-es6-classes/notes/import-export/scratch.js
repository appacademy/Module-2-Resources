const functastic = require('./main');

function quickFunc() {
  return 'howdy';
}

function anotherFunc() {
  return 'hello'
}

console.log(anotherFunc() + 'world');

// console.log(module)
// module.exports = quickFunc;
// module.exports.quickFunc = quickFunc
// module.exports = { howdy: quickFunc, hello: anotherFunc }
module.exports = { quickFunc, anotherFunc }
// console.log(module)