const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { fileContainsClass } = require("./helpers");

const problemModulePath = "../all-dragons";
const solution = require(problemModulePath);

const FriendlyDragon = require("../classes/friendly-dragon");
const EvilDragon = require("../classes/evil-dragon");
const Dragon = require("../classes/dragon");

describe("The all-dragons.js module file", () => {
  it("exports a variable `falkor`", () => {
    expect(solution).to.have.property('falkor');
  });

  it("exports a variable `smaug`", () => {
    expect(solution).to.have.property('smaug');
  });

  it("exports a variable `allDragons`", () => {
    expect(solution).to.have.property('allDragons');
  });

  if (FriendlyDragon && solution) {
    describe("falkor", () => {
      const testFalkor = new FriendlyDragon(
        "Falkor",
        "white",
        [
          "save Atreyu from the swamp",
          "save Atreyu from the Nothing",
          "scare the local bullies into a dumpster",
        ],
        "Bastian"
      );
  
      it("should be an instance of the `FriendlyDragon` class", () => {
        expect(solution.falkor).to.be.an.instanceof(FriendlyDragon);
      });
  
      it("should have the `name` property be set to `Falkor`", () => {
        expect(solution.falkor.name).to.equal(testFalkor.name);
      });
  
      it("should have the `color` property be set to `White`", () => {
        expect(solution.falkor.color).to.equal(testFalkor.color);
      });
  
      it("should have the `lifeGoals` property be set correctly for each value", () => {
        expect(solution.falkor.lifeGoals[0]).to.equal(
          testFalkor.lifeGoals[0]
        );
        expect(solution.falkor.lifeGoals[1]).to.equal(
          testFalkor.lifeGoals[1]
        );
        expect(solution.falkor.lifeGoals[2]).to.equal(
          testFalkor.lifeGoals[2]
        );
      });
  
      it("should have the `friend` property be set to `Bastian`", () => {
        expect(solution.falkor.friend).to.equal(testFalkor.friend);
      });
    });
  }
  if (EvilDragon && solution) {
    context("smaug", () => {
      const testSmaug = new EvilDragon(
        "Smaug",
        "black",
        [
          "take over your mountain kingdom",
          "steal all your dwarven gold",
          "burn down your floating village",
        ],
        "Dwarf King"
      );
  
      it("should be an instance of the `EvilDragon` class", () => {
        expect(solution.smaug).to.be.an.instanceof(EvilDragon);
      });
  
      it("should have the `name` property be set to `Falkor`", () => {
        expect(solution.smaug.name).to.equal(testSmaug.name);
      });
  
      it("should have the `color` property be set to `White`", () => {
        expect(solution.smaug.color).to.equal(testSmaug.color);
      });
  
      it("should have the `evilDoings` property be set correctly for each value", () => {
        expect(solution.smaug.evilDoings[0]).to.equal(
          testSmaug.evilDoings[0]
        );
        expect(solution.smaug.evilDoings[1]).to.equal(
          testSmaug.evilDoings[1]
        );
        expect(solution.smaug.evilDoings[2]).to.equal(
          testSmaug.evilDoings[2]
        );
      });
  
      it("should have the `nemesis` property be set to `Dwarf King`", () => {
        expect(solution.smaug.nemesis).to.equal(testSmaug.nemesis);
      });
    });
  }
  
  describe("allDragons", () => {
    it("returns the expected value", () => {
      const dragons = solution.allDragons;
  
      expect(dragons.length).to.equal(2);
      expect(dragons).to.deep.include(solution.falkor.name);
      expect(dragons).to.deep.include(solution.smaug.name);
    });
  });
});