const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let newWord;

  beforeEach(function () {
    // runs before each test in this block
    newWord = new Word('anything');
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {

      // const newWord = new Word('anything');

      expect(newWord).to.have.property('word')
      // expect.fail("replace with your code");

    });

    it('should set the "word" property when a new word is created', function () {

      // expect.fail("replace with your code");
      //  const newWord = new Word('anything');

       expect(newWord.word).to.equal('anything');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      // expect.fail("replace with your code");
      // const newWord = new Word('anything');
      const result = newWord.removeVowels();
      expect(result).to.equal('nythng');

    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      // const newWord = new Word('anything');
      const result = newWord.removeConsonants();
      expect(result).to.equal('ai');


    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      const newWord = new Word('banana');
      const result = newWord.pigLatin();
      expect(result).to.equal('ananabay');

    });
  });
});
