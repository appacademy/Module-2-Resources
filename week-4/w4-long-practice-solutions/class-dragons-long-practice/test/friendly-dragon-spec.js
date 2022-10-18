const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { fileContainsClass } = require("./helpers");

const phaseModulePath = "../classes/friendly-dragon.js";
const FriendlyDragon = require(phaseModulePath);

const filePath = path.resolve(__dirname, phaseModulePath);
const fileContainsClassResult = fileContainsClass(
  filePath,
  "FriendlyDragon"
);

describe("The classes/friendly-dragon.js module file", () => {
  it("does not export null or undefined", () => {
    expect(FriendlyDragon).to.not.be.null;
    expect(FriendlyDragon).to.not.deep.equal(undefined);
  });

  if (FriendlyDragon !== null) {
    it("and references the `FriendlyDragon` class", () => {
      expect(fileContainsClassResult).to.be.true;
    });
  }
});

describe("FriendlyDragon class", () => {
  it("should not be null", () => {
    expect(FriendlyDragon).to.not.be.null;
    expect(FriendlyDragon).to.not.deep.equal({});
  });


  it("should be a class", () => {
    expect(fileContainsClassResult).to.be.true;
  });

  it("is a child of the `Dragon` parent class", () => {
    const Dragon = require("../classes/dragon");
    expect(new FriendlyDragon()).to.be.an.instanceOf(Dragon);
  });

  it("has an instance method named `hasLifeGoals()`", () => {
    expect(FriendlyDragon.prototype.hasLifeGoals).to.not.be.undefined;
    expect(FriendlyDragon.prototype.hasLifeGoals).to.be.an("Function");
  });

  it("has an instance method named `helpsPeople()`", () => {
    expect(FriendlyDragon.prototype.helpsPeople).to.not.be.undefined;
    expect(FriendlyDragon.prototype.helpsPeople).to.be.an("Function");
  });

  if (FriendlyDragon !== null && fileContainsClassResult) {
    describe("constructor()", () => {
      const instance = new FriendlyDragon(
        "Puff",
        "green",
        [
          "lives by the sea",
          "frolick in the autumn mist",
          "help small children",
        ],
        "Jackie Paper"
      );

      it("initializes the `name` property from the provided argument value", () => {
        expect(instance.name).to.equal("Puff");
      });

      it("initializes the `color` property from the provided argument value", () => {
        expect(instance.color).to.equal("green");
      });

      it("initializes the `lifeGoals` property from the provided argument value", () => {
        expect(instance.lifeGoals[0]).to.equal("lives by the sea");
        expect(instance.lifeGoals[1]).to.equal("frolick in the autumn mist");
        expect(instance.lifeGoals[2]).to.equal("help small children");
      });

      it("initializes the `friend` property from the provided argument value", () => {
        expect(instance.friend).to.equal("Jackie Paper");
      });
    });
  }

  describe("hasLifeGoals()", () => {
    beforeEach(() => {
      sinon.stub(console, "log");
    });
  
    afterEach(() => {
      console.log.restore();
    });
  
  
    it("logs each life goal to the console", () => {
      const instance = new FriendlyDragon(
        "Puff",
        "green",
        [
          "live by the sea",
          "frolick in the autumn mist",
          "help small children",
        ],
        "Jackie Paper"
      );
  
      instance.hasLifeGoals();
  
      expect(console.log.calledThrice).to.be.true;
      expect(console.log.calledWith("Puff likes to live by the sea")).to.be
        .true;
      expect(
        console.log.calledWith("Puff likes to frolick in the autumn mist")
      ).to.be.true;
      expect(console.log.calledWith("Puff likes to help small children")).to
        .be.true;
    });
  });

  describe("helpsPeople()", () => {
    it("returns the expected value", () => {
      const instance = new FriendlyDragon(
        "Puff",
        "green",
        [
          "live by the sea",
          "frolick in the autumn mist",
          "help small children",
        ],
        "Jackie Paper"
      );
      expect(instance.helpsPeople()).to.equal(
        `${instance.name} helps their friend ${instance.friend}`
      );
    });
  });
});