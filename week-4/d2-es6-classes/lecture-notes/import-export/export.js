/*

 Imports and exports/common js modules

 Common JS Modules
  * In Node.js, each JavaScript file defines a module.
  * Think of modules like an object - {}
  * can see the object if you console.log(module)
  * think about node_modules
    * They are downloaded using npm install which installs dependencies within in the package.json
    * Which then allow to import code from other files or Modules

  * Exporting

*/


// console.log(module);

const operations = ['+', '-', '*'];

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num2 - num1
}

// * Exporting multiple files using an object
// * we are exporting variables that hold functions
// * only add, subtract, and operations gets exported from this file
// * this shorthand for what is up
module.exports = {
  add,
  subtract,
  operations,
};


// module.exports = function multiply(num1, num2) {
//   return num1 * num2
// }


// module.exports = {
//   add: add,
//   subtract: subtract,
//   operations: operations
// };

// console.log(module);



// * Another way to go about adding exports to the module object
// * By default node initialize the module object to be empty - {}
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.operations = operations;


// * exporting a single value
// * nothing else can be exported from this file
// * think of it like instead of module being an object its a single value
// * ex: module.exports = operations vs module.exports = { add, subtract, operations }
// * will show this with division file
// module.exports = operations;

// * can export values as an array
// module.exports = [ add, subtract, operations ];

// * import
// * arrays have order, must destruct positionally
// const [ add, subtract, operations ] = require('./export')
