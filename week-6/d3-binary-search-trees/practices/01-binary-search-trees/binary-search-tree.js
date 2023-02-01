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

// The traversal strategy the programmer selects depends on the 
// specific needs of the algorithm being designed. 
// The goal is speed, so pick the strategy that brings you the nodes
//  you require the fastest.

// If you know you need to explore the roots before inspecting
// any leaves, you pick pre-order because you will encounter 
// all the roots before all of the leaves.

// If you know you need to explore all the leaves before any nodes,
//  you select post-order because you don't waste any time inspecting 
// roots in search for leaves.

// If you know that the tree has an inherent sequence in the nodes, 
// and you want to flatten the tree back into its original sequence, 
// than an in-order traversal should be used. 
// The tree would be flattened in the same way it was created. 

// A pre-order or post-order traversal might not unwind the tree back 
// into the sequence which was used to create it.

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

//  cl => 4, 2, 1, 3, 6, 5, 7
  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return this;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

//  cl => 1,2,3,4,5,6,7

  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return this;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

// cl => 1,3,2,5,7,6,4
  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return this;
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
