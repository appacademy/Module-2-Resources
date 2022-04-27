const { expect } = require('chai')

const {
    binaryToHexa,
    hexaToBinary,
    deciToAscii,
    binaryToAscii,
    hexaToAscii,
    asciiToDeci
} = require('../ascii-advanced-conversion-functions')

describe('binaryToHexa: binary to hexadecimal conversion', () => {
    let binaryArg;
    let hexadecimalRes

    it('Convert 0b1000 to 0x8', () => {
        binaryArg = '0b1000'
        hexadecimalRes = '0x8'

        expect(binaryToHexa(binaryArg)).to.equal(hexadecimalRes)
    })

    it('Convert 0b11000 to 0x18', () => {
        binaryArg = '0b11000'
        hexadecimalRes = '0x18'

        expect(binaryToHexa(binaryArg)).to.equal(hexadecimalRes)
    })

    it('Convert 0b11111111 to 0xff', () => {
        binaryArg = '0b11111111'
        hexadecimalRes = '0xff'

        expect(binaryToHexa(binaryArg)).to.equal(hexadecimalRes)
    })
})

describe('hexaToBinary: hexadecimal to binary conversion', () => {
    let hexadecimalArg
    let binaryRes

    it('Convert 0x8 to 0b1000', () => {
        hexadecimalArg = '0x8'
        binaryRes = '0b1000'

        expect(hexaToBinary(hexadecimalArg)).to.equal(binaryRes)
    })

    it('Convert 0x18 to 0b11000', () => {
        hexadecimalArg = '0x18'
        binaryRes = '0b11000'

        expect(hexaToBinary(hexadecimalArg)).to.equal(binaryRes)
    })

    it('Convert 0xff to 0b11111111', () => {
        hexadecimalArg = '0xff'
        binaryRes = '0b11111111'

        expect(hexaToBinary(hexadecimalArg)).to.equal(binaryRes)
    })
})

describe('deciToAscii: decimal to ASCII conversion', () => {
    let decimalArg
    let asciiRes

    it('Convert 68 to D', () => {
        decimalArg = 68
        asciiRes = 'D'

        expect(deciToAscii(decimalArg)).to.equal(asciiRes)
    })

    it('Convert 69 to E', () => {
        decimalArg = 69
        asciiRes = 'E'

        expect(deciToAscii(decimalArg)).to.equal(asciiRes)
    })

    it('Convert 70 to F', () => {
        decimalArg = 70
        asciiRes = 'F'

        expect(deciToAscii(decimalArg)).to.equal(asciiRes)
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

describe('hexaToAscii: hexadecimal to ASCII conversion', () => {
    let hexadecimalArg
    let asciiRes

    it('Convert 0x4A to J', () => {
        hexadecimalArg = '0x4A'
        asciiRes = 'J'

        expect(hexaToAscii(hexadecimalArg)).to.equal(asciiRes)
    })

    it('Convert 0x4B to K', () => {
        hexadecimalArg = '0x4B'
        asciiRes = 'K'

        expect(hexaToAscii(hexadecimalArg)).to.equal(asciiRes)
    })

    it('Convert 0x4C to L', () => {
        hexadecimalArg = '0x4C'
        asciiRes = 'L'

        expect(hexaToAscii(hexadecimalArg)).to.equal(asciiRes)
    })
})

describe('asciiToDeci: ASCII to decimal conversion', () => {
    let asciiArg
    let decimalRes

    it('Convert M to 77', () => {
        asciiArg = 'M'
        decimalRes = 77

        expect(asciiToDeci(asciiArg)).to.equal(decimalRes)
    })

    it('Convert N to 78', () => {
        asciiArg = 'N'
        decimalRes = 78

        expect(asciiToDeci(asciiArg)).to.equal(decimalRes)
    })

    it('Convert O to 79', () => {
        asciiArg = 'O'
        decimalRes = 79

        expect(asciiToDeci(asciiArg)).to.equal(decimalRes)
    })
})
