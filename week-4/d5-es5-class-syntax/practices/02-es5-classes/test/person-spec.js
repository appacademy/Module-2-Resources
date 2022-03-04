const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Person = require('../classes/person');
const Dog = require('../classes/dog');

describe("Person", () => {
  let consoleSpy;
  let sammy, buch, pickles, mars;
  let alex, ali, michael;

  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
    sammy = new Dog("Sammy", 15);
    buch = new Dog("Buch", 13);
    pickles = new Dog("Pickles", 9);
    mars = new Dog("Mars", 8);

    alex = new Person("Alex", 31);
    ali = new Person("Ali", 21, [buch, pickles]);
    michael = new Person("Michael", 22, [sammy]);
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  describe("constructor(name, age, dogs = [])", () => {
    it("should initialize the name property to be set to the given name", () => {
      expect(alex.name).to.eq("Alex");
      expect(ali.name).to.eq("Ali");
      expect(michael.name).to.eq("Michael");
    });

    it("should initialize the age property to be set to the given age", () => {
      expect(alex.age).to.eq(31);
      expect(ali.age).to.eq(21);
      expect(michael.age).to.eq(22);
    });

    it("should initialize the dogs property to be set to the dogs array", () => {
      expect(ali.dogs).to.eql([buch, pickles]);
      expect(michael.dogs).to.eql([sammy]);
    });

    it("should initialize the dogs property to be set to an empty array if no given dogs", () => {
      expect(alex.dogs).to.eql([]);
    });
  });

  describe("addDog(dog)", () => {
    context("if the given dog is an instance of the Dog class", () => {
      it("should add the given dog into the dogs property array", () => {
        alex.addDog(mars);
        expect(alex.dogs).to.eql([mars]);
        ali.addDog(mars);
        expect(ali.dogs).to.eql([buch, pickles, mars]);
        michael.addDog(mars);
        expect(michael.dogs).to.eql([sammy, mars]);
      });
    });

    context("if the given dog is NOT an instance of the Dog class", () => {
      it("should throw a TypeError", () => {
        expect(() => alex.addDog("Mars")).to.throw(TypeError);
      });
    });
  });

  describe("walkDogs()", () => {
    it("should print 'walking ${dog.name}' for every dog in the dogs property array", () => {
      alex.walkDogs();
      expect(consoleSpy).to.not.have.been.called();

      ali.walkDogs();
      expect(consoleSpy).on.nth(1).be.called.with('walking Buch');
      expect(consoleSpy).on.nth(2).be.called.with('walking Pickles');
      expect(consoleSpy).to.have.been.called.exactly(2);

      michael.walkDogs();
      expect(consoleSpy).on.nth(3).be.called.with('walking Sammy');
      expect(consoleSpy).to.have.been.called.exactly(3);
    });
  });
});
