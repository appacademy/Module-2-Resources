const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const newWord = new Word("Jeff");

      expect(newWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const newWord = new Word("Fava");

      expect(newWord.word).to.equal("Fava");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word("Pikachu");

      const res = newWord.removeVowels();

      expect(res).to.equal("Pkch");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = new Word("Celtics");

      const res = newWord.removeConsonants();

      expect(res).to.equal("ei");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newWord1 = new Word("banana"); // ananabay
      const newWord2 = new Word("able"); // ableyay

      const res1 = newWord1.pigLatin();
      const res2 = newWord2.pigLatin();

      expect(res1).to.equal("ananabay");
      expect(res2).to.equal("ableyay");
    });
  });
});
