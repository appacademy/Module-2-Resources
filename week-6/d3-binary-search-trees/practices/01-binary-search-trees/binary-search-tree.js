// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {

    const node = new TreeNode(val);
    // Your code here
    // there is no root
    if (!currentNode) {
      this.root = node;
      return this;
    }

    // the incoming val is less than currenNode.val
    if (val < currentNode.val) {
      // if the left is null
      if (!currentNode.left){
        currentNode.left = node;
      } else {
        return this.insert(val, currentNode.left)
      }
    }

    // the incoming val is greater than currentNode.val
    if (val > currentNode.val) {
      // if the left is null
      if (!currentNode.right){
        currentNode.right = node;
      } else {
        return this.insert(val, currentNode.right)
      }
    }
  }

//       4
//     /   \
//    2     6
//   / \   / \
//  1   3 5   7

  search(val) {
    // Your code here
    if (!this.root) return false;

    let curr = this.root;

    while (curr) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

//       4
//     /   \
//    2     6
//   / \   / \
//  1   3 5   7

module.exports = { BinarySearchTree, TreeNode };
