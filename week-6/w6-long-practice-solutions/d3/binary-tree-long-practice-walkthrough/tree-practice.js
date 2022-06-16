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
  if (!rootNode) return 0;

  let height = -1;
  const q = [rootNode];
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    height++;
  }

  return height;
}

function countNodes (rootNode) {
  const queue = [rootNode]

  let count = 0

  while (queue.length) {
    const current = queue.shift()

    count++

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return count
}

function balancedTree (rootNode) {
  return Math.log2(countNodes(rootNode)) >= getHeight(rootNode)
}

function getParentNode (rootNode, target) {
  if (rootNode.val === target) return null

  const stack = [rootNode]

  while (stack.length) {
    const current = stack.pop()

    if (current.left && current.left.val === target ||
       current.right && current.right.val === target) {
        return current
      }

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }

  return undefined
}

function inOrderPredecessor (rootNode, target) {
  // let prev = null
  // let found = false

  // function _dfs (root) {
  //   if (!root) return

  //   _dfs(root.left)

  //   if (root.val === target) {
  //     found = true
  //     return
  //   }
  //   if (!found) prev = root.val

  //   _dfs(root.right)
  // }

  // // (function (root) {
  // //   if (!root) return

  // //   _dfs(root.left)

  // //   if (root.val === target) {
  // //     found = true
  // //     return
  // //   }
  // //   if (!found) prev = root.val

  // //   _dfs(root.right)
  // // })()

  // _dfs(rootNode)
  // return prev

  let current = rootNode;
  let stack = [];
  let prev = null;

  while (stack.length || current) {
      if (current) {
          stack.push(current);
          current = current.left;
      } else {
          current = stack.pop();
          if (current.val === target) {
              return prev;
          }
          prev = current.val;
          current = current.right;
      }
  }
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
