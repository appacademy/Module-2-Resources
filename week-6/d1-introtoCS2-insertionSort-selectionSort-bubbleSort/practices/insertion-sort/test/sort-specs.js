const { expect } = require('chai');

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const [insertionSort, insertionSortInPlace] = require("../insertion-sort.js");

describe ('Basic Sorting Algorithms', function () {

  let arr;
  let consoleSpy;

  beforeEach(function () {

    consoleSpy = chai.spy.on(console, 'log');

    arr = [2,4,6,8,1,3,5,7,9];
  });

  afterEach(() => {
    chai.spy.restore(console, 'log');
  });

  it('performs a out-of-place insertion sort', function () {

    let newArr = insertionSort(arr);

    expect(consoleSpy).on.nth(1).be.called.with('');
    expect(consoleSpy).on.nth(2).be.called.with('9');
    expect(consoleSpy).on.nth(3).be.called.with('7,9');
    expect(consoleSpy).on.nth(4).be.called.with('5,7,9');
    expect(consoleSpy).on.nth(5).be.called.with('3,5,7,9');
    expect(consoleSpy).on.nth(6).be.called.with('1,3,5,7,9');
    expect(consoleSpy).on.nth(7).be.called.with('1,3,5,7,8,9');
    expect(consoleSpy).on.nth(8).be.called.with('1,3,5,6,7,8,9');
    expect(consoleSpy).on.nth(9).be.called.with('1,3,4,5,6,7,8,9');

    expect(newArr).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    expect(arr).to.deep.equal([2,4,6,8,1,3,5,7,9]);

  });

  it('performs an in-place insertion sort', function () {

    insertionSortInPlace(arr);

    expect(consoleSpy).on.nth(1).be.called.with('2,4,6,8,1,3,5,7,9');
    expect(consoleSpy).on.nth(2).be.called.with('2,4,6,8,1,3,5,7,9');
    expect(consoleSpy).on.nth(3).be.called.with('2,4,6,8,1,3,5,7,9');
    expect(consoleSpy).on.nth(4).be.called.with('2,4,6,8,1,3,5,7,9');
    expect(consoleSpy).on.nth(5).be.called.with('1,2,4,6,8,3,5,7,9');
    expect(consoleSpy).on.nth(6).be.called.with('1,2,3,4,6,8,5,7,9');
    expect(consoleSpy).on.nth(7).be.called.with('1,2,3,4,5,6,8,7,9');
    expect(consoleSpy).on.nth(8).be.called.with('1,2,3,4,5,6,7,8,9');

    expect(arr).to.deep.equal([1,2,3,4,5,6,7,8,9]);

  });

});

