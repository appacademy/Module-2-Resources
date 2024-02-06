/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
   parseInt() -
    * binary -> decimal
    * hex    -> decimal
  toString() -
    * decimal -> binary
    * decimal -> hex
  String.fromCharCode()
    * Base 10 to ASCII
      * 65 -> A
    * Binary to ASCII
      * 0b01000010 -> B
    * Base 16 to ASCII
      * 0x43 -> C
  charCodeAt()
    * ASCII to Decimal
      * A -> 65
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
  // Your code here
  // binary -> decimal
  const decimal = parseInt(blob.substring(2), 2);
  // console.log(decimal)
  // console.log(decimal.toString(16))
  return `0x${decimal.toString(16)}`

}

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
  // Your code here
  const decimal = parseInt(blob.substring(2), 16)
  // console.log(decimal);
  return `0b${decimal.toString(2)}`
}

/* Base 10 to ASCII */
function decimalToAscii(blob) {
  return String.fromCharCode(blob)
}

/* Base 2 to ASCII */
function binaryToAscii(blob) {
  // Your code here
  return String.fromCharCode(blob)
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
  // Your code here
  return String.fromCharCode(blob)
}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  // Your code here
  const res = [];

  for(let i = 0; i < blob.length; i++) {
    res.push(blob.charCodeAt(i))
  };

  return res;
}


// console.log('ASCII to decimal:')
// console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
// console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

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

// console.log('ASCII to decimal:')
// console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
// console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
