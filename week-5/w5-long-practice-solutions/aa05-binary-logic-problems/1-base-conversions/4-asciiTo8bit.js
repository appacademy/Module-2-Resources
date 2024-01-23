const addZeros = require("../utils/addZeros");

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = (str) => {
  return str.split("").reduce((binStr, char) => {
    return binStr + addZeros(char.charCodeAt().toString(2), 8);
  }, "");
  // Your code here
  // let binStr = "";

  // for (let char of str) {
  //   binStr += addZeros(char.charCodeAt().toString(2), 8);
  // }

  // return binStr;
};

/******************************************************************************/

console.log(asciiTo8bit("123"));
// 001100010011001000110011

console.log(asciiTo8bit("ABC"));
// 010000010100001001000011

console.log(asciiTo8bit("Hello, world!"));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
