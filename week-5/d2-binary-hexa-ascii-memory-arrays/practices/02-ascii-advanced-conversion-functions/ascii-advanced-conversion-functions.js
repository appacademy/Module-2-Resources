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
    // const decimal = parseInt(blob.substring(2), 2)
    const decimal = parseInt(blob.slice(2), 2)
    return `0x${decimal.toString(16)}`
}

console.log('Binary to hexadecimal:')
console.log(binaryToHexa('0b1010')) // '0xa'
console.log(binaryToHexa('0b0011')) // '0x3'
console.log('')

/*
Hexadecimal to binary
*/
function hexaToBinary (blob) {
    const decimal = parseInt(blob, 16)
    return `0b${decimal.toString(2)}`
}

console.log('Hexadecimal to binary:')
console.log(hexaToBinary('0xa1'))  // '0b10100001'
console.log(hexaToBinary('0xff'))  // '0b11111111'
console.log('')

/*
Base 10 to ASCII
*/
function deciToAscii(blob) {
    return String.fromCharCode(blob)
}

console.log('Base 10 to ASCII:')
console.log(deciToAscii(65))  // 'A'
console.log(deciToAscii(97))  // 'a'
console.log('')

/*
Binary to ASCII
*/
function binaryToAscii(blob) {
    // const decimal = parseInt(blob.substring(2), 2)
    // return String.fromCharCode(decimal)
    return String.fromCharCode(blob)
}

console.log('Binary to ASCII:')
console.log(binaryToAscii('0b01000010'))  // 'B'
console.log(binaryToAscii('0b01100010'))  // 'b'
console.log('')

/*
Hexadecimal to ASCII
*/
function hexaToAscii(blob) {
    return String.fromCharCode(blob)
}

console.log('Hexadecimal to ASCII:')
console.log(hexaToAscii('0x43'))  // 'C'
console.log(hexaToAscii('0x63'))  // 'c'
console.log('')

/*
ASCII to decimal
*/
function asciiToDeci(blob) {
     blob.charCodeAt(0)
}

console.log('ASCII to decimal:')
console.log(asciiToDeci('D'))  // 68
console.log(asciiToDeci('d'))  // 100

// function asciiToDeci(blob) {
//     const arr = []

//     for (let i = 0; i < blob.length; i++) {
//         arr.push(blob.charCodeAt(i))
//     }
//     return arr
// }

// console.log(asciiToDeci('ABC'))  // 65, 66, 67

module.exports = {
    binaryToHexa,
    hexaToBinary,
    deciToAscii,
    binaryToAscii,
    hexaToAscii,
    asciiToDeci
}
