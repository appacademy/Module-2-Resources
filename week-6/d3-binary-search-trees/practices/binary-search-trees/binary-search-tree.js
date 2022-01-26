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

  insert(val, currentNode = this.root) {
    // Your code here
    //no root...new root established
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    // tree already has a root
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val, currentNode = this.root) {
    // Your code here
    //iterative solution
    // let currentNode = this.root;
    // while (currentNode) {
    //   if (val < currentNode.val) {
    //     currentNode = currentNode.left;
    //   } else if (val > currentNode.val) {
    //     currentNode = currentNode.right;
    //   } else {
    //     return true;
    //   }
    // }
    // return false;
    //recursive solution
    if (!currentNode) return false;
    if (val === currentNode.val) return true;

    if (val < currentNode.val) return this.search(val, currentNode.left);
    if (val > currentNode.val) return this.search(val, currentNode.right);
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
