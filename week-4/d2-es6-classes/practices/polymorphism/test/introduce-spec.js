const chai = require("chai");
const expect = chai.expect;

const spies = require("chai-spies");
chai.use(spies);

const Person = require("../classes/person");
const Student = require("../classes/student");
const Teacher = require("../classes/teacher");

describe("Person class", () => {
  let person1;

  beforeEach(() => {
    person1 = new Person("kristen", "chauncey", 38);
  });

  describe("Person instance method introduce", () => {
    it("should still behave the same as before", () => {
      expect(person1.introduce()).to.eql(`Hi, I'm kristen chauncey, and I'm 38 years old.`);
    });
  });
});

describe("Student class", () => {
  let student1;

  beforeEach(() => {
    student1 = new Student("billy", "johnson", "software-development", 3.2);
  });

  describe("Student instance method introduce", () => {
      it("should call the unique introduce method for Student", () => {
        expect(student1.introduce()).to.eql('Hello. I am billy johnson, and I study software-development.')
    });
  });
});

describe("Teacher class", () => {
  let teacher1;

  beforeEach(() => {
    teacher1 = new Teacher("susan", "jones", "biology", 5);
  });

  describe("Teacher instance method introduce", () => {
      it("should call the unique introduce method for Student", () => {
        expect(teacher1.introduce()).to.eql('Hello. I am susan jones, and I have been teaching biology for 5 years.')
    });
  });
});
