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

  insert(val, currentNode=this.root) {
    // Your code here
    const node = new TreeNode(val);

    if (!this.root) {
      this.root = node;
      return this;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = node;
        return this;
      } else {
        return this.insert(val, currentNode.left);
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

/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

  // search(val) {
  //   // Your code here
  //   let curr = this.root;
    
  //   while (curr) {
  //     if (curr.val === val) return true;

  //     // if (val < curr.val) {
  //     //   curr = curr.left;
  //     // } else {
  //     //   curr = curr.right;
  //     // }
  //     curr = val < curr.val ? curr.left : curr.right;

  //   }

  //   return false;
  // }
  search(val, curr=this.root) {
    // Your code here
    // if (!curr) return false;
    // if (curr.val === val) return true;

    // if (val < curr.val) {
    //   return this.search(val, curr.left);
    // } else {
    //   return this.search(val, curr.right);
    // }
    return !curr 
      ? false 
      : curr.val === val 
      ? true : val < curr.val 
      ? this.search(val, curr.left) 
      : this.search(val, curr.right);
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

  // self, left, right
  // cl => 4,2,1,3,6,5,7
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    // DO THE THING
    console.log(currentNode.val);

    // recursively traverse to the left
    this.preOrderTraversal(currentNode.left);
    // recursively traverse to the right
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
    if (!currentNode) return;
    // Your code here
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
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
    // Your code here
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
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
    const queue = [this.root]; // []

    while (queue.length) {
      // console.log({queue})
      const curr = queue.shift(); // 7

      // DO THE THANG
      console.log(curr.val); // 4,2,6,1,3,5,7

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return this;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [this.root]; // []

    while (stack.length) {
      // console.log({stack})
      const curr = stack.pop(); // 3

      // DO THE THANG
      console.log(curr.val); // 4,6,7,5,2,3,1

      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return this;
  }
}

module.exports = { BinarySearchTree, TreeNode };
