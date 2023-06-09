const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange } = require("../funcs");

describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //!!START SILENT
    // checking if isFive(5) results in true
    //!!END
    const num1 = 5;

    const actual1 = isFive(num1); // should be true

    expect(actual1).to.be.true;

    //!!START SILENT
    // checking if isFive(4) and isFive("not 5") results in false
    //!!END
    const otherInput = "not 5";
    const num2 = 4;

    const actual2 = isFive(num2); // should be false
    const actual3 = isFive(otherInput); // should be false

    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });
});

describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //!!START SILENT
    // checking if isOdd(3), isOdd(2953), and isOdd(-999) results in true
    //!!END
    const num1 = 3;
    const num2 = 2953;
    const num3 = -999;

    const actual1 = isOdd(num1); // should be true
    const actual2 = isOdd(num2); // should be true
    const actual3 = isOdd(num3); // should be true

    expect(actual1).to.be.true;
    expect(actual2).to.be.true;
    expect(actual3).to.be.true;
  });

  it("should return false if the num is even", () => {
    //!!START SILENT
    // checking if isOdd(4), isOdd(2952), and isOdd(-998) results in false
    //!!END
    const num1 = 4;
    const num2 = 2952;
    const num3 = -998;

    const actual1 = isOdd(num1); // should be false
    const actual2 = isOdd(num2); // should be false
    const actual3 = isOdd(num3); // should be false

    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });

  it("should throw an error if num is not type of Number", () => {
    //!!START SILENT
    // checking if isOdd("i am a string"), isOdd({ i: "am", an: "object" }),
    // and isOdd(["i", "am", "an", "array"]) throws errors
    //!!END
    const string = "i am a string";
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];

    expect(() => isOdd(string)).to.throw(Error);
    expect(() => isOdd(object)).to.throw(Error);
    expect(() => isOdd(array)).to.throw(Error);
  });
});

describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    //!!START SILENT
    // when the step parameter is not provided
    //!!END
    it("should return the correct array with default value step=1", () => {
      //!!START SILENT
      // checking if myRange(0, 5) results in [0, 1, 2, 3, 4, 5]
      // checking if myRange(6, 3) results in []
      //!!END
      const [min1, max1] = [0, 5];
      const [min2, max2] = [6, 3];

      const actual1 = myRange(min1, max1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2);
      const expected2 = [];

      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
    });
  });

  context("if step is provided", () => {
    //!!START SILENT
    // when the step parameter is provided
    //!!END
    it("should return the correct array", () => {
      //!!START SILENT
      // checking if myRange(0, 5, 1) results in [0, 1, 2, 3, 4, 5]
      // checking if myRange(0, 5, 2) results in [0, 2, 4]
      // checking if myRange(9, 5, 2) results in []
      //!!END
      const [min1, max1, step1] = [0, 5, 1];
      const [min2, max2, step2] = [0, 5, 2];
      const [min3, max3, step3] = [9, 5, 2];

      const actual1 = myRange(min1, max1, step1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2, step2);
      const expected2 = [0, 2, 4];
      const actual3 = myRange(min3, max3, step3);
      const expected3 = [];

      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
    });
  });
});
