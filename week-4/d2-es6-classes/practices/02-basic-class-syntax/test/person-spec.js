const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const Person = require("../classes/person");

describe("Person class", () => {
  let person;
  let consoleSpy
  beforeEach(() => {
    person = new Person("kristen", "chauncey", 38);
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  describe("Person constructor", () => {
    it("should set the firstName property", () => {
      expect(person).to.have.property("firstName");
      expect(person.firstName).to.eql("kristen");
    });

    it("should set the lastName property", () => {
      expect(person).to.have.property("lastName");
      expect(person.lastName).to.eql("chauncey");
    });

    it("should set the age property", () => {
      expect(person).to.have.property("age");
      expect(person.age).to.eql(38);
    });
  });

  describe("introduce instance method", () => {
    it("should call the introduce method", () => {
      person.introduce();
      let expected = `Hi, I'm kristen chauncey, and I'm 38 years old.`;
      expect(consoleSpy).to.have.been.called.once.with(expected)
    });
  });

  describe("introducePeople static method", () => {
    it("should call the introduce method on each instance", () => {
      const person2 = new Person("jeff", "granoff", 30);
      let introSpy = chai.spy.on(person, "introduce");
      let introSpy2 = chai.spy.on(person2, "introduce");
      Person.introducePeople([person, person2]);
      expect(introSpy).to.have.been.called.once;
      expect(introSpy2).to.have.been.called.once;
    });

    it("should throw an error if input is not an array", () => {
      let input = "bad input";
      Person.introducePeople(input);
      expect(consoleSpy).to.have.been.called.once.with(
        "introducePeople only takes an array as an argument."
      );
    });

    it('should throw an error if array does not contain instances of Person', () => {
      let input = ['dog', person]
      Person.introducePeople(input);
      expect(consoleSpy).to.have.been.called.once.with(
        "All items in array must be Person class instances."
      );
    })
  });
});
