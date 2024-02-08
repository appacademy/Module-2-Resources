const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  //!!START
  let new8bitStr = '';

  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt();
    let charCodeStr = charCode.toString();

    let asciiNum = parseInt(charCodeStr);
    let binaryStr = asciiNum.toString(2);

    if (binaryStr.length < 8) binaryStr = addZeros(binaryStr, 8);

    new8bitStr += binaryStr;
  }

  return new8bitStr;
  //!!END
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
