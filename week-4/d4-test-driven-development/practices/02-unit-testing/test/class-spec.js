const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const word = new Word("Alec Venida");
      expect(word).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const word = new Word("Alec Venida");
      expect(word.word).to.equal("Alec Venida");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const word1 = new Word("Shane");
      const word2 = new Word("apple");

      const res1 = word1.removeVowels();
      const res2 = word2.removeVowels();

      expect(res1).to.equal("Shn");
      expect(res2).to.equal("ppl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const word1 = new Word("Shane");
      const word2 = new Word("apple");

      const res1 = word1.removeConsonants();
      const res2 = word2.removeConsonants();

      expect(res1).to.equal("ae");
      expect(res2).to.equal("ae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const word1 = new Word("banana");
      const word2 = new Word("able");

      const res1 = word1.pigLatin();
      const res2 = word2.pigLatin();

      expect(res1).to.equal("ananabay");
      expect(res2).to.equal("ableyay");
    });
  });
});
