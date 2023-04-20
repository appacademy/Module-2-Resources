const { expect } = require('chai');
const DynamicArray = require("../dynamic-array.js");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

describe('Dynamic Array', function () {

  let dynamicArr;
  let noBuiltInMethods;

  beforeEach(function () {
    dynamicArr = new DynamicArray();
    noBuiltInMethods = chai.spy.on(dynamicArr.data, ["shift", "unshift", "push", "pop", "concat", "indexOf"]);
  });

  afterEach(function () {
    // it shouldn't use any built-in methods
    // this runs after each test
    noBuiltInMethods.forEach(
      spy => expect(spy).to.have.not.been.called()
    )
  })

  it('has capacity, length and data properties', function () {

    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.data).to.deep.equal(new Array(4));

  });

  it('can be initialized with custom capacity', function () {

    dynamicArr = new DynamicArray(8);

    expect(dynamicArr.capacity).to.equal(8);
    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.data).to.deep.equal(new Array(8));

  });

  it('can read the value at a given index', function () {

    expect(dynamicArr.read(0)).to.equal(undefined);

    dynamicArr.data[0] = 3;
    dynamicArr.length = 1;

    expect(dynamicArr.read(0)).to.equal(3);

  });

  it('can `push()` single values onto the end of the array', function () {

    dynamicArr.push(1);
    expect(dynamicArr.length).to.equal(1);
    expect(dynamicArr.read(0)).to.equal(1);

    dynamicArr.push(2);
    expect(dynamicArr.length).to.equal(2);
    expect(dynamicArr.read(0)).to.equal(1);
    expect(dynamicArr.read(1)).to.equal(2);

    dynamicArr.push(3);
    expect(dynamicArr.length).to.equal(3);
    expect(dynamicArr.read(0)).to.equal(1);
    expect(dynamicArr.read(1)).to.equal(2);
    expect(dynamicArr.read(2)).to.equal(3);

  });

  it('can `pop()` off the end of the array', function () {

    dynamicArr.push(1);
    dynamicArr.push(2);
    dynamicArr.push(3);

    expect(dynamicArr.length).to.equal(3);

    expect(dynamicArr.pop()).to.equal(3);
    expect(dynamicArr.length).to.equal(2);

    expect(dynamicArr.pop()).to.equal(2);
    expect(dynamicArr.length).to.equal(1);

    expect(dynamicArr.pop()).to.equal(1);
    expect(dynamicArr.length).to.equal(0);

    expect(dynamicArr.pop()).to.equal(undefined);
    expect(dynamicArr.length).to.equal(0);

  });

  it('can `unshift()` into the front of the array', function () {

    dynamicArr.unshift(1);
    expect(dynamicArr.length).to.equal(1);
    expect(dynamicArr.read(0)).to.equal(1);

    dynamicArr.unshift(2);
    expect(dynamicArr.length).to.equal(2);
    expect(dynamicArr.read(0)).to.equal(2);
    expect(dynamicArr.read(1)).to.equal(1);

    dynamicArr.unshift(3);
    expect(dynamicArr.length).to.equal(3);
    expect(dynamicArr.read(0)).to.equal(3);
    expect(dynamicArr.read(1)).to.equal(2);
    expect(dynamicArr.read(2)).to.equal(1);

  });

  it('can `shift()` values off the front of the array', function () {

    dynamicArr.push(1);
    dynamicArr.push(2);
    dynamicArr.push(3);

    expect(dynamicArr.length).to.equal(3);

    expect(dynamicArr.shift()).to.equal(1);
    expect(dynamicArr.length).to.equal(2);

    expect(dynamicArr.shift()).to.equal(2);
    expect(dynamicArr.length).to.equal(1);

    expect(dynamicArr.shift()).to.equal(3);
    expect(dynamicArr.length).to.equal(0);

    expect(dynamicArr.shift()).to.equal(undefined);
    expect(dynamicArr.length).to.equal(0);

  });

  it('can find a value in the array using `indexOf`', function () {

    dynamicArr.push(1);
    dynamicArr.push(2);
    dynamicArr.push(3);

    expect(dynamicArr.indexOf(1)).to.equal(0);
    expect(dynamicArr.indexOf(2)).to.equal(1);
    expect(dynamicArr.indexOf(3)).to.equal(2);

    // For non-existent values, we'll return -1
    expect(dynamicArr.indexOf(4)).to.equal(-1);

  });

  it('will double in size and copy elements with `resize`', function () {

    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.data.length).to.equal(4);

    dynamicArr.push(10);
    dynamicArr.push(11);
    expect(dynamicArr.length).to.equal(2);

    dynamicArr.push(12);
    dynamicArr.push(13);
    expect(dynamicArr.length).to.equal(4);

    dynamicArr.resize();

    expect(dynamicArr.capacity).to.equal(8);
    expect(dynamicArr.data.length).to.equal(8);
    expect(dynamicArr.length).to.equal(4);

    expect(dynamicArr.read(0)).to.equal(10);
    expect(dynamicArr.read(1)).to.equal(11);
    expect(dynamicArr.read(2)).to.equal(12);
    expect(dynamicArr.read(3)).to.equal(13);
    expect(dynamicArr.read(4)).to.equal(undefined);
    expect(dynamicArr.data[4]).to.equal(undefined);

  });

  it('will automatically resize when capacity is reached', function () {

    dynamicArr.push(10);
    dynamicArr.push(11);
    dynamicArr.push(12);
    dynamicArr.push(13);
    dynamicArr.push(14);

    expect(dynamicArr.capacity).to.equal(8);
    expect(dynamicArr.data.length).to.equal(8);
    expect(dynamicArr.length).to.equal(5);

    dynamicArr.unshift(9);
    dynamicArr.unshift(8);
    dynamicArr.unshift(7);
    dynamicArr.unshift(6);

    expect(dynamicArr.capacity).to.equal(16);
    expect(dynamicArr.data.length).to.equal(16);
    expect(dynamicArr.length).to.equal(9);

    expect(dynamicArr.read(0)).to.equal(6);
    expect(dynamicArr.read(1)).to.equal(7);
    expect(dynamicArr.read(2)).to.equal(8);
    expect(dynamicArr.read(3)).to.equal(9);
    expect(dynamicArr.read(4)).to.equal(10);
    expect(dynamicArr.read(5)).to.equal(11);
    expect(dynamicArr.read(6)).to.equal(12);
    expect(dynamicArr.read(7)).to.equal(13);
    expect(dynamicArr.read(8)).to.equal(14);

  });

});
