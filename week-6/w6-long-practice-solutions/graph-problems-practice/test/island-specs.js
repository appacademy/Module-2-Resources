const { expect } = require('chai');

const [getNeighbors, islandSize] = require('../island.js');

describe('getNeighbors', () => {

  let matrix;

  beforeEach(function () {

    matrix = [
        [1,1,1,0,0],
        [0,1,1,0,1],
        [0,1,1,0,1],
    ]

  });

  it('can return adjacent neighbors that contain a 1', () => {

    expect(getNeighbors(1, 1, matrix)).to.have.deep.members([[0, 1], [1, 2], [2, 1]])

  });

  it('can return neighbors from the corners', () => {

    expect(getNeighbors(0, 0, matrix)).to.have.deep.members([[0, 1]]);

    expect(getNeighbors(2, 4, matrix)).to.have.deep.members([[1, 4]]);

  });

  it('will return neighbors from 0s', () => {

    expect(getNeighbors(1, 0, matrix)).to.have.deep.members([[0, 0], [1, 1]]);

  });


});

describe('islandSize', () => {

  let matrix;

  beforeEach(function () {

    matrix = [
        [1,1,1,0,0],
        [0,1,1,0,1],
        [0,1,1,0,1],
    ]

  });

  it('will return the size of islands consisting of adjacent 1s', () => {

    expect(islandSize(1, 1, matrix)).to.equal(7);

  });

  it('can count different islands in the same matrix', () => {

    expect(islandSize(2, 4, matrix)).to.equal(2);

  });



});

