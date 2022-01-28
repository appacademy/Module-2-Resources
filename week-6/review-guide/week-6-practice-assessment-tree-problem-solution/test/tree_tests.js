
const { expect } = require('chai');

const assert = require('assert');

try {
  ({ TreeNode, findMaxEachLevel } = require('../tree_practice'));
} catch (e) { console.log("Failed to load dependencies") }

describe('Root Only', () => {

  const rootOnly = new TreeNode(8, null, null);

  context('Largest at level', () => {

    it(`Produces an array with the largest element in each level`, () => {

      const maxAtEachLevel = findMaxEachLevel(rootOnly)

      expect(maxAtEachLevel).to.deep.equal([ 8 ])

    });

  });

});

describe('Left Only', () => {

  const leftOnly = new TreeNode(5, null, null);
  leftOnly.left = new TreeNode(9, null, null);
  leftOnly.left.left = new TreeNode(7, null, null);
  leftOnly.left.left.left = new TreeNode(8, null, null);

  context('Largest at level', () => {

    it(`Produces an array with the largest element in each level`, () => {

      const maxAtEachLevel = findMaxEachLevel(leftOnly)

      expect(maxAtEachLevel).to.deep.equal([ 5, 9, 7, 8 ])

    });

  });

});

describe('Right Only', () => {

  const rightOnly = new TreeNode(8, null, null);
  rightOnly.right = new TreeNode(2, null, null);
  rightOnly.right.right = new TreeNode(4, null, null);
  rightOnly.right.right.right = new TreeNode(6, null, null);

  context('Largest at level', () => {

    it(`Produces an array with the largest element in each level`, () => {

      const maxAtEachLevel = findMaxEachLevel(rightOnly)

      expect(maxAtEachLevel).to.deep.equal([ 8, 2, 4, 6 ])

    });

  });

});

describe('Simple Tree', () => {

  const simpleTree = new TreeNode(4, null, null);
  simpleTree.right = new TreeNode(1, null, null);
  simpleTree.left = new TreeNode(3, null, null);
  simpleTree.right.right = new TreeNode(2, null, null);

  context('Largest at level', () => {

    it(`Produces an array with the largest element in each level`, () => {

      const maxAtEachLevel = findMaxEachLevel(simpleTree)

      expect(maxAtEachLevel).to.deep.equal([ 4, 3, 2 ])

    });

  });

});

describe('Complex Tree', () => {

  const complexTree = new TreeNode(5, null, null);
  complexTree.left = new TreeNode(4, null, null);
  complexTree.left.left = new TreeNode(1, null, null);
  complexTree.left.right = new TreeNode(3, null, null);
  complexTree.left.right.left = new TreeNode(8, null, null);
  complexTree.right = new TreeNode(7, null, null);
  complexTree.right.right = new TreeNode(2, null, null);
  complexTree.right.right.left = new TreeNode(4, null, null);
  complexTree.right.right.right = new TreeNode(9, null, null);
  complexTree.right.right.right.left = new TreeNode(2, null, null);
  complexTree.right.right.right.right = new TreeNode(4, null, null);

  context('Largest at level', () => {

    it(`Produces an array with the largest element in each level`, () => {

      const maxAtEachLevel = findMaxEachLevel(complexTree)

      expect(maxAtEachLevel).to.deep.equal([ 5, 7, 3, 9, 4 ])

    });

  });

});

describe('Negative Numbers', () => {

  const negativeTree = new TreeNode(-7, null, null);
  negativeTree.left = new TreeNode(-4, null, null);
  negativeTree.left.left = new TreeNode(5, null, null);
  negativeTree.left.right = new TreeNode(-9, null, null);
  negativeTree.left.right.left = new TreeNode(4, null, null);
  negativeTree.right = new TreeNode(6, null, null);
  negativeTree.right.right = new TreeNode(-1, null, null);
  negativeTree.right.right.left = new TreeNode(-6, null, null);
  negativeTree.right.right.right = new TreeNode(8, null, null);
  negativeTree.right.right.right.left = new TreeNode(4, null, null);
  negativeTree.right.right.right.right = new TreeNode(-3, null, null);

  context('Largest at level', () => {

    it(`Produces an array with the largest element in each level`, () => {

      const maxAtEachLevel = findMaxEachLevel(negativeTree)

      expect(maxAtEachLevel).to.deep.equal([ -7, 6, 5, 8, 4 ])

    });

  });

});
