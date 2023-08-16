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
    this.root = null
  }

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val)
    if (!this.root) {
      this.root = newNode
      return this
    }

    if (val < currentNode.val) {
      if (!currentNode.left) currentNode.left = newNode
      else this.insert(val, currentNode.left)
    } else {
      if (!currentNode.right) currentNode.right = newNode
      else this.insert(val, currentNode.right)
    }

    return this
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
    // iterative
    let currNode = this.root

    while (currNode) {
      if (currNode.val === val) return true
      if (val < currNode.val) currNode = currNode.left
      else currNode = currNode.right
    }

    return false
  }

  search2(val, currNode = this.root) {
    // recursive
    if (!currNode) return false
    if (currNode.val === val) return true

    if (val < currNode.val) return this.search2(val, currNode.left)
    else return this.search2(val, currNode.right)
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

    if (!currentNode) return

    // Do the thing with currentNode
    console.log(currentNode.val)
    // left subtree
    this.preOrderTraversal(currentNode.left)
    // right subtree
    this.preOrderTraversal(currentNode.right)
  }


  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here

    if (!currentNode) return

    // left subtree
    this.inOrderTraversal(currentNode.left)
    // Do the thing with currentNode
    console.log(currentNode.val)
    // right subtree
    this.inOrderTraversal(currentNode.right)
  }

// left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here

    if (!currentNode) return

    // left subtree
    this.postOrderTraversal(currentNode.left)
    // right subtree
    this.postOrderTraversal(currentNode.right)
    // Do the thing with currentNode
    console.log(currentNode.val)
  }

    /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7

  */

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    // start with queue that has rootnode

    // while queue has length
    // remove from front of queue
    // DO THE THING, may return
    // Push in children
      // left
      // right

    // optional return
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    // start with stack that has rootnode

    // while stack has length
    // remove from back of stack
    // DO THE THING, may return
    // Push in children
      // left
      // right

    // optional return
}
}

module.exports = { BinarySearchTree, TreeNode };


// bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(
//   bst.search2(1), // true
//   bst.search2(7), // true
//   bst.search2(8) // false
// )
