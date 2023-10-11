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

/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7

*/

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } 

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.left);
      }
    } 

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7

*/

  // search(val) {
  //   // Your code here
  //   let curr = this.root;

  //   while (curr) {
  //     if (curr.val === val) return true;

  //     // if (val < curr.val) {
  //     //   curr = curr.left;
  //     // } else {
  //     //   curr = curr.right;
  //     // }
  //     curr = val < curr.val ? curr.left : curr.right;

  //   }
  //   return false
  // }

  search(val, curr=this.root) {
    // if (!curr) return false;
    // if (curr.val === val) return true;

    // if (val < curr.val) {
    //   return this.search(val, curr.left);
    // } else {
    //   return this.search(val, curr.right);
    // }
    return !curr 
      ? false 
      : curr.val === val 
      ? true 
      : val < curr.val 
      ? this.search(val, curr.left) 
      : this.search(val, curr.right); 
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

module.exports = { BinarySearchTree, TreeNode };
