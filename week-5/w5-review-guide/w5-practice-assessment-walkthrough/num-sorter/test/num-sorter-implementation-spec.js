const chai = require("chai");
const expect = chai.expect;

const { LinkedList, NumSorter } = require("../problems/num-sorter");

describe("NumSorter implementation", function () {
  let numSorter;

  beforeEach(() => {
    numSorter = new NumSorter()
  })

  it("numList property is not an Array and is an instance of a Set OR a LinkedList", function () {
    expect(Array.isArray(numSorter.numList)).to.be.false;
    expect(
      numSorter.numList instanceof Set ||
        numSorter.numList instanceof LinkedList
    ).to.be.true;
  });

  it("allowedNums property is not an Array and is an instance of a Set OR a LinkedList", function () {
    expect(Array.isArray(numSorter.allowedNums)).to.be.false;
    expect(
      numSorter.allowedNums instanceof Set ||
        numSorter.allowedNums instanceof LinkedList
    ).to.be.true;
  });

  it("addAllowedNum adds unique numbers", function () {
    expect(numSorter.addAllowedNum(6)).to.eql("6 added to allowedNums");
    expect(numSorter.addAllowedNum(7)).to.eql("7 added to allowedNums");
    expect(numSorter.addAllowedNum(9)).to.eql("9 added to allowedNums");
  });

  it("addAllowedNum fails to register a repeat number", function () {
    expect(numSorter.addAllowedNum(1)).to.eql("1 added to allowedNums");
    expect(numSorter.addAllowedNum(4)).to.eql("4 added to allowedNums");
    expect(numSorter.addAllowedNum(7)).to.eql("7 added to allowedNums");
    expect(numSorter.addAllowedNum(4)).to.eql("4 already in allowedNums");
  });

  it("isNumAllowed returns a boolean of whether or not a num is allowed", function () {
    numSorter.addAllowedNum(1);
    numSorter.addAllowedNum(2);
    numSorter.addAllowedNum(3);

    expect(numSorter.isNumAllowed(2)).to.be.true;
    expect(numSorter.isNumAllowed(3)).to.be.true;
    expect(numSorter.isNumAllowed(4)).to.be.false;
    expect(numSorter.isNumAllowed(5)).to.be.false;
  });

  it("addNumToBack adds a number to the end of numList and returns the last element", function () {
    numSorter.addAllowedNum(2);
    numSorter.addAllowedNum(3);

    expect(numSorter.addNumToBack(2)).to.eql(2);
    expect(numSorter.addNumToBack(3)).to.eql(3);
    expect(numSorter.addNumToBack(5)).to.eql(3);
  });

  it("getFirstNum removes the first number in the numList and returns the value", function () {
    numSorter.addAllowedNum(0);
    numSorter.addAllowedNum(1);
    numSorter.addAllowedNum(5);

    numSorter.addNumToBack(0)
    numSorter.addNumToBack(1)
    numSorter.addNumToBack(5)

    expect(numSorter.getFirstNum()).to.eql(0);
    expect(numSorter.getFirstNum()).to.eql(1);
    expect(numSorter.getFirstNum()).to.eql(5);
  });

  it("numCount returns the number of elements in the numList", function () {
    numSorter.addAllowedNum(5);
    numSorter.addAllowedNum(6);
    numSorter.addAllowedNum(7);

    expect(numSorter.numCount()).to.eql(0);

    numSorter.addNumToBack(5)
    numSorter.addNumToBack(6)
    numSorter.addNumToBack(7)

    expect(numSorter.numCount()).to.eql(3);
  });

  it("buildNumList adds nums to the numList and returns its size", function () {
    numSorter.addAllowedNum(1);
    numSorter.addAllowedNum(3);

    expect(numSorter.numCount()).to.eql(0);

    expect(numSorter.buildNumList(5)).to.eql(2);
    expect(numSorter.numCount()).to.eql(2);

    numSorter.addAllowedNum(5);

    expect(numSorter.buildNumList(5)).to.eql(3);
    expect(numSorter.numCount()).to.eql(3);
  });
});
