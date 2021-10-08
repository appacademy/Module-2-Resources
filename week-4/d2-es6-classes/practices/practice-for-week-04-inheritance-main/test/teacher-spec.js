const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const Teacher = require("../classes/teacher");

describe("Teacher class", () => {
  let teacher1;
  let teacher2;

  beforeEach(() => {
    teacher1 = new Teacher("susan", "jones", "biology", 5);
    teacher2 = new Teacher("bobby", "roberts", "math", 15);
  });

  describe("Teacher constructor", () => {
    it("should set the firstName property", () => {
      expect(teacher1).to.have.property("firstName");
      expect(teacher1.firstName).to.eql("susan");
    });

    it("should set the lastName property", () => {
      expect(teacher1).to.have.property("lastName");
      expect(teacher1.lastName).to.eql("jones");
    });

    it("should set the subject property", () => {
      expect(teacher1).to.have.property("subject");
      expect(teacher1.subject).to.eql("biology");
    });

    it("should set the yearsOfExperience property", () => {
      expect(teacher1).to.have.property("yearsOfExperience");
      expect(teacher1.yearsOfExperience).to.eql(5);
    });
  });

  describe("combinedYearsOfExperience static method", () => {
    it("should return the count of total combined yearsOfExperience of an array of teachers", () => {
      expect(Teacher.combinedYearsOfExperience([teacher1, teacher2])).to.eql(
        20
      );
    });
  });
});
