class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the node with the highest value at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the highest value in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 7, 3, 9, 4 ]

function findMaxEachLevel(root) {
  if (!root) return [];
  const result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const len = queue.length;

    // Keep track of the max per level
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      const current = queue.shift();
      max = Math.max(max, current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    // Add the max to the result array
    result.push(max);
  }
  return result;

  /*
  let queue = [root]
  root.level = 0;
  let level_values = [];
  while (queue.length > 0) {
    current = queue.shift()
    level_values[current.level] = (level_values[current.level] == undefined) ? [current.value] : level_values[current.level].concat([current.value]);
    if (current.left != null) {
      current.left.level = current.level + 1
      queue.push(current.left);
    }
    if (current.right != null) {
      current.right.level = current.level + 1
      queue.push(current.right);
    }
  }
  return level_values.map(level => { return level[0] })
  */
}

// Uncomment the code below for local testing.

// // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(1, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
// simpleTree.right.right = new TreeNode(2, null, null);
//   //        5
// //       / \
// //      4   7
// //     / \   \
// //    1   3   2
// //       /    / \
// //      8    4   9
// //              / \
// //             2   4

// // Test the function with the debug tree
// console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]
const simpleTree = new TreeNode(5, null, null);
simpleTree.left = new TreeNode(4, null, null);
simpleTree.right = new TreeNode(7, null, null);
simpleTree.left.left = new TreeNode(1, null, null);
simpleTree.left.right = new TreeNode(3, null, null);
simpleTree.right.right = new TreeNode(2, null, null);
simpleTree.left.right.left = new TreeNode(8, null, null);
simpleTree.right.right.left = new TreeNode(4, null, null);
simpleTree.right.right.right = new TreeNode(9, null, null);
simpleTree.right.right.right.left = new TreeNode(2, null, null);
simpleTree.right.right.right.right = new TreeNode(4, null, null);
console.log(findMaxEachLevel(simpleTree));
/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
