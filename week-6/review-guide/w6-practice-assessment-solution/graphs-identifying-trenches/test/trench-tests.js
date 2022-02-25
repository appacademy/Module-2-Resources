
const { expect } = require('chai');

const [identifyTrench, findNeighbors, trenchTraversal] = require('../identifying-trenches.js');

// NOTE: There are extra tests here for practice and learning
// The assessment will have fewer

describe('findNeighbors', () => {

  const sonar_data = [
    [-5, -5, -5],
    [-6, -5, -8],
    [-5, -7, -5]
  ];

  it('Only returns NSEW neighbors depth < -5', () => {

    const neighbors = findNeighbors([1, 1], sonar_data);

    expect(neighbors.length).to.equal(3);
    expect(neighbors).to.deep.include.members([[2, 1], [1, 0], [1, 2]]);

  });

  it('Can find the correct neighbors in a corner', () => {

    const NWNeighbors = findNeighbors([0, 0], sonar_data);
    const SENeighbors = findNeighbors([2, 2], sonar_data);

    expect(NWNeighbors.length).to.equal(1);
    expect(NWNeighbors).to.deep.include.members([[1, 0]]);

    expect(SENeighbors.length).to.equal(2);
    expect(SENeighbors).to.deep.include.members([[2, 1], [1, 2]]);

  });

});

describe('trenchTraversal', () => {

  const sonar_1 = [
    [-5, -5, -5, -5, -5],
    [-5, -8, -8, -9, -7],
    [-5, -5, -5, -5, -8],
    [-5, -5, -5, -5, -5]
  ];

  const sonar_2 = [
    [-5, -5, -5, -6, -5],
    [-5, -7, -8, -9, -5],
    [-5, -5, -5, -8, -5],
    [-5, -5, -5, -5, -5]
  ];

  const sonar_3 = [
    [-5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -9, -9, -5, -5],
    [-5, -5, -5, -5, -5]
  ];

  it('Does not bother to traverse if the start is too shallow', () => {

    let visited = new Set();
    const shallowStart = trenchTraversal([0, 0], sonar_1, visited);

    expect(shallowStart).to.equal(false);

  });

  it('Can traverse a valid trench from the end and return true', () => {

    let visited = new Set();
    const validTrench = trenchTraversal([1, 1], sonar_1, visited);

    expect(validTrench).to.equal(true);

  });

    it('Can traverse a valid trench from the middle and return true', () => {

    let visited = new Set();
    const validTrench = trenchTraversal([1, 3], sonar_1, visited);

    expect(validTrench).to.equal(true);

  });

  it('Can traverse a trench with a "Y" and return false', () => {

    let visited = new Set();
    const yTrench = trenchTraversal([1, 1], sonar_2, visited)

    expect(yTrench).to.equal(false)

  });

  it('Can traverse a trench that is too short and return false', () => {

    let visited = new Set();
    const shortTrench = trenchTraversal([2, 3], sonar_2, visited)

    expect(shortTrench).to.equal(false)

  });

});

describe('identifyTrench', () => {

  const sonar_1 = [
    [-5, -5, -5, -5, -5],
    [-5, -8, -8, -9, -7],
    [-5, -5, -5, -5, -8],
    [-5, -5, -5, -5, -5]
  ];

  const sonar_2 = [
    [-5, -5, -5, -6, -5],
    [-5, -7, -8, -9, -5],
    [-5, -5, -5, -8, -5],
    [-5, -5, -5, -5, -5]
  ];

  const sonar_3 = [
    [-5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -9, -9, -5, -5],
    [-5, -5, -5, -5, -5]
  ];

  const sonar_4 = [
    [-5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -3, -3, -5, -5],
    [-5, -5, -5, -5, -5]
  ];

  const sonar_5 = [
    [-7, -8, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -3, -9, -8, -5],
    [-5, -5, -5, -7, -5]
  ];

  it('Finds and identifies a valid trench', () => {

    const validResult = identifyTrench(sonar_1);

    expect(validResult).to.equal(true);

  });

  it('Rejects trenches that have a Y', () => {

    const rejectY = identifyTrench(sonar_2);

    expect(rejectY).to.equal(false);

  });

  it('Rejects trenches that are too short', () => {

    const rejectShort = identifyTrench(sonar_3);

    expect(rejectShort).to.equal(false);

  });

  it('Handles data with no trenches', () => {

    const noTrench = identifyTrench(sonar_4);

    expect(noTrench).to.equal(false);

  });

  it('Finds a valid trench after rejecting an invalid one', () => {

    const secondTrench = identifyTrench(sonar_5);

    expect(secondTrench).to.equal(true);

  });

});