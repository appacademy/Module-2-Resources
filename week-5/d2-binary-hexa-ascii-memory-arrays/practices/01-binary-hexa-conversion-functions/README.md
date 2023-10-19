# Practice: Binary and Hexadecimal Conversion Functions

In this practice you will use the JavaScript built-in functions, `parseInt()`
and `toString()` to convert number bases of decimal, binary and hexadecimal.

## Set up

- Download the starter at the bottom of this page.
- Run `npm install` to install dependencies.
- Run `npm test` to run specs.
- Uncomment local specs to run local tests.

## Instructions

Expect to utilize documentation to improve your understanding of these methods:
- [`parseInt()` documentation][parseint-mdn]
- [`toString()` documentation][tostring-mdn]

Use these built-in JavaScript functions to implement the following conversion
functions:

### Using `toString()`

- `decimalToBinary(blob)`
    - Takes in a decimal argument and returns the equivalent binary string
    formatted to include `0b` prefix.
- `decimalToHexadecimal(blob)`
    - Takes in a decimal argument and returns the equivalent hexadecimal string
    formatted to include `0x` prefix.

### Using `parseInt()`

- `binaryToDecimal(blob)`
    - Takes in a binary string argument and returns the equivalent decimal
    number.
- `hexadecimalToDecimal(blob)`
    - Takes in a hexadecimal string argument and returns the equivalent decimal
    number.

## What you've learned

You have learned how to use `parseInt()` and `toString()` to change number
bases. You have converted between decimal and binary, and also between decimal and
hexadecimal.

[parseint-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[tostring-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
