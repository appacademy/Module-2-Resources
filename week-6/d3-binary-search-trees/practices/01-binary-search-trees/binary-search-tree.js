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
    // console.log({ newNode });
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
      if (val === curr.val) return true;

      curr = val < curr.val ? curr.left : curr.right;

      // if (val < curr.val) {
      //   curr = curr.left;
      // } else {
      //   curr = curr.right;
      // }
    }

    return false;
  }

  search2(val, currentNode = this.root) {
    if (!currentNode) return false;

    if (val === currentNode.val) return true;

    if (val < currentNode.val) {
      return this.search2(val, currentNode.left);
    } else {
      return this.search2(val, currentNode.right);
    }
  }

  /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

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

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log(bst.search2(1));
console.log(bst.search2(10));

module.exports = { BinarySearchTree, TreeNode };
