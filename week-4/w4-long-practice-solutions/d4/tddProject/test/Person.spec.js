const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/Person");

describe("Person class", () => {
  //Person class will have a name and age property
  let person;
  let person2;
  beforeEach(() => {
    person = new Person("bill", 45);
    person2 = new Person("xander", 21);
  });
  describe("constructor", () => {
    it("should set name and age properties", () => {
      expect(person.age).to.equal(45);
      expect(person2.age).to.equal(21);
      expect(person.name).to.equal("bill");
      expect(person2.name).to.equal("xander");
    });
  });

  describe("sayHello()", () => {
    it("should return name and greeting", () => {
      expect(person.sayHello()).to.equal(`Hello, ${person.name}`);
    });
  });

  describe("visit(otherPerson)", () => {
    it("should tell us person visited otherPerson", () => {
      expect(person.visit(person2)).to.equal(
        `${person.name} visited ${person2.name}`
      );
    });
  });

  describe("switchVisit(otherPerson)", () => {
    it("should visit other person", () => {
      expect(person.switchVisit(person2)).to.equal(
        `${person2.name} visited ${person.name}`
      );
    });
    it("should call otherPerson.visit", () => {
      const otherPersonVisitSpy = chai.spy.on(person2, "visit");
      person.switchVisit(person2);
      expect(otherPersonVisitSpy).to.have.been.called.once;
    });
  });

  describe("update", () => {
    context("valid object", () => {
      it("should update name and age", () => {
        const newName = "Badger";
        const newAge = 0.75;
        person.update({ name: newName, age: newAge });
        expect(person.name).to.equal(newName);
        expect(person.age).to.equal(newAge);
      });
    });
    context("invalid object", () => {
      it("should throw a TypeError when not an object", () => {
        expect(() => person.update(1)).to.throw(TypeError);
        expect(() => person.update("hello")).to.throw(TypeError);
      });
      it("should throw a TypeError when does not have age and name", () => {
        expect(() => person.update({ name: "bob" })).to.throw(TypeError);
        expect(() => person.update({ age: 5 })).to.throw(TypeError);
      });
    });
  });
  describe("tryUpdate(obj)", () => {
    context("when successful", () => {
      it("should return true if update successful", () => {
        const newName = "bob";
        const newAge = 43;
        expect(person.tryUpdate({ name: newName, age: newAge })).to.be.true;
      });
    });
    context("when unsuccessful", () => {
      it("should return false if update was unsuccessful", () => {
        expect(person.tryUpdate([1, 2])).to.be.false;
      });
    });
  });
  describe("static greetAll(people)", () => {
    it("should greet all the people", () => {
      expect(Person.greetAll([person, person2])).to.deep.equal([
        `Hello, ${person.name}`,
        `Hello, ${person2.name}`,
      ]);
    });
    it("should call sayHello for every person", () => {
      sayHelloSpy = chai.spy.on(Person.prototype, "sayHello");
      Person.greetAll([person, person2]);
      expect(sayHelloSpy).to.have.been.called.twice;
    });
  });
});
