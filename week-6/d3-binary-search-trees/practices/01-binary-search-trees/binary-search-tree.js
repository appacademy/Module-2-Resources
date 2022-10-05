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
    // Your code here
    const newNode = new TreeNode(val);
    // if there is no root
    if (!this.root) {
      this.root = newNode;
      return this;
    }


    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      } else {
        return this.insert(val, currentNode.left);
      }
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7
  search(val,) { // 9
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
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

// 4, 2, 1, 3, 6, 5, 7
  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return this;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

// 1, 2, 3, 4, 5, 6, 7
  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return this;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

// 1, 3, 2, 5, 7, 6, 4
  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return this;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
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

module.exports = { BinarySearchTree, TreeNode };
