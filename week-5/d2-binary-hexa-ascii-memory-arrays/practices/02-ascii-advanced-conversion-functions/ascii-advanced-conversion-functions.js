/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
    parseInt()
    Number.toString()
    String.fromCharCode()
    string.charCodeAt()
*/

/*
Binary to hexadecimal
*/
function binaryToHexa(blob) {
    //!!START
    const decimal = parseInt(blob.substring(2), 2)
    return `0x${decimal.toString(16)}`
    //!!END
}

// console.log('Binary to hexadecimal:')
// console.log(binaryToHexa('0b1010')) // '0xa'
// console.log(binaryToHexa('0b0011')) // '0x3'
// console.log('')

/*
Hexadecimal to binary
*/
function hexaToBinary (blob) {
    //!!START
    const decimal = parseInt(blob, 16)
    return `0b${decimal.toString(2)}`
    //!!END
}

// console.log('Hexadecimal to binary:')
// console.log(hexaToBinary('0xa1'))  // '0b10100001'
// console.log(hexaToBinary('0xff'))  // '0b11111111'
// console.log('')

/*
Base 10 to ASCII
*/
function deciToAscii(blob) {
    //!!START
    return String.fromCharCode(blob)
    //!!END
}

// console.log('Base 10 to ASCII:')
// console.log(deciToAscii(65))  // 'A'
// console.log(deciToAscii(97))  // 'a'
// console.log('')

/*
Binary to ASCII
*/
function binaryToAscii(blob) {
    //!!START
    return String.fromCharCode(blob)
    //!!END
}

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

/*
Hexadecimal to ASCII
*/
function hexaToAscii(blob) {
    //!!START
    return String.fromCharCode(blob)
    //!!END
}

// console.log('Hexadecimal to ASCII:')
// console.log(hexaToAscii('0x43'))  // 'C'
// console.log(hexaToAscii('0x63'))  // 'c'
// console.log('')

/*
ASCII to decimal
*/
function asciiToDeci(blob) {
    //!!START
    return blob.charCodeAt(0)
    //!!END
}

// console.log('ASCII to decimal:')
// console.log(asciiToDeci('D'))  // 68
// console.log(asciiToDeci('d'))  // 100

module.exports = {
    binaryToHexa,
    hexaToBinary,
    deciToAscii,
    binaryToAscii,
    hexaToAscii,
    asciiToDeci
}
