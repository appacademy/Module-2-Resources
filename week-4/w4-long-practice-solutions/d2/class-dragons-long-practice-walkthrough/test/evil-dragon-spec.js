const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { fileContainsClass } = require("./helpers");

const phaseModulePath = "../classes/evil-dragon.js";
const EvilDragon = require(phaseModulePath);

const filePath = path.resolve(__dirname, phaseModulePath);
const fileContainsClassResult = fileContainsClass(filePath, "EvilDragon");

describe("The classes/evil-dragon.js module file", () => {
  it("does not export null or undefined", () => {
    expect(EvilDragon).to.not.be.null;
    expect(EvilDragon).to.not.deep.equal(undefined);
  });

  if (EvilDragon !== null) {
    it("and references the `EvilDragon` class", () => {
      expect(fileContainsClassResult).to.be.true;
    });
  }
});

describe("EvilDragon class", () => {
  it("should not be null", () => {
    expect(EvilDragon).to.not.be.null;
    expect(EvilDragon).to.not.deep.equal({});
  });

  it("should be a class", () => {
    expect(fileContainsClassResult).to.be.true;
  });

  it("is a child of the `Dragon` parent class", () => {
    const Dragon = require("../classes/dragon");
    expect(new EvilDragon()).to.be.an.instanceOf(Dragon);
  });

  it("has an instance method named `dontInviteThemOverForDinner()`", () => {
    expect(EvilDragon.prototype.dontInviteThemOverForDinner).to.not.be
      .undefined;
    expect(EvilDragon.prototype.dontInviteThemOverForDinner).to.be.an(
      "Function"
    );
  });

  it("has an instance method named `burnsNemesis()`", () => {
    expect(EvilDragon.prototype.burnsNemesis).to.not.be.undefined;
    expect(EvilDragon.prototype.burnsNemesis).to.be.an("Function");
  });

  if (EvilDragon !== null && fileContainsClassResult) {
    describe("constructor()", () => {
      const instance = new EvilDragon(
        "Ender Dragon",
        "black",
        [
          "spit a fireball at Steve",
          "rule over all the Endermen",
          "destroy all blocks in its way",
        ],
        "Steve"
      );

      it("initializes the `name` property from the provided argument value", () => {
        expect(instance.name).to.equal("Ender Dragon");
      });

      it("initializes the `color` property from the provided argument value", () => {
        expect(instance.color).to.equal("black");
      });

      it("initializes the `evilDoings` property from the provided argument value", () => {
        expect(instance.evilDoings[0]).to.equal("spit a fireball at Steve");
        expect(instance.evilDoings[1]).to.equal("rule over all the Endermen");
        expect(instance.evilDoings[2]).to.equal(
          "destroy all blocks in its way"
        );
      });

      it("initializes the `nemesis` property from the provided argument value", () => {
        expect(instance.nemesis).to.equal("Steve");
      });
    });
  }

  describe("dontInviteThemOverForDinner()", () => {

    beforeEach(() => {
      sinon.stub(console, "log");
    });

    afterEach(() => {
      console.log.restore();
    });

    it("logs each evil doing to the console", () => {        
      const instance = new EvilDragon(
        "Ender Dragon",
        "black",
        [
          "spit a fireball at Steve",
          "rule over all the Endermen",
          "destroy all blocks in its way",
        ],
        "Steve"
      );

      instance.dontInviteThemOverForDinner();

      expect(console.log.calledThrice).to.be.true;
      expect(
        console.log.calledWith("Ender Dragon will spit a fireball at Steve")
      ).to.be.true;
      expect(
        console.log.calledWith("Ender Dragon will rule over all the Endermen")
      ).to.be.true;
      expect(
        console.log.calledWith(
          "Ender Dragon will destroy all blocks in its way"
        )
      ).to.be.true;        
    });
  });

  describe("burnsNemesis()", () => {
    it("returns the expected value", () => {
      const instance = new EvilDragon(
        "Ender Dragon",
        "black",
        [
          "spit a fireball at Steve",
          "rule over all the Endermen",
          "destroy all blocks in its way",
        ],
        "Steve"
      );
      expect(instance.burnsNemesis()).to.equal(
        `${instance.name} destroys ${instance.nemesis} with fire! WHOOOSH!!!`
      );
    });
  });
});