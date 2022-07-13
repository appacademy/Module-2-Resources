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
    this.root = null;
  }

  insert(val, currentNode=this.root) { // 4
    // create node
    const node = new TreeNode(val);  // 5
    // if the currentNode is null
    if (!this.root) {                                                       //           6
      this.root = node;                                                     //          / 
      return this;                                                          //         4   
                                                                            //        / \
    }                                                                       //       3   5

    // if val is less than the currentNode's val
    if (val < currentNode.val) {
      // if there's no left we've found it.
      if (!currentNode.left) {
        // set currentNode.left to be the node.
        currentNode.left = node;
      } else {
        return this.insert(val, currentNode.left);
      }
    }

    // if val is greater than the currentNode's val
    if (val > currentNode.val) {
      // if there is no right, we have found where the node goes
      if (!currentNode.right) {
        currentNode.right = node;
      } else {
        return this.insert(val, currentNode.right);
      }
    }


  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  search(val) {
    let curr = this.root;

    if (!this.root) return false;

    while (curr) {

      if (val < curr.val) {

        curr = curr.left

      } else if (val > curr.val) {

        curr = curr.right

      }  else {

        return true;
      }

    }
    return false;
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

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // self, left, right

  // 4,2,1,3,6,5,7
  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // left, self, right
  // 1,2,3,4,5,6,7
  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right);
  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // left, right, self
  // 1,3,2,5,7,6,4

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);;
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

module.exports = { BinarySearchTree, TreeNode };
