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
    if (!this.root) return false;

    let curr = this.root;

    while (curr) {
      if (val === curr.val) return true;

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
    if (val === curr.val) return true;
    if (val < curr.val) return this.search2(val, curr.left);
    if (val > curr.val) return this.search2(val, curr.right);
  }

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

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

// const bst = new BinarySearchTree();

// bst.insert(4)
// bst.insert(2)
// bst.insert(6)
// bst.insert(1)
// bst.insert(3)
// bst.insert(5)
// bst.insert(7)

// console.log(bst.search2(5))
// console.log(bst.search2(0))
// console.log(bst.search2(1))


//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7
module.exports = { BinarySearchTree, TreeNode };
