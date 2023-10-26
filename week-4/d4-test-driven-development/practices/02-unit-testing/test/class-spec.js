const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let banana
  let apple

  beforeEach(() => {
    banana = new Word("banana")
    apple = new Word("apple")
  })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // const banana = new Word("banana")
      expect(banana).to.have.property("word")
    });

    it('should set the "word" property when a new word is created', function () {
      // const banana = new Word("banana")
      expect(banana.word).to.equal("banana")
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      // const apple = new Word("apple")
      // const banana = new Word("banana")
      expect(apple.removeVowels()).to.equal("ppl")
      expect(banana.removeVowels()).to.equal("bnn")
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(apple.removeConsonants()).to.equal("ae")
      expect(banana.removeConsonants()).to.equal("aaa")
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(apple.pigLatin()).to.equal("appleyay")
      expect(banana.pigLatin()).to.equal("ananabay")
    });
  });
});
