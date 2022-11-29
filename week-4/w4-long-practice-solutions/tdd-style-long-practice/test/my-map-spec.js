//!!START
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap()", () => {
  let inputArray;

  beforeEach(() => {
    inputArray = [1, 2, 3];
  });

  it("should return a new array", () => {
    expect(myMap(inputArray, () => {})).to.be.an.instanceOf(Array);
  });

  it("should return a new array with the same elements", () => {
    const expectedArray = [2, 3, 4];
    expect(myMap(inputArray, element => element + 1)).to.deep.equal(
      expectedArray
    );
  });

  it("should not modify the input Array", () => {
    myMap(inputArray, element => element + 1);
    expect(inputArray).to.deep.equal([1, 2, 3]);
  });

  it("should not call the built in map", () => {
    const mapSpy = chai.spy.on(inputArray, "map");
    myMap(inputArray, element => element + 1);
    expect(mapSpy).to.not.have.been.called();
  });

  it("should call the callback for each element in the input array", () => {
    const callback = element => element + 1;
    const callbackSpy = chai.spy(callback);
    myMap(inputArray, callbackSpy);
    expect(callbackSpy).to.have.been.called.exactly(3);
  });
});
//!!END