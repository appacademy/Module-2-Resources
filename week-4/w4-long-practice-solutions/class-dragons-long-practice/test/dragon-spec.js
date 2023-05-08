const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const { fileContainsClass } = require("./helpers");

const problemModulePath = "../classes/dragon.js";
const Dragon = require(problemModulePath);

const filePath = path.resolve(__dirname, problemModulePath);
const fileContainsClassResult = fileContainsClass(filePath, "Dragon");

describe("Dragon class", () => {
  it("should not be null", () => {
    expect(Dragon).to.not.be.null;
  });

  it("should be a class", () => {
    expect(fileContainsClassResult).to.be.true;
  });

  it("has an instance method named `breathesFire()`", () => {
    expect(Dragon.prototype.breathesFire).to.not.be.undefined;
    expect(Dragon.prototype.breathesFire).to.be.an("Function");
  });

  it("has a static method named `getDragons()`", () => {
    expect(Dragon.getDragons).to.not.be.undefined;
    expect(Dragon.getDragons).to.be.an("Function");
  });

  if (Dragon !== null && fileContainsClassResult) {
    describe("constructor()", () => {
      const instance = new Dragon("Puff", "green");

      it("initializes the `name` property from the provided argument value", () => {
        expect(instance.name).to.equal("Puff");
      });

      it("initializes the `color` property from the provided argument value", () => {
        expect(instance.color).to.equal("green");
      });
    });
  }

  describe("breathesFire()", () => {
    it("returns the expected value", () => {
      const instance = new Dragon("Puff", "green");
      expect(instance.breathesFire()).to.equal(
        `${instance.name} breathes fire everywhere! BURN!!!!`
      );
    });
  });

  describe("static getDragons()", () => {
    it("returns the expected value", () => {
      const instance2 = new Dragon("Puff", "green");
      const instance3 = new Dragon("Toothless", "black");
      const dragons = Dragon.getDragons(instance2, instance3);
      expect(dragons.length).to.equal(2);
      expect(dragons).to.deep.include(instance2.name);
      expect(dragons).to.deep.include(instance3.name);
    });
  });
});


