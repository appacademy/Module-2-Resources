const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Dog = require('../classes/dog');

describe("Dog", () => {
  let consoleSpy;
  let sammy;

  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
    sammy = new Dog('Sammy', 15);
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  describe("constructor(name, age)", () => {
    it("should initialize the name property to be set to the given name", () => {
      expect(sammy.name).to.eq('Sammy');
    });

    it("should initialize the age property to be set to the given age", () => {
      expect(sammy.age).to.eq(15);
    });
  });

  describe("bark()", () => {
    it("should print 'Bark' to the console", () => {
      sammy.bark();
      expect(consoleSpy).to.have.been.called.with("Bark");
    });
  });

  describe("static diet()", () => {
    it("should return 'carnivore'", () => {
      expect(Dog.diet()).to.eq('carnivore');
    });
  });
});
