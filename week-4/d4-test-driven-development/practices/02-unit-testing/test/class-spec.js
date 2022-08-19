const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const word1 = new Word('apple');

      expect(word1).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      const word1 = new Word('banana');

      expect(word1.word).to.equal('banana');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const banana = new Word('banana');

      expect(banana.removeVowels()).to.equal('bnn');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const apple = new Word('apple');

      expect(apple.removeConsonants()).to.equal('ae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const apple = new Word('apple');
      const banana = new Word('banana');

      expect(apple.pigLatin()).to.equal('appleyay');
      expect(banana.pigLatin()).to.equal('ananabay');
    });
  });
});
