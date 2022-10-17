const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word3;

  this.beforeEach(() => {
    word3 = new Word("SomethingCool")
  })

  word4 = new Word("SomethingCoolTwo");
  
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let word1 = new Word("arst");
      expect(word1).to.have.property("word");
      expect(word3).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      let word1 = new Word("arst");
      expect(word1.word).to.equal("arst");
      expect(word3.word).to.equal("SomethingCool");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word1 = new Word("arst");
      let vowelless = word1.removeVowels();

      expect(vowelless).to.equal("rst");

      let vowelless2 = word3.removeVowels();

      expect(vowelless2).to.equal("SmthngCl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word1 = new Word("arst");
      let consonantless = word1.removeConsonants();

      expect(consonantless).to.equal("a");

      let consonantless2 = word3.removeConsonants();

      expect(consonantless2).to.equal("oeioo");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word1 = new Word("arst");
      let pig = word1.pigLatin();

      expect(pig).to.equal("arstyay");

      let word2 = new Word("rusty");
      let pig2 = word2.pigLatin();

      expect(pig2).to.equal("ustyray");
    });
  });


  describe("removeVowels function2", function () {
    it("should return a the word with all vowels removed2", function () {

      let vowelless = word3.removeVowelsX();

      expect(vowelless).to.equal("SmthngCl");

      let vowelless2 = word4.removeVowelsX();

      expect(vowelless2).to.equal("SmthngClTw");
    });
  });

  describe("removeConsonants function2", function () {
    it("should return the word with the consonants removed2", function () {
      let constless3 = word3.removeConsonantsX();

      expect(constless3).to.equal("oeioo");

      let constless4 = word4.removeConsonantsX();

      expect(constless4).to.equal("oeiooo");
    });
  });

});
