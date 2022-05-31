# Intro To Number Bases: Binary, Decimal, and Hexadecimal

There are 10 types of people in this world: those who can read binary and
those who can't. After this reading, you will be able to:

- Understand core concepts of binary
- Explore conversion of decimal, binary, hexadecimal, and ASCII values
- Use built-in JavaScript conversion methods

## Base-10: Decimal

You already know this one. Everyone learns to count in base-10 from an early
age. The "base" refers to how many digits there are in the counting system:
0-9 in this case. Once you get to the last digit, you simply increment the
next digit to the left by one and start the first digit from 0.

```plaintext
00
01
02
03
04
05
06
07
08
09
10
11
12
```

This pattern continues for each digit in the number. So, when you count up one
from 99, the right-most digit returns to 0, and the next, a 9, increases by 1,
which returns it to 0 and the next digit increments from 0 to 1, resulting in
the number 100. Easy, right? Keep this pattern in mind because it's the same
for every number base.

## Base-2: Binary

Binary is another word for base-2. In this base, there are only two digits: 0
and 1. You may have heard the phrase, "computers are all 1s and 0s," which is
relevant because all values on a computer are stored in base-2.

You may be familiar with the word _bits_ which is short for "binary digits". A
group of 8 bits is also known as a _byte_. (More on this later.)

So how does counting in binary work? Turns out, exactly the same as counting
in decimal. Let's count to five in binary:

```plaintext
0000 (0)
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8)
```

0 and 1 are the same in base-2 as base-10 but then it runs out of digits. So,
the right-most digit returns to 0 and the digit to the left increments by 1,
the right-most digit returns to 0, and the digit to the left increments by 1,
which is why the number 2 in binary is 10. (Now you can understand the joke at
the start of this reading!) This pattern continues as you count upward.

To avoid confusion, binary numbers are often represented with 0b at the
beginning: So the number 8 in binary would be written as 0b1000 to
differentiate from the decimal value 1000 which is one thousand.

## Translating from binary to decimal

It's possible to translate from binary to a decimal using a simple formula.

Take the base-10 number, 1234. How do you know what amount this represents?
You can use this formula:

> Multiply each digit by the number base raised to the nth power, where n is
> its position starting from the right. Then, add all of the results together

The right-most digit is position 0, base 10 and value 4, or
<code>10<sup>0</sup> \* 4</code>. 10 to the power of 0 is 1, so this equals
`4 * 1` or just `4`.

The next digit is position 1, base 10 and value 3,
<code>10<sup>1</sup> \* 3</code>, which equals `10 * 3` or `30`. The last two
are <code>10<sup>2</sup> \* 2 = 100 \* 2 = 200</code> and
<code>10<sup>3</sup> \* 1 = 1000 \* 1 = 1000</code>. Adding all of these up
gives `4 + 30 + 200 + 1000 = 1234`.

Once again, this exact formula works for binary. Consider the binary number,
`0b11001010`. The base is 2, so plugging in values gives:

<pre lang="plaintext"><code>2<sup>0</sup> * 0 =   1 * 0 = 0
2<sup>1</sup> * 1 =   2 * 1 = 2
2<sup>2</sup> * 0 =   4 * 0 = 0
2<sup>3</sup> * 1 =   8 * 1 = 8
2<sup>4</sup> * 0 =  16 * 0 = 0
2<sup>5</sup> * 0 =  32 * 0 = 0
2<sup>6</sup> * 1 =  64 * 1 = 64
2<sup>7</sup> * 1 = 128 * 1 = 128</code></pre>

Adding these up gives `2 + 8 + 64 + 128 = 202`. So, `0b11001010` in binary is
equal to `202` in decimal. You can verify this by typing `0b11001010` into
your JavaScript console, which will return the decimal value.

## Base-16: Hexadecimal

