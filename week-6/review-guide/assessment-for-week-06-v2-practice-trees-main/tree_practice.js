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
  // Your code here

  if (!root) return [];
  const result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    const qLen = queue.length;
    //keep track of max at each level
    let max = -Infinity;
    for (let i = 0; i < qLen; i++) {
      const currentNode = queue.shift();
      console.log('queue', queue)
      console.log('currentNode', currentNode)
      max = Math.max(max, currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    // put max in result
    result.push(max);
  }
  return result;
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
