//!!START
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const reverseString = require("../problems/reverse-string");

describe("reverseString()", () => {
  it("should reverse a string", () => {
    const expectedString = "nuf";
    const reversedString = reverseString("fun");
    expect(reversedString).to.eql(expectedString);
  });

  it("should throw an error when passed a non-string value", () => {
    expect(() => reverseString(1)).to.throw(TypeError);
    expect(() => reverseString([1, 2, 3])).to.throw(TypeError);
  });
});
//!!END