The third common number base in computer science is base-16, or hexadecimal
(hex is 6, dec is 10). The digits are 0-9 with A, B, C, D, E, and F
representing 10, 11, 12, 13, 14, and 15, respectively. Hexadecimal numbers
(sometimes called 'hex' for short) are prepended with an `0x` to differentiate
them as base-16.

Hexadecimal is often used as shorthand for representing binary values: one hex
digit can represent four bits.

```plaintext
 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
```

You can use the same formula to translate from hexadecimal to decimal as from
binary. Take the hex number `0xF23C`. What is the decimal value?

<pre lang="plaintext"><code>16<sup>0</sup> * C =    1 * 12 = 12
16<sup>1</sup> * 3 =   16 *  3 = 48
16<sup>2</sup> * 2 =  256 *  2 = 512
16<sup>3</sup> * F = 4096 * 15 = 61440</code></pre>

Adding these values up `61440 + 512 + 48 + 12` returns `62012` which you can
verify in the JavaScript console.

## Bytes, kilobytes, megabytes, gigabytes, terabytes

Binary digits are called _bits_. If you recall, one _byte_ is equivalent to
eight _bits_. A kilobyte is equivalent to one thousand bytes, a megabyte is one
million bytes, a gigabyte is one billion bytes, and so on.

```plaintext
kilo - thousand
mega - million
giga - billion
tera - trillion
peta - quadrillion
exa - quintillion
zetta - sextillion
yotta - septillion
```


## Representing letters in binary

So far you've seen how to represent any type of integer in binary. Since
computers are all 1s and 0s, this is important. What about other data types,
like letters/characters?

To represent characters, each byte value is matched up with a
character according to a standard encoding. The most common English standard
is ASCII, which stands for "American Standard Code for Information
Interchange".

![ASCII Table][ascii-table]

Here, you can see the mapping between characters and byte values. So, the
string "ABC" would be stored in memory as `1000 0001 1000 0010 1000 0011`,
requiring three bytes of memory.

Using more bytes, even more characters can be represented: The
[Unicode][unicode] standard includes over 100 thousand characters, including
those in different languages and even emoji.

## Built-in JavaScript conversion methods

There are several built-in JavaScript conversion methods can be used for
converting binary. Each one has its specific use cases.

### String.fromCharCode()

You can return a string from the specified sequence of UTF-16 code units by
using the [`String.fromCharCode()`][fromchar-mdn] method.


```javascript
String.fromCharCode(65); // A;
String.fromCharCode(66); // B;
String.fromCharCode(67); // C;
```

### String.protoype.charCodeAt()

You can also return an integer between 0 and 65536 representing the UTF-16 code
unit at a given index with the [`String.prototype.charCodeAt()`][charcodeat-mdn] method.


```javascript
const str = 'ABC';
const str = 'ABC';
str.charCodeAt(0); // 65
str.charCodeAt(1); // 66
str.charCodeAt(2); // 67
```

### Convert binary and hexadecimal to base 10 and back

The [`parseInt()`][parseint-mdn] function parses a string argument and returns an Base-10
integer.

```javascript
parseInt('a1', 16);  // 161
parseInt(`1011`, 2); // 13
```

The [`toString()`][tostring-mdn] method can be used to convert the Base-10 number to its
respective binary and hexadecimal values.

```javascript
const decimal = parseInt('a1', 16); // 161
const hexadecimal = decimal.toString(16); // 'a1'
const binary = decimal.toString(2) // '10100001'
```

## What you've learned

In this reading, you've learned how numbers can be represented in different
bases, including base-10 (decimal), base-2 (binary) and base-16 (hexadecimal).
You've also learned how different values like letters can be represented in
binary, and how to use built-in JavaScript conversion methods to manipulate those
binary values.

[unicode]: https://en.wikipedia.org/wiki/List_of_Unicode_characters
[ascii-table]: https://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg
[parseint-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[tostring-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
[fromchar-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
[charcodeat-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
