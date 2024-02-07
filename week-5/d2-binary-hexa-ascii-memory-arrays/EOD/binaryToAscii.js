// * Translate the binary sequences in the
// * console.logs below to 8-bit ASCII strings:

/******************************************************************************/
/*
* 1 Understand the problem
    a. Binary is hard to read (don't do it by hand)
    b. Read the binary (its in an ugly string format)
    c. Separate it into individual bits/bytes
    d. Turn into readable text

* 2. Make a plan
    a. we need to split this string into chunk of 8 bits => bytes
        1. iterate through the string (for loop) use slice -> output an array
    b. after we have separate chunks we convert binary to ascii
        a. iterate through the array from above
            1.5 helper func to give the num vals
            1.51 num val to a char code
    c. Profit.
* 3 Execute the plan
*/

// create a helper func to break apart the binary string into bytes
const binaryArrayHelper = str => {
    //return an array of bytes
    let binaryArray = [];

    // console.log(str.length) // 24 / 8 => 3 bytes
    for (let i = 0; i < str.length; i += 8){
        // console.log(i)
        let sliced = str.slice(i,i+8)
        // console.log({ sliced })
        binaryArray.push(sliced)
    }

    // console.log(binaryArray) // [ '01100001', '01100010', '01100011' ]
    return binaryArray

}

// console.log(binaryArrayHelper("011000010110001001100011"))

const binaryToAscii = str => {
    // return an ascii string
    let ascii = "";

    // grab the binary array from the helper
    let binaryArray = binaryArrayHelper(str); // [ '01100001', '01100010', '01100011' ]

    // iterate through the binary bytes
    for (let ele of binaryArray) {
        let charCode = parseInt(ele,2) // ele => '01100011'
        // console.log({charCode});
        ascii += String.fromCharCode(charCode)
    }

    // console.log(ascii)

    return ascii

}



console.log(binaryToAscii("011000010110001001100011"));
"abc";
console.log(binaryToAscii("010000010100001001000011"));
// "ABC";
console.log(
  binaryToAscii(
    "010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100"
  )
);
// "Hello, world";
