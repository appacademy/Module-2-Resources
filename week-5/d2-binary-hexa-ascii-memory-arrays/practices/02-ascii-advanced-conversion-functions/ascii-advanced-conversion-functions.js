/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
  // Your code here

  // blob = blob.substring(2)

  // bin to deci
  // blob = parseInt(blob, 2)

  // deci to hexa
  // blob = blob.toString(16)

  // return "0x" + blob

  return `0x${parseInt(blob.substring(2), 2).toString(16)}`
}

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
  // Your code here

  blob = blob.substring(2)

  // hexa to deci
  blob = parseInt(blob, 16)

  // deci to bin
  blob = blob.toString(2)

  // add 0b
  return "0b" + blob
}

/* Base 10 to ASCII */
function decimalToAscii(blob) {
  // Your code here
  return String.fromCharCode(blob)
}

/* Base 2 to ASCII */
function binaryToAscii(blob) {
  // Your code here

  // bin to deci
  // blob = parseInt(blob.substring(2), 2)
  // console.log(blob)

  // deci to ascii
  // return String.fromCharCode(blob)

  // will work alone with "0b" prefix
  return String.fromCharCode(blob)
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
  // Your code here

  // hexa to deci
  // blob = parseInt(blob.substring(2), 16)

  // deci to ascii
  // return String.fromCharCode(blob)

  // will work alone with "0x" prefix
  return String.fromCharCode(blob)
}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  // Your code here

  // let asciiArr = []
  // for (let i = 0; i < blob.length; i++) {
  //   // console.log(blob[i])

  //   // OPTION 1
  //   // ascii to deci
  //   // let ascii = blob.charCodeAt(i)

  //   // OPTION 2
  //   let ascii = blob[i].charCodeAt()
  //   // console.log(ascii)

  //   asciiArr.push(ascii)
  // }

  // return asciiArr

  return blob.split('').map(letter => letter.charCodeAt())
}

// console.log('Binary to hexadecimal:')
// console.log(binaryToHexadecimal('0b1010')) // '0xa'
// console.log(binaryToHexadecimal('0b0011')) // '0x3'
// console.log('')

// console.log('Hexadecimal to binary:')
// console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
// console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
// console.log('')

// console.log('Decimal to ASCII:')
// console.log(decimalToAscii(65))  // 'A'
// console.log(decimalToAscii(97))  // 'a'
// console.log('')

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

// console.log('Hexadecimal to ASCII:')
// console.log(hexadecimalToAscii('0x43'))  // 'C'
// console.log(hexadecimalToAscii('0x63'))  // 'c'
// console.log('')

console.log('ASCII to decimal:')
console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
