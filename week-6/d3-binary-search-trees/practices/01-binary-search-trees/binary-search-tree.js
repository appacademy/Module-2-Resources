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
  // curr = 2
  // cl => 4,2,1,3,6,5,7
  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    // DO THE THANG
    console.log(currentNode.val);
    // Traverse Left
    this.preOrderTraversal(currentNode.left);
    // Traverse Right
    this.preOrderTraversal(currentNode.right);
  }

    /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/
  // curr = 7
  // cl => 1,2,3,4,5,6,7

  // left, self, right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    // Traverse Left
    this.inOrderTraversal(currentNode.left);
    // DO THE THANG
    console.log(currentNode.val);
    // Traverse Right
    this.inOrderTraversal(currentNode.right);
  }

      /*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

  // curr = 4
  // cl => 1,3,2,5,7,6,4

  // left, right, self
  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    // Traverse Left
    this.postOrderTraversal(currentNode.left)
    // Traverse Right
    this.postOrderTraversal(currentNode.right)
    // DO THE THANG
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
    // console.log({queue})
    
    while (queue.length) {
      // console.log({queue})
      const curr = queue.shift(); // 7
      
      // DO THE THING
      console.log(curr.val); // => 4,2,6,1,3,5,7

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
    const stack = [this.root]; // []
    // console.log({stack})
    
    while (stack.length) {
      // console.log({stack})
      const curr = stack.pop(); // 1
      
      // DO THE THING
      console.log(curr.val); // => 4,6,7,5,2,3,1

      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return this;
  }
}

// const bst = new BinarySearchTree();

// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(bst.search2(3))
// console.log(bst.search2(33))

module.exports = { BinarySearchTree, TreeNode };
