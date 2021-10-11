const { expect } = require('chai');

const [linearSearch, binarySearch] = require("../binary-search.js");

describe ('Search', function () {

  let arr;

  before(function () {

    arr = [];

    for (let i = 0 ; i < 1000000 ; i++) {
      arr.push(i);
    }

  });

  it('performs a linear search', function () {

    expect(linearSearch(arr, 100)).to.equal(100);

    expect(linearSearch(arr, 1000000)).to.equal(-1);

  });

  it('performs a binary search', function () {

    expect(binarySearch(arr, 100)).to.equal(100);

    expect(binarySearch(arr, 1000000)).to.equal(-1);

  });

  it('performs at least 500 linear searches in under 1 second', function () {

    const timeout = 1000;
    let linearSearches = 0;
    let startTime = Date.now();
    let i = 1;

    while (i < arr.length) {
      expect(linearSearch(arr, i)).to.equal(i);
      expect(linearSearch(arr, -i)).to.equal(-1);

      linearSearches += 2;

      if (Date.now() - startTime > timeout || linearSearches > 500) {
        break;
      }
    }

    expect(linearSearches).to.be.above(500);

  });

  it('performs at least 100000 binary searches in under 1 second', function () {

    const timeout = 1000;
    let startTime = Date.now();
    let i = 1;
    let binarySearches = 0;

    while (i < arr.length) {
      expect(binarySearch(arr, i)).to.equal(i);
      expect(binarySearch(arr, -i)).to.equal(-1);

      binarySearches += 2;

      if (Date.now() - startTime > timeout || binarySearches > 100000) {
        break;
      }
    }

    expect(binarySearches).to.be.above(100000);
  });


});

