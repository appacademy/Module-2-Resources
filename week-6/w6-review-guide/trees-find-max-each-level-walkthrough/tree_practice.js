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

  root.level = 0

  while (queue.length) {
    const current = queue.shift()
    // console.log({current})
    console.log({maxes})
    console.log('value', current.value)
    console.log('level', current.level)

    if (maxes[current.level]) {
      maxes[current.level] = Math.max(current.value, maxes[current.level])
      // if (maxes[current.level] < current.value) {
      //   maxes[current.level] = current.value
      // }
    } else {
      maxes.push(current.value)
    }

    if (current.left) {
      current.left.level = current.level + 1
      queue.push(current.left)
    }

    if (current.right) {
      current.right.level = current.level + 1
      queue.push(current.right)
    }
  }

  console.log(maxes)
  return maxes
}

// no object mutation solution
function findMaxEachLevel(root) {
  if (!root) return [];

  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
      const len = queue.length;

      // Keep track of the max per level
      const max = -Infinity;
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
}

// recursion solution
function findMaxEachLevel(root) {
  function recursionHelper(root, result, depth) {
      if (!root) return;

      if (result.length === depth) {
          result.push(root.value);
      } else {
          result[depth] = Math.max(root.value, result[depth]);
      }

      recursionHelper(root.left, result, depth + 1);
      recursionHelper(root.right, result, depth + 1);
  }

  recursionHelper(root, (result = []), (depth = 0));
  return result;
}

// counter solution
function findMaxEachLevel(root) {
  const queue = [root];
  const count = 1;
  const values = [];
  let currentLevel = [];

  while (queue.length) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);
      count--;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      if (!count) {
          values.push(Math.max(...currentLevel));
          currentLevel = [];
          count = queue.length;
      }
  }

  return values;
}
// Uncomment the code below for local testing.

// // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(1, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
//   simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
// console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
