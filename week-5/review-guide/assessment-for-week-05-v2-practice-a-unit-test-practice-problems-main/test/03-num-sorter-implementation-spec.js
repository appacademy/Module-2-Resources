const chai = require("chai");
const expect = chai.expect;

const { LinkedList, NumSorter } = require("../problems/02-num-sorter");

describe("NumSorter implementation", function () {
  it("addAllowedNum adds unique numbers", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
  });

  it("addAllowedNum fails to register a repeat number", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
    expect(numSorter.addAllowedNum(1)).to.eql("1 already in allowedNums");
  });

  it("allowedNums property is not an Array and is an instance of a Set OR a LinkedList", function () {
    const numSorter = new NumSorter(3);
    expect(Array.isArray(numSorter.allowedNums)).to.be.false;
    expect(
      numSorter.allowedNums instanceof Set ||
        numSorter.allowedNums instanceof LinkedList
    ).to.be.true;
  });

  it("numList property is not an Array and is an instance of a Set OR a LinkedList", function () {
    const numSorter = new NumSorter(3);
    expect(Array.isArray(numSorter.numList)).to.be.false;
    expect(
      numSorter.numList instanceof Set ||
        numSorter.numList instanceof LinkedList
    ).to.be.true;
  });
  it("numCount returns the number of nums in the numList", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
    expect(numSorter.allowedNums.size).to.eql(3);
  });
  it("buildNumList adds nums to the numList", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
    expect(numSorter.buildNumList(3)).to.eql(3);
  });
  it("buildNumList adds nums to the numList", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
    expect(numSorter.buildNumList(3)).to.eql(3);
  });
  it("isNumAllowed returns a boolean of whether or not a num is allowed", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
    expect(numSorter.isNumAllowed(3)).to.be.true;
    expect(numSorter.isNumAllowed(4)).to.be.false;
  });
  it("getFirstNum returns the value of the first number in the numList", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(0)).to.eql("0 added to allowedNums");
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.buildNumList(2)).to.eql(2);
    expect(numSorter.getFirstNum()).to.eql(0);
  });
  it("addNumToBack adds a number to the end of numList and returns the last element", function () {
    const numSorter = new NumSorter(3);
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(2)).to.eql("2 added to allowedNums");
    expect(numSorter.addAllowedNum(3)).to.eql("3 added to allowedNums");
    expect(numSorter.addNumToBack(3)).to.eql(3);
  });
});
