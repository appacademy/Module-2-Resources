// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // if the val is less than the current node's val
    if (val < currentNode.val) {
      // look to the left and if nothing is there
      if (!currentNode.left) {
        // place the new node
        currentNode.left = newNode;
        return this;
      } else {
        // otherwise recursively call insert with the current node's left property
        return this.insert(val, currentNode.left);
      }
    }
    /*
              4
           /     \
          2       6
        /   \   /   \
       1     3  5     7
*/

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    // Your code here
    let curr = this.root;

    while (curr) {
      if (curr.val === val) return true;
      curr = val < curr.val ? curr.left : curr.right;
      // if (val < curr.val) {
      //   curr = curr.left;
      // } else {
      //   curr = curr.right;
      // }
    }

    return false;
  }

  search2(val, curr = this.root) {
    if (!curr) return false;
    if (curr.val === val) return true;
    // if (val < curr.val) {
    //   return this.search2(val, curr.left);
    // } else {
    //   return this.search2(val, curr.right);
    // }
    return val < curr.val
      ? this.search2(val, curr.left)
      : this.search2(val, curr.right);
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

// let bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(bst.search2(1));
// console.log(bst.search2(3));
// console.log(bst.search2(5));
// console.log(bst.search2(6));
// console.log(bst.search2(7));
// console.log(bst.search2(9));

module.exports = { BinarySearchTree, TreeNode };
