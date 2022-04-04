const { expect } = require('chai');

const [
    findMinimum,
    runningSum,
    evenNumOfChars,
    smallerThanCurr,
    twoSum,
    secondLargest,
    shuffle,
  ] = require("../array-practice.js");

describe ('Array practice', function () {

  it('`findMinimum`', function () {

    expect(findMinimum([7, 5, 2, 3, 4, 1])).to.equal(1);
    expect(findMinimum([-100, 10, -1000, 10000])).to.equal(-1000);
    expect(findMinimum([])).to.equal(undefined);

  });

  it('`runningSum`', function () {

    expect(runningSum([])).to.deep.equal([]);
    expect(runningSum([1, 2])).to.deep.equal([1, 3]);
    expect(runningSum([1, 2, 3, 4])).to.deep.equal([1, 3, 6, 10]);
    expect(runningSum([1, 2, 3, 4, -2, -2])).to.deep.equal([1, 3, 6, 10, 8, 6]);
    expect(runningSum([1, 2, 3, 4, -2, -2, -10])).to.deep.equal([1, 3, 6, 10, 8, 6, -4]);

  });

  it('`evenNumOfChars`', function () {

    let loremIpsum = [];
    loremIpsum.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, ");
    loremIpsum.push("sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    loremIpsum.push("Ut enim ad minim veniam, ");
    loremIpsum.push("quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    loremIpsum.push("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
    loremIpsum.push("Excepteur sint occaecat cupidatat non proident, ");
    loremIpsum.push("sunt in culpa qui officia deserunt mollit anim id est laborum.");

    expect(evenNumOfChars(['a', 'abc'])).to.equal(0);
    expect(evenNumOfChars(['ab', 'abcd'])).to.equal(2);
    expect(evenNumOfChars(['ab', 'abc', 'a', 'abcd'])).to.equal(2);
    expect(evenNumOfChars(loremIpsum)).to.equal(5);

  });

  it('`smallerThanCurr`', function () {

    expect(smallerThanCurr([8,1,2,2,3])).to.deep.equal([4,0,1,1,3]);

  });

  it('`twoSum`', function () {

    expect(twoSum([4, 2, 3, 6, 9], 10)).to.equal(true);
    expect(twoSum([4, 2, 3, 6, 9], 16)).to.equal(false);

  });

  it('`secondLargest`', function () {

    expect(secondLargest([])).to.equal(undefined);
    expect(secondLargest([4])).to.equal(undefined);

    expect(secondLargest([4, 4])).to.equal(4);

    expect(secondLargest([1, 2, 3, 4])).to.equal(3);
    expect(secondLargest([4, 3, 2, 1])).to.equal(3);

    expect(secondLargest([4, 2])).to.equal(2);
    expect(secondLargest([4, 2, 3, 6, 8])).to.equal(6);

  });

  it('`shuffle`', function () {

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const shuffled = shuffle(arr);
    const shuffled2 = shuffle(arr);

    expect(arr).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(shuffled).to.include.members(arr);
    expect(shuffled2).to.include.members(arr);

    expect(shuffled).not.to.deep.equal(arr);
    expect(shuffled2).not.to.deep.equal(arr);
    expect(shuffled).not.to.deep.equal(shuffled2);

  });


});

