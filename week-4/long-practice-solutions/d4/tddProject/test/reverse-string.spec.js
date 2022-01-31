const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string");

describe("reverseString()", () => {
  it("should reverse a string", () => {
    const expected = "nuf";
    const actual = reverseString("fun");
    expect(actual).to.eql(expected);
  });
  it("should throw an error when a non-string arg is passed", () => {
    expect(() => reverseString(1)).to.throw(TypeError);
    expect(() => reverseString([1, 2, 3])).to.throw(TypeError);
  });
});
