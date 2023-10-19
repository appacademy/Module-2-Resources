const { expect } = require('chai');

const [addNums10, addManyNums10] = require("../phase-2.js");

describe ('addNums10', function () {

  it('addNums in ten increments of 1', function () {

    const increment = 1;

    const sums = addNums10(increment);

    // Always call addNums ten times
    expect(sums.length).to.equal(10);

    expect(sums[0]).to.deep.equal(1); // Sum of nums 1 through 1
    expect(sums[1]).to.deep.equal(3); // Sum of nums 1 through 2
    expect(sums[2]).to.deep.equal(6); // Sum of nums 1 through 3
    expect(sums[3]).to.deep.equal(10); // Sum of nums 1 through 4
    expect(sums[4]).to.deep.equal(15); // Sum of nums 1 through 5
    expect(sums[5]).to.deep.equal(21); // Sum of nums 1 through 6
    expect(sums[6]).to.deep.equal(28); // Sum of nums 1 through 7
    expect(sums[7]).to.deep.equal(36); // Sum of nums 1 through 8
    expect(sums[8]).to.deep.equal(45); // Sum of nums 1 through 9
    expect(sums[9]).to.deep.equal(55); // Sum of nums 1 through 10

  });

  it('addNums in ten increments of 10', function () {

    const increment = 10;

    const sums = addNums10(increment);

    // addNums ten times
    expect(sums.length).to.equal(10);

    expect(sums[0]).to.deep.equal(55); // Sum of nums 1 through 10
    expect(sums[1]).to.deep.equal(210); // Sum of nums 1 through 20
    expect(sums[2]).to.deep.equal(465); // Sum of nums 1 through 30
    expect(sums[3]).to.deep.equal(820); // Sum of nums 1 through 40
    expect(sums[4]).to.deep.equal(1275); // Sum of nums 1 through 50
    expect(sums[5]).to.deep.equal(1830); // Sum of nums 1 through 60
    expect(sums[6]).to.deep.equal(2485); // Sum of nums 1 through 70
    expect(sums[7]).to.deep.equal(3240); // Sum of nums 1 through 80
    expect(sums[8]).to.deep.equal(4095); // Sum of nums 1 through 90
    expect(sums[9]).to.deep.equal(5050); // Sum of nums 1 through 100

  });

});


describe ('addManyNums10', function () {


  it('addManyNums in ten increments of 1', function () {

    const increment = 1;

    const sums = addManyNums10(increment);

    // addNums ten times
    expect(sums.length).to.equal(10);

    expect(sums[0]).to.deep.equal(1); // addManyNums(1)
    expect(sums[1]).to.deep.equal(4); // addManyNums(2)
    expect(sums[2]).to.deep.equal(10); // addManyNums(3)
    expect(sums[3]).to.deep.equal(20); // addManyNums(4)
    expect(sums[4]).to.deep.equal(35); // addManyNums(5)
    expect(sums[5]).to.deep.equal(56); // addManyNums(6)
    expect(sums[6]).to.deep.equal(84); // addManyNums(7)
    expect(sums[7]).to.deep.equal(120); // addManyNums(8)
    expect(sums[8]).to.deep.equal(165); // addManyNums(9)
    expect(sums[9]).to.deep.equal(220); // addManyNums(10)

  });

  it('addManyNums in ten increments of 10', function () {

    const increment = 10;

    const sums = addManyNums10(increment);

    // addNums ten times
    expect(sums.length).to.equal(10);

    expect(sums[0]).to.deep.equal(220); // addManyNums(10)
    expect(sums[1]).to.deep.equal(1540); // addManyNums(20)
    expect(sums[2]).to.deep.equal(4960); // addManyNums(30)
    expect(sums[3]).to.deep.equal(11480); // addManyNums(40)
    expect(sums[4]).to.deep.equal(22100); // addManyNums(50)
    expect(sums[5]).to.deep.equal(37820); // addManyNums(60)
    expect(sums[6]).to.deep.equal(59640); // addManyNums(70)
    expect(sums[7]).to.deep.equal(88560); // addManyNums(80)
    expect(sums[8]).to.deep.equal(125580); // addManyNums(90)
    expect(sums[9]).to.deep.equal(171700); // addManyNums(100)

  });

});

