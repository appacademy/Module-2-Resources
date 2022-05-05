const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  // let newWord;

  // beforeEach(() => {
  //   newWord = new Word('computer')
  // })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const newWord = new Word('computer')

      expect(newWord).to.have.property('word')
      // expect(newWord).to.have.property('word')
      // expect(newWord.word).to.equal('computer')
    });

    it('should set the "word" property when a new word is created', function () {
      const newWord = new Word('banana')

      expect(newWord.word).to.equal('banana')
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word('dog')

      const result = newWord.removeVowels()

      expect(result).to.equal('dg')
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      newWord = new Word('car')

      const result = newWord.removeConsonants()
      // const result = newWord.arrayProperty[0].property

      expect(result).to.equal('a')
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newWord1 = new Word('banana')
      const newWord2 = new Word('able')

      const result1 = newWord1.pigLatin()
      const result2 = newWord2.pigLatin()

      expect(result1).to.equal('ananabay')
      expect(result2).to.equal('ableyay')
    });
  });
});
