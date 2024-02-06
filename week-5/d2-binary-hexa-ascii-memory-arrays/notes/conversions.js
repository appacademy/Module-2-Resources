

// Base 10 - Decimal
  // * 10 Options: 0 - 9
// Base 2  - Binary
  // * 2 Options: 0 & 1
// Base 16 - Hexadecimal
  // * 16 Options: 0 - 9, A,B,C,D,E,F

// 0b 0101 0101
// * Binary digit is a bit
// 1 or 0
// * 4 bits is a nibble
// 0101
// * 8 bits is a byte
// 0101 0101

// ! 1 byte = 8 bits

// Kilobyte - thousand
// * 8000 bits
// 0 or 1
// * 4000 nibbles
// 0101
// * 1000 bytes
// 0010 0101


// Gigabyte - billion
// * 8 billion bits
// 0 or 1
// * 4 billion nibbles
// 0101
// * 1 billion bytes
// 0010 0101

// Converting from binary/hex to decimal
// * Also used to count in decimal
// * Formula
// * Find out what are we converting between
// * Assign each value to index
//   * Left to right starting with 0
// * Raise base to the current index
// * Take result and multiply by value at index
// * Sum results

// Base 10 - Decimal
/*


  6       5       2       3

  Index -   3       2       1       0
  Value -   6       5       2       3
  Base^I    10^3    10^2    10^1    10^0
            1000    100     10      1
  B^I * V   6000    500     20      3
  SUM = 6523


*/



// Convert binary/base 2 - base 10/decimal
// 0b11001010 -> 202

/*

  Index -   7    6   5   4   3   2   1   0
  V     -   1    1   0   0   1   0   1   0
  Base*I    2^7  2^6 2^5 2^4 2^3 2^2 2^1 2^0
            128   64  32  16   8   4   2   0
  B^I * V  128   64  0   0   8   0   2   0

  Sum = 128 + 64 + 8 + 2 = 202

*/

// - Converting from decimal to binary/hex
//   * Formula
//   * Find out what we are converting between
//   * Take decimal value and divide by base(either 2 or 16)
//   * Note the remainder
//   * Keep doing so till decimal value cannot be divided
//   * Starting from last value
//   * concatenate values and append proper pre-fix: 0b or 0x

// 202 -> 0b11001010
// Convert base 10/decimal -> binary/base 2
// 202 / 2 = 101 - r0
// 101 / 2 = 50  - r1
// 50 /  2 = 25  - r0
// 25 / 2  = 12  - r1
// 12 / 2  =  6  - r0
// 6  / 2  =  3  - r0
// 3  / 2  =  1  - r1
// 1  / 2  =  0  - r1 <--- left most value - 1st value

// 0b11001010

/*

Converting from binary/hex to decimal
* Also used to count in decimal
* Formula
* Find out what are we converting between
* Assign each value to index
  * Left to right starting with 0
* Raise base to the current index
* Take result and multiply by value at index
* Sum results
*/

// programmatic solution using powers
const binary = '0b11001010';

const binaryToDecimal = (binaryStr) => {
  //0b 11001010
    binaryStr = binaryStr.substring(2);
    //0b 11001010 -> 01010011
    binaryStr = binaryStr.split('').reverse().join('');

    let sum = 0;
  //
    for (let i = 0; i < binaryStr.length; i++) {
        // base^i * value
        let num = Math.pow(2, i) * parseInt(binaryStr[i]);
        sum += num;
    }

    return sum;
};

// console.log(binaryToDecimal(binary));
// parseInt(string, radix)
// ! need to remove the 0b
// * binary to decimal
// console.log(parseInt(11001010, 2));// 202

// * convert back from decimal to binary
// .toString
// decimal.toString(radix)
decimal = parseInt(11001010, 2)
// * decimal to binary
// console.log(decimal.toString(2));// 11001010



/*


  Base 16 - Hexadecimal
  * Base 10 - decimal
  * Base 2 - binary

  * hex = 6, dec = 10, hence hexadecimal (6 + 10 = 16)
  * Prepended with 0x
  * x representing hex

  The digits are 0-9
  A, B, C, D, E and F representing 10, 11, 12, 13, 14 and 15, respectively
  A - 10
  B - 11
  C - 12
  D - 13
  E - 14
  F - 15

*/


// Converting from binary/hex to decimal
// * Also used to count in decimal
// * Formula
// * Find out what are we converting between
// * Assign each value to index
//   * Left to right starting with 0
// * Raise base to the current index
// * Take result and multiply by value at index
// * Sum results

/*

  * hex to decimal
  0xA1

  I         -     1       0
  Base^I    -     16^1   16^0
  Value     -     A(10)   1
  B^I *V    -     16 * 10   1 * 1
  Result    -     160     1
  Sum Results -   161



  * decimal to hex

  161 / 16 = 10 - r1
  10  / 16 = 0  - r10 <--
  add remainders - A(10) + 1  -> 0xA1

*/

// programmatic solution using powers
const hexChars = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

const hex1 = '0xF23C';

const hexToDecimal = (hexStr) => {
  // 0x F23C
  hexStr = hexStr.substring(2);
  // C32F
  hexStr = hexStr.split('').reverse().join('');

  let sum = 0;

  //
  for (let i = 0; i < hexStr.length; i++) {
    //
      if (hexChars[hexStr[i]]) {
          let num = Math.pow(16, i) * hexChars[hexStr[i]];
          sum += num;
      } else {
          let num = Math.pow(16, i) * parseInt(hexStr[i]);
          sum += num;
      }
  }

  return sum;
};

// console.log(hexToDecimal(hex1));// 62012


// Parse Int
// parseInt(string, radix)
// * hex to decimal
// console.log(parseInt(hex1, 16));// 62012

decimal = parseInt(hex1, 16)

// decimal.toString(radix)
// * decimal to hex
// console.log(decimal.toString(16));//f23c


console.log(String.fromCharCode(65)); // = A;
console.log(String.fromCharCode(66)); // = B;
console.log(String.fromCharCode(67)); // = C;


  // parseInt() -
  //   * binary -> decimal
  //   * hex    -> decimal
  // toString() -
  //   * decimal -> binary
  //   * decimal -> hex
