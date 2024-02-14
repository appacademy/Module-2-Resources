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
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else if(val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    } else {
      console.log('already have this value')
    }
  }

  search(val) {

    let currentNode = this.root;
    if(currentNode.val === val) return true;

    while(currentNode){

      if(val < currentNode.val) {
        currentNode = currentNode.left;
      } else if(val > currentNode.val){
        currentNode = currentNode.right;
      } else {
        return true
      }
    };

    return false;
  }

  preOrderTraversal(currentNode = this.root) {

    if(!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  // I copy pasted preOrderTraversal into inOrderTraversal,
  inOrderTraversal(currentNode = this.root) {

    if(!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {

    if(!currentNode) return;

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

bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(5);
bst.insert(7);
// console.log(bst);
// bst.preOrderTraversal()
bst.inOrderTraversal()

module.exports = { BinarySearchTree, TreeNode };
