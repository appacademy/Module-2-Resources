const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange } = require("../funcs");

describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    // setup
    const num1 = 5;

    const actual1 = isFive(num1); // should be true

    // assertion
    expect(actual1).to.be.true;

    // more setup
    const otherInput = "not 5";
    const num2 = 4;

    // return values of isFive are stored in these variables
    const actual2 = isFive(num2); // should be false
    const actual3 = isFive(otherInput); // should be false

    // testing those variables to be false
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });
});

describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    // more setup
    const num1 = 3;
    const num2 = 2953;
    const num3 = -999;

    const actual1 = isOdd(num1); // should be true
    const actual2 = isOdd(num2); // should be true
    const actual3 = isOdd(num3); // should be true

    // assertion to determine if specs pass
    expect(actual1).to.be.true;
    expect(actual2).to.be.true;
    expect(actual3).to.be.true;
  });

  it("should return false if the num is even", () => {
    // more setup inputs
    const num1 = 4;
    const num2 = 2952;
    const num3 = -998;

    // setup function calls
    const actual1 = isOdd(num1); // should be false
    const actual2 = isOdd(num2); // should be false
    const actual3 = isOdd(num3); // should be false

    // return values are evaluated
    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });

  it("should throw an error if num is not type of Number", () => {
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
    it("should return the correct array with default value step=1", () => {
      // test inputs
      const [min1, max1] = [0, 5];
      const [min2, max2] = [6, 3];

      // function invoked with inputs
      // expected outputs
      const actual1 = myRange(min1, max1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2);
      const expected2 = [];

      // function outputs are compared to expected outputs
      expect(actual1).to.eql(expected1);
      // expect().to.deep.equal()
      // expect().to.have.members(somearray)
      // these two lines are the same
      expect(myRange(min1, max1)).to.eql([0, 1, 2, 3, 4, 5]);
      expect(actual2).to.eql(expected2);
    });
  });

  context("if step is provided", () => {
    it("should return the correct array", () => {
      // input args
      const [min1, max1, step1] = [0, 5, 1];
      const [min2, max2, step2] = [0, 5, 2];
      const [min3, max3, step3] = [9, 5, 2];

      // invoking fn with args
      // expected outputs stored in variables
      const actual1 = myRange(min1, max1, step1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2, step2);
      const expected2 = [0, 2, 4];
      const actual3 = myRange(min3, max3, step3);
      const expected3 = [];

      // expected outputs evaluated to pass specs
      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
    });
  });
});
