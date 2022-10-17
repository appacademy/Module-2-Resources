//!!START
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/person");

describe("Person", () => {
  let person;
  let otherPerson;
  let name = "Alice";
  let age = 42;
  let otherName = "Bob";
  let otherAge = 64;

  beforeEach(() => {
    person = new Person(name, age);
    otherPerson = new Person(otherName, otherAge);
  });

  describe("constructor()", () => {
    it("should return an instance of Person", () => {
      expect(person).to.be.an.instanceof(Person);
    });

    it("should set name and age properties", () => {
      expect(person.name).to.equal(name);
      expect(person.age).to.equal(age);
    });
  });

  describe("sayHello()", () => {
    it("should greet the user", () => {
      expect(person.sayHello()).to.equal(`Hello, ${name}.`);
    });
  });

  describe("visit(otherPerson)", () => {
    it("should tell us person visited otherPerson", () => {
      expect(person.visit(otherPerson)).to.equal(
        `${name} visited ${otherName}`
      );
    });
  });

  describe("switchVisit(otherPerson)", () => {
    it("should visit the other person", () => {
      expect(person.switchVisit(otherPerson)).to.equal(
        `${otherName} visited ${name}`
      );
    });

    it("should call otherPerson.visit", () => {
      const otherPersonVisitSpy = chai.spy.on(otherPerson, "visit");
      person.switchVisit(otherPerson);
      expect(otherPersonVisitSpy).to.have.been.called.once;
    });
  });

  describe("update(obj)", () => {
    context("when the argument is a valid object", () => {
      it("should update the name and age", () => {
        const newName = "Bob";
        const newAge = 64;
        person.update({ name: newName, age: newAge });
        expect(person.name).to.equal(newName);
        expect(person.age).to.equal(newAge);
      });
    });

    context("when the argument is not a valid object", () => {
      it("should throw a TypeError when it's not an object", () => {
        expect(() => person.update(1)).to.throw(TypeError);
      });

      it("should throw a TypeError when the object does not have a name", () => {
        const newName = "Bob";
        expect(() => person.update({ name: newName })).to.throw(TypeError);
      });

      it("should throw a TypeError when the object does not have an age", () => {
        const newAge = 64;
        expect(() => person.update({ age: newAge })).to.throw(TypeError);
      });
    });
  });

  describe("tryUpdate(obj)", () => {
    context("when successful", () => {
      it("should return true if the update was successful", () => {
        const newName = "Bob";
        const newAge = 64;
        expect(person.tryUpdate({ name: newName, age: newAge })).to.be.true;
      });
    });

    context("when unsuccessful", () => {
      it("should return true if the update was successful", () => {
        expect(person.tryUpdate(1)).to.be.false;
      });
    });
  });

  describe("static greetAll(people)", () => {
    it("should greet all the people", () => {
      expect(Person.greetAll([person, otherPerson])).to.deep.equal([
        `Hello, ${person.name}.`,
        `Hello, ${otherPerson.name}.`
      ]);
    });

    it("should call sayHello for every person", () => {
      sayHelloSpy = chai.spy.on(Person.prototype, "sayHello");
      Person.greetAll([person, otherPerson]);
      expect(sayHelloSpy).to.have.been.called.twice;
    });
  });
});
//!!END