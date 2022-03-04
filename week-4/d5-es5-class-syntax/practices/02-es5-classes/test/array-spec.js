const chai = require("chai");
const expect = chai.expect;

require('../classes/array');

describe("Array", () => {
  describe("isEqual(array)", () => {
    context("if each element on the array instance is equal to the passed-in array", () => {
      it("should return true", () => {
        expect([1, 2, 3].isEqual([1, 2, 3])).to.be.true;
        expect([1, 2, 3, 4].isEqual([1, 2, 3, 4])).to.be.true;
      });
    });
    context("if each element on the array instance is NOT equal to the passed-in array", () => {
      it("should return false", () => {
        expect([1, 2, 3].isEqual([3, 4, 5])).to.be.false;
        expect([1, 2, 3, 4].isEqual([10, 9, 8, 7])).to.be.false;
        expect([1, 2, 3, 4].isEqual([10, 9, 8])).to.be.false;
      });
    });
  });
});
