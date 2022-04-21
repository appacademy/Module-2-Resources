const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // while (rootNode.left) {
  //   rootNode = rootNode.left;
  // }
  // return rootNode.val;
  if (!rootNode) return null;
  if (!rootNode.left) return rootNode.val;
  return findMinBST(rootNode.left);
}

function findMaxBST (rootNode) {
  // while (rootNode.right) {
  //   rootNode = rootNode.right;
  // }
  // return rootNode.val;

  if (!rootNode) return null;
  if (!rootNode.right) return rootNode.val;
  return findMaxBST(rootNode.right);
}

function findMinBT (rootNode, min=Infinity) {
  if (!rootNode) return min;

  if (rootNode.val < min) min = rootNode.val;

  const left = Math.min(min, findMinBT(rootNode.left, min));
  const right = Math.min(min, findMinBT(rootNode.right, min));

  return Math.min(left, right);
  // let min = rootNode.val;
  // const queue = [rootNode];

  // while (queue.length) {
  //   const curr = queue.shift();

  //   if (curr.val < min) min = curr.val;

  //   if (curr.left) queue.push(curr.left);
  //   if (curr.right) queue.push(curr.right);
  // }
  // return min;
}

function findMaxBT (rootNode, max=-Infinity) {
  if (!rootNode) return max;

  if (rootNode.val > max) max = rootNode.val;

  const left = Math.max(max, findMaxBT(rootNode.left, max));
  const right = Math.max(max, findMaxBT(rootNode.right, max));

  return Math.max(left, right);

  // let max = rootNode.val;
  // let queue = [rootNode];

  // while (queue.length) {
  //   const curr = queue.shift();

  //   if (curr.val > max) max = curr.val;
    
  //   if (curr.left) queue.push(curr.left);
  //   if (curr.right) queue.push(curr.right);
  // } 
  // return max;
}

function getHeight (rootNode) {
  if (!rootNode) return 0;

  let height = -1;
  const queue = [rootNode];

  while (queue.length) {
    let size = queue.length;

    while (size > 0) {
      let front = queue.shift();

      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
      size--;
    }
    height++
    
  }

  return height;
  // if (!rootNode) return 0;

  // if (!rootNode.left && !rootNode.right) return 0;
  // return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function countNodes (rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right)
}

function balancedTree (rootNode) {
  return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);
}

function getParentNode (rootNode, target) {
  if (!rootNode) return undefined;
  if (rootNode.val === target) return null;

  const queue = [rootNode];

  while (queue.length) {
    const curr = queue.shift();

    if (curr.left && curr.left.val === target || 
      curr.right && curr.right.val === target) {

      return curr;

    }

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return undefined;
}

const inOrderTraversal = (root) => {
  const data = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    data.push(node);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return data;
}

function inOrderPredecessor (rootNode, target) {

  if (!rootNode) return null;

  const arr = inOrderTraversal(rootNode);

  if (arr[0].val === target) return null;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].val === target) {
      return arr[i-1].val;
    }
  }
  return null;

  // let current = rootNode;
  // let stack = [];
  // let predecessor = null;

  // while (true) {

  //   if (current) {
  //     stack.push(current);
  //     current = current.left;

  //   } else if (!current && stack.length > 0) {
  //     current = stack.pop();
  //     if (current.val === target) {
  //       if (!predecessor) return null;
  //       return predecessor.val;
  //     }
  //     predecessor = current;
  //     current = current.right;

  //   } else {
  //     break;
  //   }
  // }
}


function deleteNodeBST(rootNode, target) {
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