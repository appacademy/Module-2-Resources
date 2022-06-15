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
  let bstRootUnbalanced;
  let btRoot;
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

    });

    it('can be called on a subtree', function() {
      expect(findMinBST(bstRoot.left)).to.equal(1);
      expect(findMinBST(bstRoot.right)).to.equal(5);
      expect(findMinBST(bstRootUnbalanced.right.right)).to.equal(3);
    });

  });

  describe('findMaxBST', () => {

    it('should return the max value in a Binary Search Tree', function() {

      expect(findMaxBST(bstRoot)).to.equal(7);
      expect(findMaxBST(bstRootUnbalanced)).to.equal(7);

    });

    it('can be called on a subtree', function() {
      expect(findMaxBST(bstRoot.left)).to.equal(3);
      expect(findMaxBST(bstRoot.right)).to.equal(7);
      expect(findMaxBST(bstRootUnbalanced.right.right)).to.equal(7);
    });

  });

  describe('findMinBT', () => {

    it('should return the minimum value in a Binary Tree', function() {

      expect(findMinBT(btRoot)).to.equal(1);
      expect(findMinBT(btRootUnbalanced)).to.equal(1);

    });

    it('can be called on a subtree', function() {
      expect(findMinBT(btRoot.left)).to.equal(2);
      expect(findMinBT(btRoot.right)).to.equal(3);
      expect(findMinBT(btRootUnbalanced.right.right.right.right)).to.equal(5);
    });

  });

  describe('findMaxBT', () => {

    it('should return the max value in a Binary Tree', function() {

      expect(findMaxBT(btRoot)).to.equal(7);
      expect(findMaxBT(btRootUnbalanced)).to.equal(7);

    });

    it('can be called on a subtree', function() {
      expect(findMaxBT(btRoot.left)).to.equal(5);
      expect(findMaxBT(btRoot.right)).to.equal(7);
      expect(findMaxBT(btRootUnbalanced.right.right.right.right.right)).to.equal(6);
    });

  });

  describe('getHeight', () => {

    it('should return the height of a Binary Tree', function() {
      expect(getHeight(bstRoot)).to.equal(2);
      expect(getHeight(bstRootUnbalanced)).to.equal(6);

      expect(getHeight(btRoot)).to.equal(2);
      expect(getHeight(btRootUnbalanced)).to.equal(6);
    });

    it('should work on a subtree', function() {
      expect(getHeight(bstRoot.left)).to.equal(1);
      expect(getHeight(bstRootUnbalanced.right)).to.equal(5);

      expect(getHeight(btRoot.left)).to.equal(1);
      expect(getHeight(btRootUnbalanced.right)).to.equal(5);
    });

  });

  describe('countNodes', () => {

    it('should return the number of nodes in a Binary Tree', function() {
      expect(countNodes(bstRoot)).to.equal(7);
      expect(countNodes(bstRootUnbalanced)).to.equal(7);

      expect(countNodes(btRoot)).to.equal(7);
      expect(countNodes(btRootUnbalanced)).to.equal(7);
    });

    it('should work on a subtree', function() {
      expect(countNodes(bstRoot.left)).to.equal(3);
      expect(countNodes(bstRootUnbalanced.right)).to.equal(6);

      expect(countNodes(btRoot.left)).to.equal(3);
      expect(countNodes(btRootUnbalanced.right.right)).to.equal(5);
    });

  });

  describe('balancedTree', () => {

    it('should determine whether a binary tree is balanced or not', function() {
      expect(balancedTree(bstRoot)).to.be.true;
      expect(balancedTree(bstRootUnbalanced)).to.be.false;

      expect(balancedTree(btRoot)).to.be.true;
      expect(balancedTree(btRootUnbalanced)).to.be.false;
    });

    it('should work on a subtree', function() {
      expect(balancedTree(bstRoot.left)).to.be.true;
      expect(balancedTree(bstRootUnbalanced.right)).to.be.false;

      expect(balancedTree(btRoot.right)).to.be.true;
      expect(balancedTree(btRootUnbalanced.right.right.right.right.right.right)).to.be.true;
    });

  });

  describe('getParentNode', () => {

    it('returns the parent node of the node with a given value', function() {
      expect(getParentNode(bstRoot, 1).val).to.equal(2);
      expect(getParentNode(bstRootUnbalanced, 6).val).to.equal(5);
      expect(getParentNode(btRoot, 6).val).to.equal(3);
      expect(getParentNode(btRootUnbalanced, 7).val).to.equal(1);

    });

    it('returns null if the target is the root', function() {
      expect(getParentNode(bstRoot, 4)).to.equal(null);
      expect(getParentNode(bstRootUnbalanced, 1)).to.equal(null);
      expect(getParentNode(btRoot, 1)).to.equal(null);
      expect(getParentNode(btRootUnbalanced, 4)).to.equal(null);

    });

    it('returns undefined if the target cannot be found', function() {
      expect(getParentNode(bstRoot, 9)).to.equal(undefined);
      expect(getParentNode(bstRootUnbalanced, 9)).to.equal(undefined);
      expect(getParentNode(btRoot, 9)).to.equal(undefined);
      expect(getParentNode(btRootUnbalanced, 9)).to.equal(undefined);

    });

  });

  describe('inOrderPredecessor', () => {

    it('returns the in-order predecessor of the target node', function() {
      expect(inOrderPredecessor(bstRoot, 4)).to.equal(3);
      expect(inOrderPredecessor(bstRootUnbalanced, 6)).to.equal(5);

    });

    it('returns null for the first in-order node', function() {
      expect(inOrderPredecessor(bstRoot, 1)).to.equal(null);
      expect(inOrderPredecessor(bstRootUnbalanced, 1)).to.equal(null);

    });

  });

  describe('deleteNodeBST', () => {

    it('correctly deletes a node with no children', function() {

      deleteNodeBST(bstRoot, 1);
      expect(bstRoot.left.left).to.equal(null);

      deleteNodeBST(bstRoot, 5);
      expect(bstRoot.right.left).to.equal(null);

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

    });

    it('correctly deletes a node with two children, replacing with the in-order predecessor', function() {

      deleteNodeBST(bstRoot, 6);
      expect(bstRoot.right.val).to.equal(5);
      expect(bstRoot.right.left).to.equal(null);
      expect(bstRoot.right.right.val).to.equal(7);

      deleteNodeBST(bstRoot, 4);
      expect(bstRoot.val).to.equal(3);
      expect(bstRoot.left.val).to.equal(2);
      expect(bstRoot.left.left.val).to.equal(1);
      expect(bstRoot.left.right).to.equal(null);

    });

    it('returns undefined if the node cannot be found', function() {

      expect(deleteNodeBST(bstRoot, 9)).to.equal(undefined);

    });

  });

});