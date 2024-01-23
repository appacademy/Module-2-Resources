const adding = require("./adding");
const { minus2, subtraction } = require("./subtraction");
const { multiplication: taco } = require("../other/multiplication");
// const { taco } = require("../other/multiplication");

function multiplication(num1) {
  return 10 * num1;
}

// console.log(adding(1, 2));
// console.log(subtraction(4, 3));
// console.log(taco(3, 3));

// console.log(module);

module.exports = { adding, minus2, subtraction, multiplication, taco };
