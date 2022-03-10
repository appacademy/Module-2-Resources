const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Dog = require("../problems/03-make-dog.js");

describe("Dog", function () {
  describe("static makeJet()", () => {
    it("should return an object with a name property and speak and changeName functions", function () {
      const dog1 = Dog.makeJet();
  
      assert.deepEqual(dog1.name, "Jet");
      expect(dog1.speak).to.be.a("function");
      expect(dog1.changeName).to.be.a("function");
    });
  })

  describe("changeName()", () => {
    it("should allow you to change the dog's name", function () {
      const dog1 = Dog.makeJet();
      const dog2 = Dog.makeJet();
      dog1.changeName("Freyja");

      expect(dog1.name).to.equal("Freyja");
      expect(dog2.name).to.equal("Jet");
    });
  });

  describe("speak()", () => {
    it("should intake a word and return the name of the current dog saying that word", function () {
      const dog1 = Dog.makeJet();
      const dog2 = Dog.makeJet();
      dog1.changeName("Freyja");

      expect(dog1.speak("hi")).to.equal("Freyja says hi");
      expect(dog2.speak("hi")).to.equal("Jet says hi");
    });
  });
});
