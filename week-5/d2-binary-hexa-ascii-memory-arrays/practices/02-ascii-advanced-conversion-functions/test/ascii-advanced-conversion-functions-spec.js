const { expect } = require('chai')

const {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
} = require('../ascii-advanced-conversion-functions')

describe('binaryToHexadecimal: binary to hexadecimal conversion', () => {
  let binaryArg;
  let hexadecimalRes

  it('Convert 0b1000 to 0x8', () => {
      binaryArg = '0b1000'
      hexadecimalRes = '0x8'

      expect(binaryToHexadecimal(binaryArg)).to.equal(hexadecimalRes)
  })

  it('Convert 0b11000 to 0x18', () => {
      binaryArg = '0b11000'
      hexadecimalRes = '0x18'

      expect(binaryToHexadecimal(binaryArg)).to.equal(hexadecimalRes)
  })

  it('Convert 0b11111111 to 0xff', () => {
      binaryArg = '0b11111111'
      hexadecimalRes = '0xff'

      expect(binaryToHexadecimal(binaryArg)).to.equal(hexadecimalRes)
  })
})

describe('hexadecimalToBinary: hexadecimal to binary conversion', () => {
  let hexadecimalArg
  let binaryRes

  it('Convert 0x8 to 0b1000', () => {
      hexadecimalArg = '0x8'
      binaryRes = '0b1000'

      expect(hexadecimalToBinary(hexadecimalArg)).to.equal(binaryRes)
  })

  it('Convert 0x18 to 0b11000', () => {
      hexadecimalArg = '0x18'
      binaryRes = '0b11000'

      expect(hexadecimalToBinary(hexadecimalArg)).to.equal(binaryRes)
  })

  it('Convert 0xff to 0b11111111', () => {
      hexadecimalArg = '0xff'
      binaryRes = '0b11111111'

      expect(hexadecimalToBinary(hexadecimalArg)).to.equal(binaryRes)
  })
})

describe('decimalToAscii: decimal to ASCII conversion', () => {
  let decimalArg
  let asciiRes

  it('Convert 68 to D', () => {
      decimalArg = 68
      asciiRes = 'D'

      expect(decimalToAscii(decimalArg)).to.equal(asciiRes)
  })

  it('Convert 69 to E', () => {
      decimalArg = 69
      asciiRes = 'E'

      expect(decimalToAscii(decimalArg)).to.equal(asciiRes)
  })

  it('Convert 70 to F', () => {
      decimalArg = 70
      asciiRes = 'F'

      expect(decimalToAscii(decimalArg)).to.equal(asciiRes)
  })
})


describe('binaryToAscii: binary to ASCII conversion', () => {
  let binaryArg
  let asciiRes

  it('Convert 0b01000101 to G', () => {
      binaryArg = '0b01000111'
      asciiRes = 'G'

      expect(binaryToAscii(binaryArg)).to.equal(asciiRes)
  })

  it('Convert 0b01001000 to H', () => {
      binaryArg = '0b01001000'
      asciiRes = 'H'

      expect(binaryToAscii(binaryArg)).to.equal(asciiRes)
  })

  it('Convert 0b01001001 to I', () => {
      binaryArg = '0b01001001'
      asciiRes = 'I'

      expect(binaryToAscii(binaryArg)).to.equal(asciiRes)
  })
})

describe('hexadecimalToAscii: hexadecimal to ASCII conversion', () => {
  let hexadecimalArg
  let asciiRes

  it('Convert 0x4A to J', () => {
      hexadecimalArg = '0x4A'
      asciiRes = 'J'

      expect(hexadecimalToAscii(hexadecimalArg)).to.equal(asciiRes)
  })

  it('Convert 0x4B to K', () => {
      hexadecimalArg = '0x4B'
      asciiRes = 'K'

      expect(hexadecimalToAscii(hexadecimalArg)).to.equal(asciiRes)
  })

  it('Convert 0x4C to L', () => {
      hexadecimalArg = '0x4C'
      asciiRes = 'L'

      expect(hexadecimalToAscii(hexadecimalArg)).to.equal(asciiRes)
  })
})

describe('asciiToDecimal: ASCII to decimal conversion', () => {
  let asciiArg
  let charCodes

  it('Convert "There" to an array of decimal char codes', () => {
      asciiArg = 'There'
      charCodes = [ 84, 104, 101, 114, 101 ]

      expect(asciiToDecimal(asciiArg)).to.have.ordered.members(charCodes)
  })

  it('Convert "is" to an array of decimal char codes', () => {
      asciiArg = 'is'
      charCodes = [ 105, 115 ]

      expect(asciiToDecimal(asciiArg)).to.have.ordered.members(charCodes)
  })

  it('Convert "no" to an array of decimal char codes', () => {
      asciiArg = 'no'
      charCodes = [ 110, 111 ]

      expect(asciiToDecimal(asciiArg)).to.have.ordered.members(charCodes)
  })

  it('Convert "spoon." to an array of decimal char codes', () => {
      asciiArg = 'spoon.'
      charCodes = [ 115, 112, 111, 111, 110, 46 ]

      expect(asciiToDecimal(asciiArg)).to.have.ordered.members(charCodes)
  })
})
