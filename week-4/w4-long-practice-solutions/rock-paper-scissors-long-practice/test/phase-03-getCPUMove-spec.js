const chai = require("chai");

const expect = chai.expect;

const { getCPUMove } = require('../game');

describe('getCPUMove()', () => {
  it("should randomly return 'r', 'p', or 's'", () => {
    const validMoveKeys = ['r', 'p', 's'];

    for (let i = 0; i < 50; i++) {
      const actualResult = getCPUMove();

      expect(validMoveKeys).to.include(actualResult);
    }
  });

  it("should return 'r' at least once after many calls", () => {
    const returnedMoveKeys = [];

    for (let i = 0; i < 50; i++) {
      returnedMoveKeys.push(getCPUMove());
    }
    expect(returnedMoveKeys.includes('r'), "Expected 'r' to be returned at least once after many calls").to.be.true;
  });

  it("should return 'p' at least once after many calls", () => {
    const returnedMoveKeys = [];

    for (let i = 0; i < 50; i++) {
      returnedMoveKeys.push(getCPUMove());
    }
    expect(returnedMoveKeys.includes('p'), "Expected 'p' to be returned at least once after many calls").to.be.true;
  });

  it("should return 's' at least once after many calls", () => {
    const returnedMoveKeys = [];

    for (let i = 0; i < 50; i++) {
      returnedMoveKeys.push(getCPUMove());
    }
    expect(returnedMoveKeys.includes('s'), "Expected 's' to be returned at least once after many calls").to.be.true;
  });
});
