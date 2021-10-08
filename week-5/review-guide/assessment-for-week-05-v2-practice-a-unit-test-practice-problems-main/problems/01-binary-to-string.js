function binaryToString(binaryBlob) {
  // Your code here
  let binChars = [];
  let returnLetters = [];
  for (let i = 0; i < binaryBlob.length; i++){
    binChars.push(binaryBlob[i]);
    if (binChars.length === 8) {
      let charCode = parseInt(binChars.join(''), 2);
      let asciiVal = String.fromCharCode(charCode);
      returnLetters.push(asciiVal);

      binChars = [];
    }
}

  return returnLetters.join('');
}

console.log(binaryToString('010000010100001001000011'));  // 'ABC'


module.exports = binaryToString;