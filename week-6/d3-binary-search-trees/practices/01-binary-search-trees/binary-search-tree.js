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
      ? this.search2(val, curr.left)
      : this.search2(val, curr.right);
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

  /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/
  // cl => 4,2,1,3,6,5,7
  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    // Your code here
    // DO THE THING
    console.log(currentNode.val);
    // go left
    this.preOrderTraversal(currentNode.left);
    // go right
    this.preOrderTraversal(currentNode.right);
  }
  /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/
  // cl => 1,2,3,4,5,6,7
  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    // go left
    this.inOrderTraversal(currentNode.left);
    // DO THE THING
    console.log(currentNode.val);
    // go right
    this.inOrderTraversal(currentNode.right);
  }

  /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/
  // cl => 1,3,2,5,7,6,4
  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    // Your code here
    // go left
    this.postOrderTraversal(currentNode.left);
    // go right
    this.postOrderTraversal(currentNode.right);
    // DO THE THING
    console.log(currentNode.val);
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
    const queue = [this.root];

    while (queue.length) {
      // [7]
      // console.log({ queue });
      const curr = queue.shift(); // 7
      // DO THE THING
      console.log(curr.val); // 4,2,6,1,3,5,7

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return this;
  }

  /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [this.root];

    while (stack.length) {
      // []
      // console.log({ stack });
      const curr = stack.pop(); // 1
      // DO THE THING
      console.log(curr.val); // 4,6,7,5,2,3,1

      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return this;
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

// console.log(bst.search2(8));
console.log(bst.search2(4));
console.log(bst.search2(5));
console.log(bst.search2(1));
console.log(bst.search2(8));

module.exports = { BinarySearchTree, TreeNode };
