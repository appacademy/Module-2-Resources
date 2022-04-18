function binaryToString(binaryBlob) {
let asciiStr = ''

for (let i = 0; i < binaryBlob.length; i += 8) {
  // Split the full string into 8-bit strings.
  const binary = binaryBlob.substring(i, i + 8)

  // Convert the strings to integers.
  // Convert the integers to ASCII characters.

  // const charCodes = parseInt(binary, 2)
  // const ascii = String.fromCharCode(charCodes)
  const ascii = String.fromCharCode(`0b${binary}`)

  // Then join the characters into a return string.
    asciiStr += ascii
  }

  return asciiStr
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
