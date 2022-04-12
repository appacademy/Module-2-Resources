/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
    parseInt()
    Number.toString()
*/

/*
Base 10 to binary
*/
function deciToBinary(blob) {
    //!!START
    return `0b${blob.toString(2)}`
    //!!END
}

// console.log('Base 10 to binary:')
// console.log(deciToBinary(13))  // '0b1101'
// console.log(deciToBinary(72))  // '0b1001000'
// console.log('')

/*
Base 10 to hexadecimal
*/
function deciToHexa(blob) {
    //!!START
    return `0x${blob.toString(16)}`
    //!!END
}

// console.log('Base 10 to hexadecimal:')
// console.log(deciToHexa(9))   // '0x9'
// console.log(deciToHexa(32))  // '0x20'
// console.log('')

/*
Binary to base 10
*/
function binaryToDeci(blob) {
    //!!START
    return parseInt(blob.substring(2), 2)
    //!!END
}

// console.log('Binary to base 10:')
// console.log(binaryToDeci('0b0101'))      // 5
// console.log(binaryToDeci('0b10001000'))  // 136
// console.log('')

/*
Hexadecimal to base 10
*/
function hexaToDeci (blob) {
    //!!START
    return parseInt(blob, 16)
    //!!END
}

// console.log('Hexadecimal to base 10:')
// console.log(hexaToDeci('0x51'))    // 81
// console.log(hexaToDeci('0x10ff'))  // 4351


module.exports = {
    deciToBinary,
    deciToHexa,
    binaryToDeci,
    hexaToDeci
}
