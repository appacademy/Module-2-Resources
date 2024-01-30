
/*

  Importing using require
  * When a module needs something from another module, it is said to be dependent on that module. A module's dependencies are the other modules that are required for it to run properly.

  * We must provide relative path to module we intend to import
  * relative meaning relative to the current directory
  * Notice how the file extension, .js, is dropped in the file path. It's not necessary to add the file extension if the extension is .js.

*/


// console.log(module)

// const calculator = require('./export');
// console.log(calculator)
// {
//   add: [Function: add],
//   subtract: [Function: subtract],
//   operations: [ '+', '-', '*' ]
// }

// const add = calculator.add;
// const subtract = calculator.subtract;
// const operations = calculator.operations;

// * destructuring from the module object imported from relative path to the file
// * much cleaner!
const { add, subtract, operations } = require('./export')
const division = require('./division');
const half = require('./folder-module/half');
// const { modulo } = require('./folder-module/index');
const { modulo } = require('./folder-module');

// console.log(division(20, 2))
// console.log(add(10, 20))
// console.log(subtract(20, 5))
// console.log(operations)
// console.log(half(30))
// console.log(modulo(12, 5))
