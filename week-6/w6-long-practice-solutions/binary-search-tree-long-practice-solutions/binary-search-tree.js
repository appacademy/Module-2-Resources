// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      //!!START
      this.root = null;
      //!!END
    }
  
    insert(val, currentNode=this.root) {
      //!!START
      if(!this.root) {
        this.root = new TreeNode(val);
        return;
      }
  
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
      //!!END
    }
  
    search(val) {
      //!!START
      let currentNode = this.root;
  
      while (currentNode) {
        if (val < currentNode.val) {
          currentNode = currentNode.left;
        } else if (val > currentNode.val){
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
  
      return false;
      //!!END
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      //!!START
      if (!currentNode) return;
  
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
      //!!END
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      //!!START
      if (!currentNode) return;
  
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
      //!!END
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      //!!START
      if (!currentNode) return;
  
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
      //!!END
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      //!!START
      const queue = [this.root];
  
      while (queue.length > 0) {
        let currentNode = queue.shift();
  
        console.log(currentNode.val);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      //!!END
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      //!!START
      const stack = [this.root];
  
      while (stack.length > 0) {
        let currentNode = stack.pop();
  
        console.log(currentNode.val);
        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);
      }
      //!!END
    }
  }
  
module.exports = { BinarySearchTree, TreeNode };