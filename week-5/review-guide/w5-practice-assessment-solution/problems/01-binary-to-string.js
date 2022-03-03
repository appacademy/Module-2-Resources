function binaryToString(binaryBlob) {
    let asciiStr = ''

    for (let i = 0; i < binaryBlob.length; i += 8) {
        const binary = binaryBlob.substring(i, i + 8)
        // const charCode = parseInt(binary, 2)
        // const ascii = String.fromCharCode(charCode)
        const ascii = String.fromCharCode(`0b${binary}`)

        asciiStr += ascii
    }

    return asciiStr

    // return binaryBlob.replace(/[01]{8}/g, (binary) => {
    //     return String.fromCharCode(`0b${binary}`);
    // });
}

// Uncomment to run local tests

console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'

module.exports = binaryToString;
