// Your code here
const expect = require("chai").expect;

const Person = require("../problems/person");

describe("The Person class", () => {
  let shane;
  let bri;

  beforeEach(() => {
    shane = new Person("Shane", 41);
    ollie = new Person("Ollie", 2);
  });

  describe("the constructor function", () => {
    it("should set have a `name` property", () => {
      expect(shane).to.have.property("name", "Shane");
    });

    it("should set have an `age` property", () => {
      expect(shane).to.have.property("age", 41);
    });
  });

  describe("the sayHello() instance method", () => {
    it("should return a string with the `Person` instance's name and a greeting message", () => {
      expect(shane.sayHello()).to.equal("Shane says hello!");
      expect(ollie.sayHello()).to.equal("Ollie says hello!");
    });
  });

  describe("the visit(otherPerson) instance method", () => {
    it("should return a string stating that this instance visited the passed-in person instance", () => {
      expect(shane.visit(ollie)).to.equal("Shane visited Ollie");
      expect(ollie.visit(shane)).to.equal("Ollie visited Shane");
    });
  });

  describe("the switchVisit(otherPerson) instance method", () => {
    it("invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument", () => {
      expect(shane.switchVisit(ollie)).to.equal("Ollie visited Shane");
      expect(ollie.switchVisit(shane)).to.equal("Shane visited Ollie");
    });
  });

  describe("the update(obj) instance method", () => {
    context("the incoming argument is not a valid object", () => {
      context("the input is not an object", () => {
        it("should throw a new TypeError with a clear message", () => {
          expect(() => shane.update("string")).to.throw(
            TypeError,
            "Input must be a valid object!"
          );
        });
      });

      context("the object does not have the correct properties", () => {
        it("should throw a new TypeError with a clear message", () => {
          expect(() =>
            shane.update({ occupation: "SWE", yearsOfExperience: 3 })
          ).to.throw(TypeError, "Input must have `name` and `age` properties!");
        });
      });
    });

    context(
      "the incoming argument is a valid object with the correct `name` and `age` properties",
      () => {
        it("should update the instance's properties to match those of the input", () => {
          expect(shane.update({ name: "enahS", age: 14 })).to.eql({
            name: "enahS",
            age: 14,
          });
          expect(ollie.update({ name: "Oliver", age: 2.5 })).to.eql({
            name: "Oliver",
            age: 2.5,
          });
        });
      }
    );
  });

  describe("The tryUpdate(obj) instance method", () => {
    context("the update was successful", () => {
      it("should return true and update the instance", () => {
        const res = shane.tryUpdate({ name: "enahS", age: 14 });
        expect(res).to.be.true;
        expect(shane).to.eql({ name: "enahS", age: 14 });
      });
    });

    context("the update was unsuccessful", () => {
      it("should return false and not update the instance", () => {
        const resShane = shane.tryUpdate("string");
        const resOllie = ollie.tryUpdate({
          color: "blue",
          favoriteToy: "ball",
        });

        expect(resShane).to.be.false;
        expect(shane).to.eql({ name: "Shane", age: 41 });

        expect(resOllie).to.be.false;
        expect(ollie).to.eql({ name: "Ollie", age: 2 });
      });
    });
  });

  describe("the greetAll(obj) static method", () => {
    it("should return an array of stored greeting strings", () => {
      const res = Person.greetAll([shane, ollie]);

      expect(res).to.eql(["Shane says hello!", "Ollie says hello!"]);
    });
  });
});
