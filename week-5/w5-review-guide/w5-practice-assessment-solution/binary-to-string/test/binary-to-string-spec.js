const assert = require('assert');

const binaryToString = require('../problems/binary-to-string.js');

describe('binaryToString converter', function() {


  it("translates 'A'", function() {

    let result = binaryToString('01000001');
    assert.strictEqual(result, 'A');
  });

  it("translates '123'", function() {

    let result = binaryToString('001100010011001000110011');
    assert.strictEqual(result, '123');
  });

  it("translates 'App Academy'", function() {

    let result = binaryToString('0100000101110000011100000010000001000001011000110110000101100100011001010110110101111001');
    assert.strictEqual(result, 'App Academy');
  });

  it("translates 'Hello, world!'", function() {

    let result = binaryToString('01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001');
    assert.strictEqual(result, 'Hello, world!');
  });

  it("translates 'Computer Science'", function() {

    let result = binaryToString('01000011011011110110110101110000011101010111010001100101011100100010000001010011011000110110100101100101011011100110001101100101');
    assert.strictEqual(result, 'Computer Science');
  });

  it("translates 'She sells seashells by the seashore.'", function() {

    let result = binaryToString('010100110110100001100101001000000111001101100101011011000110110001110011001000000111001101100101011000010111001101101000011001010110110001101100011100110010000001100010011110010010000001110100011010000110010100100000011100110110010101100001011100110110100001101111011100100110010100101110');
    assert.strictEqual(result, 'She sells seashells by the seashore.');
  });

});
