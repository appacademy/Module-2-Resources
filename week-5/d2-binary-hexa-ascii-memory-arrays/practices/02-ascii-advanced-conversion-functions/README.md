# Practice: ASCII and Advanced Conversion Functions

In this practice you will use the JavaScript built-in functions,
`String.fromCharCode()` and `charCodeAt()` to convert ASCII. You will also use
the `parseInt()` and `toString()` to convert number bases of binary to
hexadecimal and vice versa.

## Set up

- Download the starter at the bottom of this page.
- Run `npm install` to install dependencies.
- Run `npm test` to run specs.
- Uncomment local specs to run local tests.

## Instructions

Expect to utilize documentation to improve your understanding of these methods:

- [`parseInt()` documentation][parseint-mdn]
- [`toString()` documentation][tostring-mdn]
- [`String.fromCharCode()` documentation][fromcharcode-mdn]
- [`charCodeAt()` documentation][charcodeat-mdn]

Use these built-in JavaScript functions to implement the following conversion
functions:

### Using `parseInt()` and `toString()`

- `binaryToHexadecimal(blob)`
    - Takes in a binary string argument and returns the equivalent hexadecimal
    string formatted to include `0x` prefix.
    - The first step will be to convert to a decimal using `parseInt()`

- `hexadecimalToBinary(blob)`
    - Takes in a hexadecimal string argument and returns the equivalent binary
    string formatted to include `0b` prefix.
    - The first step will be to convert to a decimal using `parseInt()`

### Using `String.fromCharCode()`

- `decimalToAscii(blob)`
    - Takes in a decimal number and returns the equivalent ASCII character.
- `binaryToAscii(blob)`
    - Takes in a binary string and returns the equivalent ASCII character.
- `hexadecimalToAscii(blob)`
    - Takes in a hexadecimal string and returns the equivalent ASCII character.

### Using `charCodeAt()`

- `asciiToDecimal(blob)`
    - Takes in a string and returns an array of decimal char codes that
    represents each character.

## What you've learned

You have learned how to use `String.fromCharCode()` and `charCodeAt()` to
change a number to its equivalent ASCII character. You have also utilized
`parseInt()` and `toString()` to handle multi-step conversions of binary to
hexadecimal and hexadecimal to binary.


[fromcharcode-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
[charcodeat-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
[parseint-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[tostring-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
