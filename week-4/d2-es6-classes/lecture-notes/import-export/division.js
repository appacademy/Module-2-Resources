

function division(num1, num2){
  return num1 / num2;
}

// * since we use a single export we cannot import modulo function
function modulo(num1, num2){
  return num1 % num2;
}

// use a single export
module.exports = division;
