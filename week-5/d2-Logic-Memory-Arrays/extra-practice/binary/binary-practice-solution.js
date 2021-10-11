//Convert the following: _HINT_: to be best prepared to do this on the test, create functions to do this.

//Hexadecimal to decimal:
function hexToDec(hexStr) {
  return parseInt(hexStr, 16);
}
console.log(hexToDec("309")); // => 777
/**************************** */

//Decimal to Binary:
//5687
function decToBin(decimal) {
  return decimal.toString(2);
}
console.log(decToBin(5687)); // => 1011000110111
/***************************** */

//Binary to Decimal:
//0b101101
function binToDec(binaryBlob) {
  return parseInt(binaryBlob, 2).toString(10);
}
console.log(binToDec(101101)); // => 45
/****************************** */

//Decimal to Hexadecimal:
//13453
function decToHex(decimal) {
  return decimal.toString(16);
}
console.log(decToHex(13453)); // => 348d
/****************************** */

//Hexadecimal to ASCII:
function hexToASCII(hexStr) {
  let hex = hexStr.toString();
  let str = "";
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
console.log(hexToASCII("736F667477617265")); // => software
/******************************* */

//Binary to ASCII:
function binToASCII(binaryBlob) {
  let binString = "";
  binaryBlob.split(" ").map((bin) => {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  return binString;
}
console.log(
  binToASCII(
    "01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100"
  )
); // => javascript
/******************************** */

//ASCII to Binary:
//'appacademy'
function ASCIIToBin(ASCIIStr) {
  let result = "";
  for (let i = 0; i < ASCIIStr.length; i++) {
    let bin = ASCIIStr[i].charCodeAt().toString(2);
    result += Array(8 - bin.length + 1).join("0") + bin;
  }
  return result;
}
console.log(ASCIIToBin("appacademy")); // => 01100001011100000111000001100001011000110110000101100100011001010110110101111001
/********************************* */

//ASCII to Hexadecimal:
//'badger'
function ASCIIToHex(ASCIIStr) {
  let arr = [];
  for (let i = 0, l = ASCIIStr.length; i < l; i++) {
    let hex = Number(ASCIIStr.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join("");
}
console.log(ASCIIToHex("badger")); // => 626164676572
