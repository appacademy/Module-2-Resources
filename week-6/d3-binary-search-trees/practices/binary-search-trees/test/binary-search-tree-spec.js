const { expect } = require('chai');

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const { BinarySearchTree } = require('../binary-search-tree.js');

describe('Binary Search Tree', () => {

  let bst;

  beforeEach(function () {

    bst = new BinarySearchTree();

  });

  describe('constructor', () => {
    it('has a default root of null', () => {

      expect(bst.root).to.equal(null);

    });
  });

  describe('Part 1: insert(val)', () => {
    it('inserts values at the root of an empty BST', () => {

      bst.insert(4);

      expect(bst.root.val).to.equal(4);
      expect(bst.root.left).to.equal(null);
      expect(bst.root.right).to.equal(null);

    });

    it('inserts smaller values to the left of tree nodes', () => {

      bst.insert(4);
      bst.insert(2);

      expect(bst.root.val).to.equal(4);
      expect(bst.root.right).to.equal(null);

      let leftNode = bst.root.left;
      expect(leftNode.val).to.equal(2);
      expect(leftNode.left).to.equal(null);
      expect(leftNode.right).to.equal(null);

    });

    it('inserts larger values to the right of tree nodes', () => {

      bst.insert(4);
      bst.insert(6);

      expect(bst.root.val).to.equal(4);
      expect(bst.root.left).to.equal(null);

      let rightNode = bst.root.right;
      expect(rightNode.val).to.equal(6);
      expect(rightNode.left).to.equal(null);
      expect(rightNode.right).to.equal(null);

    });

    it('inserts multiple values down the tree if there is no room', () => {

      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);

      expect(bst.root.val).to.equal(4);

      let leftNode = bst.root.left;
      expect(leftNode.val).to.equal(2);
      expect(leftNode.left.val).to.equal(1);
      expect(leftNode.right.val).to.equal(3);

      let rightNode = bst.root.right;
      expect(rightNode.val).to.equal(6);
      expect(rightNode.left.val).to.equal(5);
      expect(rightNode.right.val).to.equal(7);

    });

    it('inserts strictly ascending values down the right', () => {

      bst.insert(1);
      bst.insert(2);
      bst.insert(3);
      bst.insert(4);
      bst.insert(5);
      bst.insert(6);
      bst.insert(7);

      let currentNode = bst.root;
      expect(currentNode.val).to.equal(1);
      expect(currentNode.left).to.equal(null);

      currentNode = currentNode.right;
      expect(currentNode.val).to.equal(2);
      expect(currentNode.left).to.equal(null);

      currentNode = currentNode.right;
      expect(currentNode.val).to.equal(3);
      expect(currentNode.left).to.equal(null);

      currentNode = currentNode.right;
      expect(currentNode.val).to.equal(4);
      expect(currentNode.left).to.equal(null);

      currentNode = currentNode.right;
      expect(currentNode.val).to.equal(5);
      expect(currentNode.left).to.equal(null);

      currentNode = currentNode.right;
      expect(currentNode.val).to.equal(6);
      expect(currentNode.left).to.equal(null);

      currentNode = currentNode.right;
      expect(currentNode.val).to.equal(7);
      expect(currentNode.left).to.equal(null);

    });

    it('inserts strictly descending values down the left', () => {

      bst.insert(7);
      bst.insert(6);
      bst.insert(5);
      bst.insert(4);
      bst.insert(3);
      bst.insert(2);
      bst.insert(1);

      let currentNode = bst.root;
      expect(currentNode.val).to.equal(7);
      expect(currentNode.right).to.equal(null);

      currentNode = currentNode.left;
      expect(currentNode.val).to.equal(6);
      expect(currentNode.right).to.equal(null);

      currentNode = currentNode.left;
      expect(currentNode.val).to.equal(5);
      expect(currentNode.right).to.equal(null);

      currentNode = currentNode.left;
      expect(currentNode.val).to.equal(4);
      expect(currentNode.right).to.equal(null);

      currentNode = currentNode.left;
      expect(currentNode.val).to.equal(3);
      expect(currentNode.right).to.equal(null);

      currentNode = currentNode.left;
      expect(currentNode.val).to.equal(2);
      expect(currentNode.right).to.equal(null);

      currentNode = currentNode.left;
      expect(currentNode.val).to.equal(1);
      expect(currentNode.right).to.equal(null);

    });
  });
  describe('Part 2: search', () => {
    beforeEach(function () {

      bst = new BinarySearchTree();
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);

    });

    it('can find values in the tree', () => {

      expect(bst.search(1)).to.be.true;
      expect(bst.search(2)).to.be.true;
      expect(bst.search(3)).to.be.true;
      expect(bst.search(4)).to.be.true;
      expect(bst.search(5)).to.be.true;
      expect(bst.search(6)).to.be.true;
      expect(bst.search(7)).to.be.true;

    });

    it('will return false if values are not in the tree', () => {

      expect(bst.search(0)).to.be.false;
      expect(bst.search(8)).to.be.false;
      expect(bst.search(9)).to.be.false;

    });
  });
  describe('Part 3: recursive traversals', () => {
    let consoleSpy;

    beforeEach(function () {

      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7

      bst = new BinarySearchTree();
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);

      consoleSpy = chai.spy.on(console, 'log');

    });

    afterEach(() => {
      chai.spy.restore(console, 'log');
    });

    it('preOrderTraversal - can print nodes in pre-order', () => {

      bst.preOrderTraversal();

      expect(consoleSpy).on.nth(1).be.called.with(4);
      expect(consoleSpy).on.nth(2).be.called.with(2);
      expect(consoleSpy).on.nth(3).be.called.with(1);
      expect(consoleSpy).on.nth(4).be.called.with(3);
      expect(consoleSpy).on.nth(5).be.called.with(6);
      expect(consoleSpy).on.nth(6).be.called.with(5);
      expect(consoleSpy).on.nth(7).be.called.with(7);

    });

    it('inOrderTraversal - can print nodes in in-order', () => {

      bst.inOrderTraversal();

      expect(consoleSpy).on.nth(1).be.called.with(1);
      expect(consoleSpy).on.nth(2).be.called.with(2);
      expect(consoleSpy).on.nth(3).be.called.with(3);
      expect(consoleSpy).on.nth(4).be.called.with(4);
      expect(consoleSpy).on.nth(5).be.called.with(5);
      expect(consoleSpy).on.nth(6).be.called.with(6);
      expect(consoleSpy).on.nth(7).be.called.with(7);

    });

    it('postOrderTraversal - can print nodes in post-order', () => {

      bst.postOrderTraversal();

      expect(consoleSpy).on.nth(1).be.called.with(1);
      expect(consoleSpy).on.nth(2).be.called.with(3);
      expect(consoleSpy).on.nth(3).be.called.with(2);
      expect(consoleSpy).on.nth(4).be.called.with(5);
      expect(consoleSpy).on.nth(5).be.called.with(7);
      expect(consoleSpy).on.nth(6).be.called.with(6);
      expect(consoleSpy).on.nth(7).be.called.with(4);

    });
  
  });
  
  describe('Part 4: iterative traversals', () => {
    let consoleSpy;

    beforeEach(function () {

      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7

      bst = new BinarySearchTree();
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);

      consoleSpy = chai.spy.on(console, 'log');

    });

    afterEach(() => {
      chai.spy.restore(console, 'log');
    });

    it('breadthFirstTraversal - can print nodes in breadth-first order', () => {

      bst.breadthFirstTraversal();

      expect(consoleSpy).on.nth(1).be.called.with(4);
      expect(consoleSpy).on.nth(2).be.called.with(2);
      expect(consoleSpy).on.nth(3).be.called.with(6);
      expect(consoleSpy).on.nth(4).be.called.with(1);
      expect(consoleSpy).on.nth(5).be.called.with(3);
      expect(consoleSpy).on.nth(6).be.called.with(5);
      expect(consoleSpy).on.nth(7).be.called.with(7);

    });

    it('depthFirstTraversal - can print nodes in depth-first order', () => {

      bst.depthFirstTraversal();

      expect(consoleSpy).on.nth(1).be.called.with(4);
      expect(consoleSpy).on.nth(2).be.called.with(6);
      expect(consoleSpy).on.nth(3).be.called.with(7);
      expect(consoleSpy).on.nth(4).be.called.with(5);
      expect(consoleSpy).on.nth(5).be.called.with(2);
      expect(consoleSpy).on.nth(6).be.called.with(3);
      expect(consoleSpy).on.nth(7).be.called.with(1);

    });

  });

});