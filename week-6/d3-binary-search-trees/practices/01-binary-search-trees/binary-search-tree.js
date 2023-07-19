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

  insert(val, currentNode=this.root) {
    const node = new TreeNode(val);
    // Your code here
    if (!this.root) {
      this.root = node;
      return this;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = node;
        return this;
      } else {
        return this.insert(val, currentNode.left)
      }
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = node;
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
      curr = val < curr.val ? curr.left : curr.right

      // if (curr.val < val) {
      //   curr = curr.right;
      // } else {
      //   curr = curr.left;
      // }
    }
    return false;
  }

  search2(val, curr=this.root) {
    // if (!curr) return false;
    // if (curr.val === val) return true;

    // return val < curr.val 
    //   ? this.search2(val, curr.left) 
    //   : this.search2(val, curr.right);

    return !curr
      ? false
      : curr.val === val
      ? true
      : val < curr.val
      ? this.search(val, curr.left)
      : this.search(val, curr.right);
  }

  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    // DO THE THANG
    // Traverse Left
    // Traverse Right
  }

  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    // Traverse Left
    // DO THE THANG
    // Traverse Right
  }

  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here\
    // Traverse Left
    // Traverse Right
    // DO THE THANG
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

console.log(bst.search2(3))
console.log(bst.search2(33))

module.exports = { BinarySearchTree, TreeNode };
