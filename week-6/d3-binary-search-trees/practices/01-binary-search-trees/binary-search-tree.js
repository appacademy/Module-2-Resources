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
    // Your code here
    const newNode = new TreeNode(val);
    // if there is no root
    if (!this.root) {

      this.root = newNode;
      return this;
    } 
    // if the val is less than the currentNode val
    if (val < currentNode.val) {
      // check if there is a node to the left
      // if there is not we have found the insertion point
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.left)
      }
    }
    // if the val is greater than the currentNode val
    if (val > currentNode.val) {
      // check if there is a node to the right
      // if there is not we have found the insertion point
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

  search(val) { // => 3
    // Your code here
    let curr = this.root;

    while (curr) {
      if (curr.val === val) return true;

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
    if (curr.val === val) return true;
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
    // Your code here
    if (!currentNode) return this;
    // Do the thing
    console.log(currentNode.val);
    // traverse to the left
    this.preOrderTraversal(currentNode.left);
    // traverse to the right
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
    if (!currentNode) return this;
    // traverse to the left
    this.inOrderTraversal(currentNode.left);
    // Do the thing
    console.log(currentNode.val);
    // traverse to the right
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
    if (!currentNode) return this;
    // traverse to the left
    this.postOrderTraversal(currentNode.left);
    // traverse to the right
    this.postOrderTraversal(currentNode.right);
    // Do the thing
    console.log(currentNode.val);
  }

/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/
  // queue = []
  // curr = 7
  // cl => 4,2,6,1,3,5,7

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const queue = [this.root]; // => queue.push(this.root)
    while (queue.length) {
      const curr = queue.shift();
      // DO THE THING
      console.log(curr.val);
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
  // stack = []
  // curr = 1
  // cl => 4,6,7,5,2,3,1

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [this.root]; // => stack.push(this.root)
    while (stack.length) {
      const curr = stack.pop();
      // DO THE THING
      console.log(curr.val);
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

// console.log(bst.search2(5))
// console.log(bst.search2(100))

module.exports = { BinarySearchTree, TreeNode };
