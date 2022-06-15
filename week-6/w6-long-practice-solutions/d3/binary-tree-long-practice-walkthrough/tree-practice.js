const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
 if (rootNode.left) return findMinBST(rootNode.left)
 return rootNode.val
}

function findMaxBST (rootNode) {
  if (rootNode.right) return findMaxBST(rootNode.right)
  return rootNode.val
}

function findMinBT (rootNode) {
  const stack = [rootNode]

  let min = Infinity

  while (stack.length) {
    const current = stack.pop()

    if (min > current.val) min = current.val

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }

  return min
}

function findMaxBT (rootNode) {
  const stack = [rootNode]

  let max = -Infinity

  while (stack.length) {
    const current = stack.pop()

    max = Math.max(max, current.val)

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }

  return max
}

function getHeight (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
