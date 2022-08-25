const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let apple;

  beforeEach(() => {
    apple = new Word('apple');
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(apple).to.have.property('word')
    });

    it('should set the "word" property when a new word is created', function () {
      expect(apple.word !== undefined).to.be.true;
      expect(apple.word).to.equal('apple');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(apple.removeVowels()).to.equal('ppl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(apple.removeConsonants()).to.equal('ae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let banana = new Word('banana');
      expect(apple.pigLatin()).to.equal('appleyay');
      expect(banana.pigLatin()).to.equal('ananabay');
    });
  });
});
