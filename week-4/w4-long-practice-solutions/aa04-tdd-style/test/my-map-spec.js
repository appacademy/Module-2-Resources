// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("The myMap(arr, callback) function", () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it("should return a new array where the callback has been called upon each element in the original array", () => {
    expect(myMap(arr, (n) => n * 2)).to.eql([2, 4, 6]);
    expect(myMap(arr, (n) => n - 1)).to.eql([0, 1, 2]);
  });

  it("should not call the built in Array.prototype.map() method", () => {
    const spy = chai.spy.on(arr, "map");

    expect(spy).to.not.have.been.called;
  });

  it("should call the passed in callback on each element in the array", () => {
    const cb = (n) => n / 3;
    const spy = chai.spy(cb);

    myMap(arr, spy);
    expect(spy).to.have.been.called.exactly(3);
  });
});
