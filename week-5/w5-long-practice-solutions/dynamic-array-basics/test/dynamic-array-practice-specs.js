const { expect } = require('chai');
const DynamicArray = require('../dynamic-array.js');
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

describe('Dynamic array', () => {

  let dynamicArr;
  let noUnshiftSpy = chai.spy.on(Array.prototype, "unshift");

  beforeEach(function () {
    
    dynamicArr = new DynamicArray();


  });

  it('has data, capacity and length properties', () => {

    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.data instanceof Array).to.be.true;
    expect(dynamicArr.data.length).to.deep.equal(4);

  });


  it('can be initialized to different size', function () {

    dynamicArr = new DynamicArray(8);

    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.capacity).to.equal(8);
    expect(dynamicArr.data.length).to.deep.equal(8);

  });


  it('can read values in the array', function () {

    dynamicArr.data[0] = 99;
    dynamicArr.length = 1;

    expect(dynamicArr.read(0)).to.equal(99);
    expect(dynamicArr.read(1)).to.equal(undefined);
  });



  it('can add values to the front using unshift', function () {

    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.capacity).to.equal(4);

    dynamicArr.unshift(1);

    expect(dynamicArr.length).to.equal(1);
    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.data[0]).to.deep.equal(1);

    dynamicArr.unshift(2);

    expect(dynamicArr.length).to.equal(2);
    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.data[0]).to.deep.equal(2);
    expect(dynamicArr.data[1]).to.deep.equal(1);

    dynamicArr.unshift(3);

    expect(dynamicArr.length).to.equal(3);
    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.data[0]).to.deep.equal(3);
    expect(dynamicArr.data[1]).to.deep.equal(2);
    expect(dynamicArr.data[2]).to.deep.equal(1);

    expect(noUnshiftSpy).to.have.not.been.called()
  });

});

