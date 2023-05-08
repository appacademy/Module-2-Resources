const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let apple;
  let banana;

  beforeEach(() => {
    apple = new Word('apple');
    banana = new Word('banana');
  })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(apple).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(apple.word).to.equal('apple');
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      const expected1 = apple.removeVowels();
      const actual1 = 'ppl';

      const expected2 = banana.removeVowels();
      const actual2 = 'bnn';

      expect(expected1).to.equal(actual1);
      expect(expected2).to.equal(actual2);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(apple.removeConsonants()).to.equal('ae');
      expect(banana.removeConsonants()).to.equal('aaa');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(apple.pigLatin()).to.equal('appleyay');
      expect(banana.pigLatin()).to.equal('ananabay');
    });
  });

  describe("double() method", () => {

    it('should return the word doubled up', () => {
      expect(apple.double()).to.equal('appleapple');
      expect(banana.double()).to.equal('bananabanana');

    })
  });
});
