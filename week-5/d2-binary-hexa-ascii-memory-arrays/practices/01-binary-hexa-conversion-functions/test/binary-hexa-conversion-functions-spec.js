const { expect } = require('chai')

const {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
} =  require('../binary-hexa-conversion-functions')

describe('decimalToBinary: decimal to binary conversion', () => {
  let decimalArg;
  let binaryRes

  it('Convert 8 to 0b1000', () => {
      decimalArg = 8
      binaryRes = '0b1000'

      expect(decimalToBinary(decimalArg)).to.equal(binaryRes)
  })

  it('Convert 24 to 0b11000', () => {
      decimalArg = 24
      binaryRes = '0b11000'

      expect(decimalToBinary(decimalArg)).to.equal(binaryRes)
  })

  it('Convert 255 to 0b11111111', () => {
      decimalArg = 255
      binaryRes = '0b11111111'

      expect(decimalToBinary(decimalArg)).to.equal(binaryRes)
  })
})

describe('decimalToHexadecimal: decimal to hexadecimal conversion', () => {
  let decimalArg
  let hexadecimalRes

  it('Convert 8 to 0x8', () => {
      decimalArg = 8
      hexadecimalRes = '0x8'

      expect(decimalToHexadecimal(decimalArg)).to.equal(hexadecimalRes)
  })

  it('Convert 24 to 0x18', () => {
      decimalArg = 24
      hexadecimalRes = '0x18'

      expect(decimalToHexadecimal(decimalArg)).to.equal(hexadecimalRes)
  })

  it('Convert 255 to 0xff', () => {
      decimalArg = 255
      hexadecimalRes = '0xff'

      expect(decimalToHexadecimal(decimalArg)).to.equal(hexadecimalRes)
  })
})

describe('binaryToDecimal: binary to decimal conversion', () => {
  let binaryArg
  let decimalRes

  it('Convert 0b0011 to 3', () => {
      binaryArg = '0b0011'
      decimalRes = 3

      expect(binaryToDecimal(binaryArg)).to.equal(decimalRes)
  })

  it('Convert 0b1010 to 10', () => {
      binaryArg = '0b1010'
      decimalRes = 10

      expect(binaryToDecimal(binaryArg)).to.equal(decimalRes)
  })

  it('Convert 0b11110000 to 240', () => {
      binaryArg = '0b11110001'
      decimalRes = 241

      expect(binaryToDecimal(binaryArg)).to.equal(decimalRes)
  })
})

describe('hexadecimalToDecimal: hexadecimal to decimal conversion', () => {
  let hexadecimalArg
  let decimalRes

  it('Convert 0x23 to 35', () => {
      hexadecimalArg = '0x23'
      decimalRes = 35

      expect(hexadecimalToDecimal(hexadecimalArg)).to.equal(decimalRes)
  })

  it('Convert 0xa1 to 161', () => {
      hexadecimalArg = '0xa1'
      decimalRes = 161

      expect(hexadecimalToDecimal(hexadecimalArg)).to.equal(decimalRes)
  })

  it('Convert 0xff to 255', () => {
      hexadecimalArg = '0xff'
      decimalRes = 255

      expect(hexadecimalToDecimal(hexadecimalArg)).to.equal(decimalRes)
  })
})
