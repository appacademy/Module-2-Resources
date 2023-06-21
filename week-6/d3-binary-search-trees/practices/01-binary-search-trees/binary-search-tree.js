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

  search(val) {
    // Your code here
    let curr = this.root;

    while (curr) {
      if (curr.val === val) return true;
      //  if (val < curr.val) curr = curr.left; curr = curr.right;
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
    return val < curr.val
      ? this.search2(val, curr.left)
      : this.search2(val, curr.right);
    // return !curr
    //   ? false
    //   : curr.val === val
    //   ? true
    //   : val < curr.val
    //   ? this.search2(val, curr.right)
    //   : this.search2(val, curr.left);
  }

  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    // DO THE THING
    // go left
    // go right
  }

  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    // go left
    // DO THE THING
    // go right
  }

  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here
    // go left
    // go right
    // DO THE THING
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

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log(bst.search2(8));
console.log(bst.search2(2));

module.exports = { BinarySearchTree, TreeNode };
