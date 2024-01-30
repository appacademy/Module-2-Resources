


const { add: coolerAdd } = require('./export');


function add(num1, num2) {
  return num1 + num2
}


// console.log(add(10, 12));
// console.log(coolerAdd(34, 12));


/*

  Can alias as export
  Preferred to do when importing

*/
// module.exports = { coolestAdd: add }
