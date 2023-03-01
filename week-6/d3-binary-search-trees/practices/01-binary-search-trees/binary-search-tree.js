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

//           4
//          / \
//         2   8
//        / \ / \
//       1       

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val);
    // if there is no root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // if the val is less than the currentNode's value
    // go to the left
    if (val < currentNode.val) {
      // check if there is anything to the left
      // if not that's where the new node goes
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        // otherwise recurse to the left
        return this.insert(val, currentNode.left);
      }
    }

    // if the val is greater than the currentNode's value
    // go to the right
    if (val > currentNode.val) {
      // check if there is anything to the right
      if (!currentNode.right) {
        // if not that's where the node goes
        currentNode.right = newNode;
      }else {
        // otherwise recurse to the right
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
  search(val) {
    // Your code here
    // if (!this.root) return false;
    let curr = this.root;  // this could be NULL

    while (curr) {
      if (curr.val === val) return true;

      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  search2(val, curr=this.root) {
    if (!curr) return false;

    if (curr.val === val) return true;
    if (val < curr.val) return this.search2(val, curr.left);
    if (val > curr.val) return this.search2(val, curr.right);
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
