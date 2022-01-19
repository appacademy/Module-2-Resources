# Binary, number base practice

In this exercise, translate the following values into the appropriate number base

## Manual conversion

Solve these problems without using functions or methods.

## Binary to base 10

<!--
2^0 * 0 = 0
2^1 * 1 = 2
2^3 * 0 = 0
2^4 * 1 = 8
-->
1. 0b1010 = 8 + 2 = 10

<!--
2^0 * 1 = 1
2^1 * 1 = 2
-->
2. 0b0011 = 1 + 2 = 3

## Binary to hexadecimal

<!-- 10 in decimal
 -->
1. 0b1010 = 0xa

<!-- 3 in decimal -->
2. 0b0011 = 0x3

## Hexadecimal to base 10

<!--
16^0 * 1 = 1
16^1 * a(10) = 160
 -->
1. 0xa1 = 161

<!-- ff- -->

2. 0xff = 255

## Hexadecimal to binary

<!-- 161 in decimal
161/2 = 80 r1   <--- least significant bit
80/2 = 40 r0
40/2 = 20 r0
20/2 = 10 r0
10/2 = 5 r0
5/2 = 2 r1
2/2 = 1 r0
1/2 = 0 r1 <--- most significant bit
 -->
1. 0xa1 = 0b10100001

<!-- 0100 -->
2. 0xff = 0b11111111

## Base 10 to binary

<!--
8/2 = 4 r0
4/2 = 2 r0
2/2 = 1 r0
1/2 = 0 r1
-->
1. 8 = 0b1000

<!--
24/2 = 12 r0
12/2 = 6 r0
6/2 = 3 r0
3/2 = 1 r1
1/2 = 0 r1
 -->
2. 24 = 0b11000
3. 255 = 0b11111111

## Base 10 to hexadecimal

<!--
8/16 = 0 r8
 -->
1. 8 = 0x8

<!--
24/16 = 1 r8
1/16 = 0 r1
 -->
2. 24 = 0x18
3. 255 = 0xff


## Method conversions in Javascript

Solve these problems with built-in JavaScript methods.

## Base 10 to ASCII

1. 65 = String.fromCharCode(65) = 'A'
2. 66 = String.fromCharCode(66) = 'B'
3. 97 = String.fromCharCode(97) = 'a'
4. 98 = String.fromCharCode(98) = 'b'

## Hexadecimal to ASCII

1. 0x41 = String.fromCharCode(parseInt(0x41)) = 'A'
2. 0x42 = String.fromCharCode(0x42) = 'B'
3. 0x61 = String.fromCharCode(0x61) = 'a'
4. 0x62 = String.fromCharCode(0x62) = 'b'

## Binary to ASCII

1. 0b01000001 = String.fromCharCode(0b01000001) = 'A'
2. 0b01000010 = String.fromCharCode(0b01000010) = 'B'
3. 0b01100001 = String.fromCharCode(0b01100001) = 'a'
4. 0b01100010 = String.fromCharCode(0b01100010) = 'b'
