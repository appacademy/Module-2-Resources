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
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  //       4
  //     /    \
  //    2       6
  //  /   \   /   \
  // 1     3 5     7

  // iterative
  // search(val) {
  //   // Your code here
  //   let curr = this.root

  //   while (curr) {
  //     if (curr.val === val) return true

  //     if (val < curr.val) {
  //       curr = curr.left
  //     } else {
  //       curr = curr.right
  //     }
  //   }
  //   return false
  // }

  // recursive
  search(val, curr = this.root) {
    if (!curr) return false;

    if (curr.val === val) return true;

    if (val < curr.val) {
      return this.search(val, curr.left);
    } else {
      return this.search(val, curr.right);
    }
  }

  // " The traversal strategy the programmer selects depends on the
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
  // into the sequence which was used to create it. "

  //        4
  //     /    \
  //    2       6
  //  /   \   /   \
  // 1     3 5     7

  // Recursive

  // self left right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    // Do the thing
    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  // left self right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    // Do the thing
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  // left right self
  postOrderTraversal(currentNode = this.root) {
    // Your code here

    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    // Do the thing
    console.log(currentNode.val);
  }


  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here

    // make queue, with rootNode

    // while queue has length (there are more nodes to visit)
      // retrieve node from the front of queue

      // DO THE THING, may return

      // Add the left children to the queue
      // Add the right children to the queue


    // optional return
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here

    // make stack, with rootNode

    // while stack has length (there are more nodes to visit)
      // retrieve node from the back of stack

      // DO THE THING, may return

      // Add the left children to the stack
      // Add the right children to the stack


    // optional return
  }
}

module.exports = { BinarySearchTree, TreeNode };
