const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (rootNode.left) return findMinBST(rootNode.left);
  return rootNode.val;
}

function findMaxBST(rootNode) {
  if (rootNode.right) return findMaxBST(rootNode.right);
  return rootNode.val;
}

// iterative
function findMinBT(rootNode) {
  const stack = [rootNode];

  let min = Infinity;

  while (stack.length) {
    const node = stack.pop();

    // if (min > node.val) min = node.val;
    min = Math.min(min, node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return min;
}

// recursive
function findMinBT(rootNode) {
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;
}

// iterative
function findMaxBT(rootNode) {
  const stack = [rootNode];

  let max = -Infinity;

  while (stack.length) {
    const node = stack.pop();

    // if (max > node.val) max = node.val;
    max = Math.max(max, node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return max;
}
// recursive
function findMaxBT(rootNode) {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;
}

// iterative
function countNodes(rootNode) {
  const queue = [rootNode];

  let count = 0;

  while (queue.length) {
    const node = queue.shift();

    count++;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return count;
}

// recursive
function countNodes(rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

// iterative
function getParentNode(rootNode, target) {
  // the parent node is the node ABOVE the target on the tree
  if (rootNode.val === target) return null;

  const stack = [rootNode];

  while (stack.length) {
    const node = stack.pop();

    // does the thing exist? && is that node the target

    // node.left === ???  node OR it is null
    // node.left.val   => null.val
    if (
      (node.left && node.left.val === target) ||
      (node.right && node.right.val === target)
    ) {
      return node;
    }

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return undefined;
}

// recursive
function getParentNode(rootNode, target) {
  if (!rootNode || rootNode.val === target) return null;

  if (
    (rootNode.left && rootNode.left.val === target) ||
    (rootNode.right && rootNode.right.val === target)
  ) {
    return rootNode;
  }

  return (
    getParentNode(rootNode.left, target) ||
    getParentNode(rootNode.right, target) ||
    undefined
  );
}

// iterative
function getHeight(rootNode) {
  if (!rootNode) return -1;

  const stack = [rootNode];

  rootNode.level = 0;
  let height = 0;

  while (stack.length) {
    const node = stack.pop();

    height = Math.max(height, node.level);

    if (node.left) {
      node.left.level = node.level + 1;
      stack.push(node.left);
    }
    if (node.right) {
      node.right.level = node.level + 1;
      stack.push(node.right);
    }
  }

  return height;
}

// recursive
function getHeight(rootNode) {
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function balancedTree(rootNode) {
  const queue = [rootNode];

  while (queue.length) {
    const curr = queue.shift();

    if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    } else {
      return false;
    }
  }

  return true;
}

function inOrderPredecessor(rootNode, target) {
  let prevNode = null;
  let isFound = false;

  const dfs = (currNode) => {
    if (!currNode) return;
    if (isFound) return;

    dfs(currNode.left);

    if (currNode.val === target) {
      isFound = true;
      return;
    }
    if (!isFound) prevNode = currNode.val;

    dfs(currNode.right);
  };

  dfs(rootNode);

  return prevNode;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child

  /* Solution provided by Nick Esqueda */
  // have to make an inner func so the "returns undefined if node not found" spec passes
  const deleteNode = (rootNode, target) => {
    if (!rootNode) return null;

    if (target < rootNode.val) {
      // <--- target is to the left
      rootNode.left = deleteNode(rootNode.left, target);
    } else if (target > rootNode.val) {
      // ---> target is to the right
      rootNode.right = deleteNode(rootNode.right, target);
    } else {
      // --!-- this node is the target
      if (!rootNode.left && !rootNode.right) {
        // Case 1: Zero children - return null up the tree for reassignment (removes this node as a child)
        return null;
      } else if (rootNode.left && rootNode.right) {
        // Case 2: Two children - delete the in-order predecessor and replace this node's val with the predecessor's
        const predecessorVal = inOrderPredecessor(rootNode, rootNode.val);
        rootNode.left = deleteNode(rootNode.left, predecessorVal);
        rootNode.val = predecessorVal;
      } else {
        // Case 3: One child - return whichever child of this node exists for reassignment (deletes this node, since you're returning this node's child instead of this node)
        return rootNode.left ? rootNode.left : rootNode.right;
      }
    }

    return rootNode;
  };

  deleteNode(rootNode, target);
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
  deleteNodeBST,
};
