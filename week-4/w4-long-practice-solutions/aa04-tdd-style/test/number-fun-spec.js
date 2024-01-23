// Your code here
const expect = require("chai").expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("The returnsThree() function", () => {
  it("should return the number 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("The reciprocal() function", () => {
  context("the input is between 1 and 1000000", () => {
    it("should return the reciprocal of the given number", () => {
      expect(reciprocal(5)).to.equal(0.2);
      expect(reciprocal(4)).to.equal(0.25);
    });
  });

  context("the input is out of bounds", () => {
    it("should throw a RangeError if the number is less than 1 or greater than 1000000", () => {
      expect(() => reciprocal(-1)).to.throw(RangeError);
      expect(reciprocal.bind({}, 4000000)).to.throw(RangeError);
    });
  });
});
