const { expect } = require('chai');

const [addNums, addManyNums] = require("../phase-1.js");

describe ('addNums', function () {

  it('adds all integers 1-10', function () {

    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
    expect(addNums(10)).to.equal(55);

  });

  it('adds all integers 1-100', function () {

    expect(addNums(100)).to.equal(5050);

  });


  it('adds all integers 1 to 1000', function () {

    expect(addNums(1000)).to.equal(500500);

  });


  it('adds all integers 1 to 10000', function () {

    expect(addNums(10000)).to.equal(50005000);

  });


  it('adds all integers 1 to 100000', function () {

    expect(addNums(10000)).to.equal(50005000);

  });


  it('adds all integers 1 to 1000000', function () {

    expect(addNums(100000)).to.equal(5000050000);

  });


  it('adds all integers 1 to 10000000', function () {

    startTime = Date.now();
    expect(addNums(1000000)).to.equal(500000500000);
    endTime = Date.now();

  });


  it('runs in O(n) time', function () {

    // n = 10 million
    const startTime = Date.now();
    addNums(10000000);
    const endTime = Date.now();

    const runtime = endTime - startTime

    // Don't get too clever, should run in O(n) time
    expect(runtime).to.be.above(3);

    // Even slow computers should be able to run in under 800ms
    expect(runtime).to.be.below(800);

  });

});

describe ('addManyNums', function () {


  it('adds all values of addNums(1) through addNums(10)', function () {

    // addNums(1) + addNums(2) + addNums(3) + addNums(4) + addNums(5) +
    // addNums(6) + addNums(7) + addNums(8) + addNums(9) + addNums(10) = 220

    expect(addManyNums(10)).to.equal(220);

  });

  it('adds all values of addNums(1) through addNums(100)', function () {


    expect(addManyNums(100)).to.equal(171700);

  });


  it('adds all values of addNums(1) through addNums(1000)', function () {

    expect(addManyNums(1000)).to.equal(167167000);

  });

});
