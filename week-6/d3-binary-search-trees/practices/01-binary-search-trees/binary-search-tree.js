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

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val);
    // if there is no currentNode place the newNode at the root
    if (!currentNode) {
      this.root = newNode;
      return this;
    }

    // if the passed val is less than the currentNode's value
    // look to the left
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode.left);
      }
    }

    // if the passed in val is greater than the currentNode's value
    // look to the right
    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


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


//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7
module.exports = { BinarySearchTree, TreeNode };
