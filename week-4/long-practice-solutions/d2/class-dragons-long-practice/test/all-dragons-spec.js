const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { fileContainsClass } = require("./helpers");

// const problemModulePath = "../all-dragons";
const all_Dragons = require('../all-dragons');

const FriendlyDragon = require("../classes/friendly-dragon");
const EvilDragon = require("../classes/evil-dragon");
const Dragon = require("../classes/dragon");

describe("The all-dragons.js module file", () => {
  it("exports a variable `falkor`", () => {
    expect(all_Dragons).to.have.property('falkor');
  });

  it("exports a variable `smaug`", () => {
    expect(all_Dragons).to.have.property('smaug');
  });

  it("exports a variable `all_Dragons`", () => {
    expect(all_Dragons).to.have.property('all_Dragons');
  });

  if (FriendlyDragon && all_Dragons) {
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
        expect(all_Dragons.falkor).to.be.an.instanceof(FriendlyDragon);
      });
  
      it("should have the `name` property be set to `Falkor`", () => {
        expect(all_Dragons.falkor.name).to.equal(testFalkor.name);
      });
  
      it("should have the `color` property be set to `White`", () => {
        expect(all_Dragons.falkor.color).to.equal(testFalkor.color);
      });
  
      it("should have the `lifeGoals` property be set correctly for each value", () => {
        expect(all_Dragons.falkor.lifeGoals[0]).to.equal(
          testFalkor.lifeGoals[0]
        );
        expect(all_Dragons.falkor.lifeGoals[1]).to.equal(
          testFalkor.lifeGoals[1]
        );
        expect(all_Dragons.falkor.lifeGoals[2]).to.equal(
          testFalkor.lifeGoals[2]
        );
      });
  
      it("should have the `friend` property be set to `Bastian`", () => {
        expect(all_Dragons.falkor.friend).to.equal(testFalkor.friend);
      });
    });
  }
  if (EvilDragon && all_Dragons) {
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
        expect(all_Dragons.smaug).to.be.an.instanceof(EvilDragon);
      });
  
      it("should have the `name` property be set to `Falkor`", () => {
        expect(all_Dragons.smaug.name).to.equal(testSmaug.name);
      });
  
      it("should have the `color` property be set to `White`", () => {
        expect(all_Dragons.smaug.color).to.equal(testSmaug.color);
      });
  
      it("should have the `evilDoings` property be set correctly for each value", () => {
        expect(all_Dragons.smaug.evilDoings[0]).to.equal(
          testSmaug.evilDoings[0]
        );
        expect(all_Dragons.smaug.evilDoings[1]).to.equal(
          testSmaug.evilDoings[1]
        );
        expect(all_Dragons.smaug.evilDoings[2]).to.equal(
          testSmaug.evilDoings[2]
        );
      });
  
      it("should have the `nemesis` property be set to `Dwarf King`", () => {
        expect(all_Dragons.smaug.nemesis).to.equal(testSmaug.nemesis);
      });
    });
  }
  
  describe("all_Dragons", () => {
    it("returns the expected value", () => {
      const dragons = all_Dragons.all_Dragons;
  
      expect(dragons.length).to.equal(2);
      expect(dragons).to.deep.include(all_Dragons.falkor.name);
      expect(dragons).to.deep.include(all_Dragons.smaug.name);
    });
  });
});
