const {quickFunc} = require('../import-export/scratch')

console.log(quickFunc())

function multiplication(num1, num2) {
    return num1 * num2;
}

module.exports = { multiplication };