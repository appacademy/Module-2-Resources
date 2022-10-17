
const { expect } = require('chai');

const [identifyPath, findNeighbors, pathTraversal] = require('../hiking-mountains.js');

describe('findNeighbors', () => {

  const elevation_data = [
    [1, 2, 4],
    [4, 5, 9],
    [5, 7, 6]
  ];

  it('Finds neighbors 1 different in all 8 directions', () => {

    const neighbors = findNeighbors([1, 1], elevation_data);

    expect(neighbors.length).to.equal(4);
    expect(neighbors).to.deep.include.members([ [ 0, 2 ], [ 1, 0 ], [ 2, 0 ], [ 2, 2 ] ]);

  });

  it('Can find the correct neighbors in a corner', () => {

    const SWNeighbors = findNeighbors([2, 0], elevation_data);
    const NENeighbors = findNeighbors([0, 2], elevation_data);

    expect(SWNeighbors.length).to.equal(2);
    expect(SWNeighbors).to.deep.include.members([ [ 1, 0 ], [ 1, 1 ] ]);

    expect(NENeighbors.length).to.equal(1);
    expect(NENeighbors).to.deep.include.members([ [ 1, 1 ] ]);

  });

});

describe('pathTraversal', () => {

  const mountain_1 = [
    [2, 1, 2, 1, 1],
    [3, 7, 1, 3, 1],
    [4, 6, 2, 1, 1],
    [1, 5, 1, 0, 1]
  ];

  const mountain_2 = [
    [1, 1, 9, 1, 1],
    [1, 6, 5, 4, 8],
    [0, 1, 5, 1, 3],
    [1, 2, 3, 4, 1]
  ];

  it('returns true for a traversable path to the top', () => {

    let visited = new Set();
    const traversable = pathTraversal([3, 3], mountain_1, visited, 7);

    expect(traversable).to.equal(true);

  });

    it('returns false if a path does not reach the top', () => {

    let visited = new Set();
    const notTraversable = pathTraversal([2, 0], mountain_2, visited, 9);

    expect(notTraversable).to.equal(false);

  });

});

describe('identifyPath', () => {

  const mountain_1 = [
    [2, 4, 4, 5, 2],
    [1, 4, 6, 4, 1],
    [1, 4, 7, 3, 1],
    [4, 4, 0, 1, 2],
  ];

    const mountain_2 = [
    [2, 0, 6, 2, 1],
    [1, 6, 3, 7, 0],
    [0, 6, 4, 6, 2],
    [6, 6, 5, 0, 1],
  ];

  it('identifies the correct path to the top with 1 choice', () => {

    const southPath = identifyPath(mountain_1);

    expect(southPath).to.deep.equal([3, 2]);

  });

  it('identifies the correct path to the top with 4 choices', () => {

    const eastPath = identifyPath(mountain_2);

    expect(eastPath).to.deep.equal([1, 4]);

  });

});
