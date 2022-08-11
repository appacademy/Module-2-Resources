const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  //!!START
  if (rootNode.left) {
    return findMinBST(rootNode.left)
  }

  return rootNode.val;
  //!!END
}

function findMaxBST (rootNode) {
  //!!START
  if (rootNode.right) {
    return findMaxBST(rootNode.right)
  }

  return rootNode.val;
  //!!END
}

function findMinBT (rootNode) {
  //!!START
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;
  //!!END
}

function findMaxBT (rootNode) {
  //!!START
  let min = rootNode.val;

  if (rootNode.left) min = Math.max(min, findMaxBT(rootNode.left));
  if (rootNode.right) min = Math.max(min, findMaxBT(rootNode.right));

  return min;
  //!!END
}

function getHeight (rootNode) {
  //!!START
  if (!rootNode) return 0;

  if (!rootNode.left && !rootNode.right) return 0;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
  //!!END
}

function countNodes (rootNode) {
  //!!START
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
  //!!END
}

function balancedTree (rootNode) {
  //!!START
  return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);
  //!!END
}

function getParentNode (rootNode, target) {
  //!!START
  if (rootNode.val === target) return null;

  let stack = [rootNode];

  while (stack.length > 0) {
    let current = stack.pop();

    if ((current.left && current.left.val === target) ||
        (current.right && current.right.val === target)) {
      return current;
    }

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return undefined;
  //!!END
}

function inOrderPredecessor (rootNode, target) {
  //!!START
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {

    if (current) {
      stack.push(current);
      current = current.left;

    } else if (!current && stack.length > 0) {
      current = stack.pop();
      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;

    } else {
      break;
    }
  }
  //!!END
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

  //!!START SILENT
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;

  // Set target based on parent
  let targetNode;
  let isLeftChild = false;
  if (!parentNode) {
    targetNode = rootNode;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeftChild = true;
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  } else {
    throw Error("Algorithm Error: This should never happen");
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) return null;

  // Case 1: Zero children:
  //   set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) parentNode.left = null;
    else parentNode.right = null;
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, predecessor);
    targetNode.val = predecessor;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeftChild) parentNode.left = targetNode.left;
      else parentNode.right = targetNode.left;
    } else {
      if (isLeftChild) parentNode.left = targetNode.right;
      else parentNode.right = targetNode.right;
    }
  }
  //!!END
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