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

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    } else {
      console.log("already have this value");
    }
  }

  search(val) {
    let currentNode = this.root;
    if (currentNode.val === val) return true;

    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // logs as the enter the call stack ->  4, 2, 1, 3, 6, 5, 7
  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  // logged after the left frame is called and popped off -> 1, 2, 3, 4, 5, 6, 7
  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  };


  // logs as they leave the call stack -> 1, 3, 2, 5, 7, 6, 4
  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative -> 4 2 6 1 3 5 7
  breadthFirstTraversal() {

    const queue = [this.root];

    while(queue.length) {

      let currentNode = queue.shift();

      console.log(currentNode.val);

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);

    }

  }

  // Depth First Traversal - Iterative -> 4 -> 6 -> 7 -> 5 -> 2 -> 3 -> 1
  depthFirstTraversal() {


    const stack = [this.root];
    let sum = 0

    while(stack.length) {

      let currentNode = stack.pop();

      console.log(currentNode.val);
      sum += currentNode.val

      if(currentNode.left) stack.push(currentNode.left);
      if(currentNode.right) stack.push(currentNode.right);

    };
    
    return val;
  };

}
// Part 4: iterative traversals //
bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(5);
bst.insert(7);
// console.log(bst);
bst.depthFirstTraversal()
// bst.inOrderTraversal();
// bst.breadthFirstTraversal()

module.exports = { BinarySearchTree, TreeNode };


/*



*/
