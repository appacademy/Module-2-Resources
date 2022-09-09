const { expect } = require('chai');

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const { BinarySearchTree, TreeNode } = require('../binary-search-tree.js');

const {
  findMinBST, findMaxBST, findMinBT, findMaxBT,
  getHeight, countNodes, balancedTree, getParentNode,
  inOrderPredecessor, deleteNodeBST
} = require('../tree-practice.js')

describe('Binary Tree Practice', () => {

  let bstRoot;
  let bstRootBig;
  let bstRootUnbalanced;
  let btRoot;
  let btRootBig;
  let btRootUnbalanced;
  let rootNode;

  let rootNodeUnbalanced;

  // Initialize Binary Search Trees
  beforeEach(function () {

    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
    bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);

    //         8
    //       /   \
    //      3     10
    //    /   \     \
    //   2     5     11
    //  /    /  \     \
    // 1    4    7    12
    //          /      \
    //         6       15
    //                /
    //              14
    bstRootBig = new TreeNode(8);
    bstRootBig.left = new TreeNode(3);
    bstRootBig.left.left = new TreeNode(2);
    bstRootBig.left.left.left = new TreeNode(1);
    bstRootBig.left.right = new TreeNode(5);
    bstRootBig.left.right.left = new TreeNode(4);
    bstRootBig.left.right.right = new TreeNode(7);
    bstRootBig.left.right.right.left = new TreeNode(6);
    bstRootBig.right = new TreeNode(10);
    bstRootBig.right.right = new TreeNode(11);
    bstRootBig.right.right.right = new TreeNode(12);
    bstRootBig.right.right.right.right = new TreeNode(15);
    bstRootBig.right.right.right.right.left = new TreeNode(14);
    
    // 1
    //  \
    //   2
    //    \
    //     3
    //      \
    //       4
    //        \
    //         5
    //          \
    //           6
    //            \
    //             7
    bstRootUnbalanced = new TreeNode(1);
    bstRootUnbalanced.right = new TreeNode(2);
    bstRootUnbalanced.right.right = new TreeNode(3);
    bstRootUnbalanced.right.right.right = new TreeNode(4);
    bstRootUnbalanced.right.right.right.right = new TreeNode(5);
    bstRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    bstRootUnbalanced.right.right.right.right.right.right = new TreeNode(7);
  });

  // Initialize Binary Trees
  beforeEach(function () {
    //      1
    //    /   \
    //   2     3
    //  / \   / \
    // 4   5 6   7
    btRoot = new TreeNode(1);
    btRoot.left = new TreeNode(2);
    btRoot.left.left = new TreeNode(4);
    btRoot.left.right = new TreeNode(5);
    btRoot.right = new TreeNode(3);
    btRoot.right.left = new TreeNode(6);
    btRoot.right.right = new TreeNode(7);

    //        13
    //       /  \
    //      2    3
    //    /  \    \
    //   4    5    6
    //  /    / \    \
    // 7    8   9   10
    //         /     \
    //        11     12
    //              /
    //             1
    btRootBig = new TreeNode(13);
    btRootBig.left = new TreeNode(2);
    btRootBig.right = new TreeNode(3);
    btRootBig.left.left = new TreeNode(4);
    btRootBig.left.right = new TreeNode(5);
    btRootBig.right.right = new TreeNode(6);
    btRootBig.left.left.left = new TreeNode(7);
    btRootBig.left.right.left = new TreeNode(8);
    btRootBig.left.right.right = new TreeNode(9);
    btRootBig.right.right.right = new TreeNode(10);
    btRootBig.left.right.right.left = new TreeNode(11);
    btRootBig.right.right.right.right = new TreeNode(12);
    btRootBig.right.right.right.right.left = new TreeNode(1);
    
    // 4
    //  \
    //   3
    //    \
    //     2
    //      \
    //       1
    //        \
    //         7
    //          \
    //           6
    //            \
    //             5
    btRootUnbalanced = new TreeNode(4);
    btRootUnbalanced.right = new TreeNode(3);
    btRootUnbalanced.right.right = new TreeNode(2);
    btRootUnbalanced.right.right.right = new TreeNode(1);
    btRootUnbalanced.right.right.right.right = new TreeNode(7);
    btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);

  });

  describe('findMinBST', () => {

    it('should return the min value in a Binary Search Tree', function() {
      expect(findMinBST(bstRoot)).to.equal(1);
      expect(findMinBST(bstRootUnbalanced)).to.equal(1);
      expect(findMinBST(bstRootBig)).to.equal(1)
    });

    it('can be called on a subtree', function() {
      expect(findMinBST(bstRoot.left)).to.equal(1);
      expect(findMinBST(bstRoot.right)).to.equal(5);
      expect(findMinBST(bstRootUnbalanced.right.right)).to.equal(3);
      expect(findMinBST(bstRootBig.left)).to.equal(1);
      expect(findMinBST(bstRootBig.right)).to.equal(10);
    });

  });

  describe('findMaxBST', () => {

    it('should return the max value in a Binary Search Tree', function() {
      expect(findMaxBST(bstRoot)).to.equal(7);
      expect(findMaxBST(bstRootUnbalanced)).to.equal(7);
      expect(findMaxBST(bstRootBig)).to.equal(15);
    });

    it('can be called on a subtree', function() {
      expect(findMaxBST(bstRoot.left)).to.equal(3);
      expect(findMaxBST(bstRoot.right)).to.equal(7);
      expect(findMaxBST(bstRootUnbalanced.right.right)).to.equal(7);
      expect(findMaxBST(bstRootBig.left)).to.equal(7);
      expect(findMaxBST(bstRootBig.right)).to.equal(15);
    });

  });

  describe('findMinBT', () => {

    it('should return the minimum value in a Binary Tree', function() {
      expect(findMinBT(btRoot)).to.equal(1);

      expect(findMinBT(btRootUnbalanced)).to.equal(1);

      expect(findMinBT(btRootBig)).to.equal(1);
    });

    it('can be called on a subtree', function() {
      expect(findMinBT(btRoot.left)).to.equal(2);
      expect(findMinBT(btRoot.right)).to.equal(3);

      expect(findMinBT(btRootUnbalanced.right.right.right.right)).to.equal(5);

      expect(findMinBT(btRootBig.left)).to.equal(2);
      expect(findMinBT(btRootBig.right)).to.equal(1);
    });

  });

  describe('findMaxBT', () => {

    it('should return the max value in a Binary Tree', function() {
      expect(findMaxBT(btRoot)).to.equal(7);

      expect(findMaxBT(btRootUnbalanced)).to.equal(7);

      expect(findMaxBT(btRootBig)).to.equal(13);
    });

    it('can be called on a subtree', function() {
      expect(findMaxBT(btRoot.left)).to.equal(5);
      expect(findMaxBT(btRoot.right)).to.equal(7);

      expect(findMaxBT(btRootUnbalanced.right.right.right.right.right)).to.equal(6);

      expect(findMaxBT(btRootBig.left)).to.equal(11);
      expect(findMaxBT(btRootBig.right)).to.equal(12);
    });

  });

  describe('getHeight', () => {

    it('should return -1 if the node does not exist', function() {
      expect(getHeight(null)).to.equal(-1);
    });

    it("should return 0 if both the node's left and right trees are null", function() {
      expect(getHeight(bstRoot.right.right)).to.equal(0);
    });

    it('should work on a subtree', function() {
      expect(getHeight(bstRoot.left)).to.equal(1);
      expect(getHeight(bstRootUnbalanced.right)).to.equal(5);
      expect(getHeight(bstRootBig.left)).to.equal(3);
      expect(getHeight(bstRootBig.right)).to.equal(4);

      expect(getHeight(btRoot.left)).to.equal(1);
      expect(getHeight(btRootUnbalanced.right)).to.equal(5);
      expect(getHeight(btRootBig.left)).to.equal(3);
      expect(getHeight(btRootBig.right)).to.equal(4);
    });

  });

  describe('countNodes', () => {

    it('should return the number of nodes in a Binary Tree', function() {
      expect(countNodes(bstRoot)).to.equal(7);
      expect(countNodes(bstRootUnbalanced)).to.equal(7);
      expect(countNodes(bstRootBig)).to.equal(13);

      expect(countNodes(btRoot)).to.equal(7);
      expect(countNodes(btRootUnbalanced)).to.equal(7);
      expect(countNodes(btRootBig)).to.equal(13);
    });

    it('should work on a subtree', function() {
      expect(countNodes(bstRoot.left)).to.equal(3);
      expect(countNodes(bstRootUnbalanced.right)).to.equal(6);
      expect(countNodes(bstRootBig.left)).to.equal(7);
      expect(countNodes(bstRootBig.right)).to.equal(5);

      expect(countNodes(btRoot.left)).to.equal(3);
      expect(countNodes(btRootUnbalanced.right.right)).to.equal(5);
      expect(countNodes(btRootBig.left)).to.equal(7);
      expect(countNodes(btRootBig.right)).to.equal(5);
    });

  });

  describe('balancedTree', () => {

    it('should compare heights of the left and right subtrees', function() {
      expect(balancedTree(bstRoot)).to.be.true;
      expect(balancedTree(bstRootUnbalanced)).to.be.false;

      expect(balancedTree(btRoot)).to.be.true;
      expect(balancedTree(btRootUnbalanced)).to.be.false;
    });

    it('should work when starting on a subtree', function() {
      expect(balancedTree(bstRoot.left)).to.be.true;
      expect(balancedTree(bstRootUnbalanced.right)).to.be.false;

      expect(balancedTree(btRoot.right)).to.be.true;
      expect(balancedTree(btRootUnbalanced.right.right.right.right.right)).to.be.true;
    });
    
    it('should compare the heights of every node in the tree', function() {
      expect(balancedTree(bstRootBig)).to.be.false;
      expect(balancedTree(bstRootBig.left)).to.be.true;
      expect(balancedTree(bstRootBig.right)).to.be.false;
      expect(balancedTree(bstRootBig.right.right)).to.be.false;
      expect(balancedTree(bstRootBig.right.right.right)).to.be.false;
      expect(balancedTree(bstRootBig.right.right.right.right)).to.be.true;

      expect(balancedTree(btRootBig)).to.be.false;
      expect(balancedTree(btRootBig.left)).to.be.true;
      expect(balancedTree(btRootBig.right)).to.be.false;
      expect(balancedTree(btRootBig.right.right)).to.be.false;
      expect(balancedTree(btRootBig.right.right.right)).to.be.false;
      expect(balancedTree(btRootBig.right.right.right.right)).to.be.true;

    });

  });

  describe('getParentNode', () => {

    it('returns the parent node of the node with a given value', function() {
      expect(getParentNode(bstRoot, 1).val).to.equal(2);
      expect(getParentNode(bstRootUnbalanced, 6).val).to.equal(5);
      expect(getParentNode(bstRootBig, 5).val).to.equal(3);

      expect(getParentNode(btRoot, 6).val).to.equal(3);
      expect(getParentNode(btRootUnbalanced, 7).val).to.equal(1);
      expect(getParentNode(btRootBig, 11).val).to.equal(9);

    });

    it('returns null if the target is the root', function() {
      expect(getParentNode(bstRoot, 4)).to.equal(null);
      expect(getParentNode(bstRootUnbalanced, 1)).to.equal(null);
      expect(getParentNode(bstRootBig, 8)).to.equal(null);

      expect(getParentNode(btRoot, 1)).to.equal(null);
      expect(getParentNode(btRootUnbalanced, 4)).to.equal(null);
      expect(getParentNode(btRootBig, 13)).to.equal(null);

    });

    it('returns undefined if the target cannot be found', function() {
      expect(getParentNode(bstRoot, 9)).to.equal(undefined);
      expect(getParentNode(bstRootUnbalanced, 9)).to.equal(undefined);
      expect(getParentNode(bstRootBig, 9)).to.equal(undefined);

      expect(getParentNode(btRoot, 9)).to.equal(undefined);
      expect(getParentNode(btRootUnbalanced, 9)).to.equal(undefined);
      expect(getParentNode(btRootBig, 14)).to.equal(undefined);

    });

  });

  describe('inOrderPredecessor', () => {

    it('returns the in-order predecessor of the target node', function() {
      expect(inOrderPredecessor(bstRoot, 4)).to.equal(3);
      expect(inOrderPredecessor(bstRootUnbalanced, 6)).to.equal(5);
      expect(inOrderPredecessor(bstRootBig, 5)).to.equal(4);
      expect(inOrderPredecessor(bstRootBig, 10)).to.equal(8);

    });

    it('returns null if starting node is the first in-order node', function() {
      expect(inOrderPredecessor(bstRoot, 1)).to.equal(null);
      expect(inOrderPredecessor(bstRootUnbalanced, 1)).to.equal(null);
      expect(inOrderPredecessor(bstRootBig, 1)).to.equal(null);

    });

  });

  describe('deleteNodeBST', () => {

    it('correctly deletes a node with no children', function() {

      deleteNodeBST(bstRoot, 1);
      expect(bstRoot.left.left).to.equal(null);

      deleteNodeBST(bstRoot, 5);
      expect(bstRoot.right.left).to.equal(null);

      deleteNodeBST(bstRootBig, 1);
      expect(bstRootBig.left.left.left).to.equal(null);
      deleteNodeBST(bstRootBig, 2);
      expect(bstRootBig.left.left).to.equal(null);

    });

    it('correctly deletes a node with one child', function() {

      deleteNodeBST(bstRoot, 1);
      deleteNodeBST(bstRoot, 2);
      expect(bstRoot.left.val).to.equal(3);
      expect(bstRoot.left.left).to.equal(null);
      expect(bstRoot.left.right).to.equal(null);

      deleteNodeBST(bstRoot, 5);
      deleteNodeBST(bstRoot, 6);
      expect(bstRoot.right.val).to.equal(7);
      expect(bstRoot.right.left).to.equal(null);
      expect(bstRoot.right.right).to.equal(null);

      deleteNodeBST(bstRootUnbalanced, 3);
      expect(bstRootUnbalanced.right.right.val).to.equal(4);
      expect(bstRootUnbalanced.right.right.right.val).to.equal(5);
      expect(bstRootUnbalanced.right.right.right.right.val).to.equal(6);
      expect(bstRootUnbalanced.right.right.right.right.right.val).to.equal(7);

      deleteNodeBST(bstRootBig, 15);
      expect(bstRootBig.right.right.right.right.val).to.equal(14);

    });

    it('deletes a node with two children, replacing it with the in-order predecessor or successor', function() {

      deleteNodeBST(bstRoot, 6);
      expect(bstRoot.right.val).to.satisfy(function (num) {
        return (num === 5 || num === 7)
      });

      deleteNodeBST(bstRoot, 4);
      expect(bstRoot.val).to.satisfy(function (num) {
        return (num === 3 || num === 5)
      });
      expect(bstRoot.left.val).to.equal(2)
      
      deleteNodeBST(bstRootBig, 5);
      expect(bstRootBig.left.right.val).to.satisfy(function (num) {
        return (num === 4 || num === 6)
      });
      expect(bstRootBig.left.right.right.val).to.equal(7);

    });

    it('returns undefined if the node cannot be found', function() {

      expect(deleteNodeBST(bstRoot, 9)).to.equal(undefined);

    });

  });

});




