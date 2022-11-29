const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let banana;
  let apple;

  beforeEach(() => {
    banana = new Word('banana');
    apple = new Word('apple');
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(banana).to.have.property('word');
      expect(apple).to.have.property('word')
    });

    it('should set the "word" property when a new word is created', function () {
      // let word1 = banana.word;
      // let word2 = apple.word;

      // let expected1 = 'banana';
      // let expected2 = 'apple';

      // expect(word1).to.equal(expected1);
      // expect(word2).to.equal(expected2);

      expect(banana.word).to.equal('banana');
      expect(apple.word).to.equal('apple');
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      expect(banana.removeVowels()).to.equal('bnn');
      expect(apple.removeVowels()).to.equal('ppl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(banana.removeConsonants()).to.equal('aaa');
      expect(apple.removeConsonants()).to.equal('ae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(banana.pigLatin()).to.equal('ananabay');
      expect(apple.pigLatin()).to.equal('appleyay');
    });
  });
});
