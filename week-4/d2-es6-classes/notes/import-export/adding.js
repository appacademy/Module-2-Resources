function adding(a, b) {
    return a + b;
}

// exports.subtraction = function subtraction(a, b) {
//   if (a > b) return a - b;
//   return b - a;

// }

// exports.division = (num1, num2) => {
  //   return num1 / num2;
  // }
  //this function returns the sum of two numbers
  // module.exports = {
    //     adding, subtraction, division
    // }
    // module.exports = {
      //     adding: adding
      // }
      

// module.exports.adding = adding
//module.exports.subtraction = subtraction;
const variable = 'this is a variable';


// console.log(module.exports)
// module.exports = variable;
// module.exports = adding;
// module.exports = { variable: variable, adding: adding }
module.exports = [ variable, adding ]

// console.log(module.exports)

// console.log(adding(1, 2))