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
  const queue = [root]
  const maxes = []

  while (queue.length) {
    const queueLen = queue.length
    console.log({queue}, queueLen)

    let currentMax = -Infinity
    for (let i = 0; i < queueLen; i++) {
      const current = queue.shift()

      currentMax = Math.max(currentMax, current.value)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    maxes.push(currentMax)
  }

  return maxes


  /* mutate tree node object solution */
  // const stack = [root]
  // const maxes = []
  // root.level = 0

  // while (stack.length) {
  //   const current = stack.pop()
  //   // console.log(current.value, current.level)

  //   if (maxes[current.level] !== undefined) {
  //     maxes[current.level] = Math.max(maxes[current.level], current.value)
  //   } else {
  //     maxes.push(current.value)
  //   }

  //   if (current.left) {
  //     current.left.level = current.level + 1
  //     stack.push(current.left)
  //   }
  //   if (current.right) {
  //     current.right.level = current.level + 1
  //     stack.push(current.right)
  //   }
  // }

  return maxes
}

// Uncomment the code below for local testing.

// Build a tree for testing

  const simpleTree = new TreeNode(4, null, null);
  simpleTree.right = new TreeNode(1, null, null);
  simpleTree.left = new TreeNode(3, null, null);
  simpleTree.right.right = new TreeNode(2, null, null);

// Test the function with the debug tree
console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
