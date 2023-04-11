const adding = function adding(a, b) {
    return a + b;
}
const subtraction = function subtraction(a, b) {
  if (a > b) return a - b;
  return b - a;
}
const division = (num1, num2) => {
  return num1 / num2;
}
//this function returns the sum of two numbers
module.exports = {
    adding, subtraction, division
}
// module.exports = adding;
// module.exports = {
//     adding: adding
// }
 

// module.exports.adding = adding
//module.exports.subtraction = subtraction;
// console.log(adding(8, 9))
// console.log(module.exports)