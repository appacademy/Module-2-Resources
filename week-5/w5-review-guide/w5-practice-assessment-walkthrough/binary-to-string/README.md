# Sprint 5, Part 9 Practice Problems

## Setup

1. Download the starter using the green button below
2. Rename the folder to `firstname-lastname-sprint-5-pt-9-practice-problems`. For
   example, if your name is "Jane Doe", then name your folder
   `jane-doe-sprint-5-pt-9-practice-problems`
3. Run `npm install` to install dependencies
4. Run `npm test` to run test specs
5. Your objective is to implement the functions in `/problems` to pass all
   specs.

## Binary to String

Fill out the function `binaryToString()` which takes in a binary string (all
1s and 0s) and returns the string translated to ASCII.

```js
binaryToString('010000010100001001000011');  // Returns 'ABC'
```

This example string returns 'ABC' because the 8 bit values '01000001',
'01000010' and '01000011' translate to the base-10 values of 65, 66 and 67,
which translate to the ASCII values of 'A', 'B' and 'C'.

1. The length of all input strings will be multiples of 8 and contain only 1s
   and 0s.
2. You are allowed to use built-in JavaScript functions like
   [`String.fromCharCode()`][fromcharcode-mdn].

### Binary to String Hints

1. It will be helpful to separate this task into steps:
   -  Split the full string into 8-bit strings.
   -  Convert the strings to integers.
   -  Convert the integers to ASCII characters.
   -  Then join the characters into a return string.
2. Testing each step in isolation will help keep your code organized and avoid
   errors.
3. You may find [`parseInt()`][parseint-mdn] helpful.

Note there are local tests to verify your work.

Run specs for this section with:

```bash
npm test test/binary-to-string-spec.js
```

[fromcharcode-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
[parseint-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt