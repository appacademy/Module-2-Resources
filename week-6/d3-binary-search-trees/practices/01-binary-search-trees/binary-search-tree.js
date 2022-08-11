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
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

//     4
//   /   \
//  2     6
// / \   / \
//1   3 5   7
  search(val) {
    // Your code here
    let currentNode = this.root;

    while(currentNode) {
      if(val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // search1(val, currentNode = this.root) {

  //   if (currentNode.val === val) return true;

  //   if(currentNode.left && val < currentNode.val) return this.search1(currentNode.left, val);

  //   else if(currentNode.right && val > currentNode.val) return this.search1(val, currentNode.right);

  //   return false;
  // }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return 
    console.log("pre-order traversal", currentNode.val);
    this.preOrderTraversal(currentNode.left); 
    this.preOrderTraversal(currentNode.right); 
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return
    this.inOrderTraversal(currentNode.left);
    console.log('the console log',currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

//     4
//   /   \
//  2     6
// / \   / \
//1   3 5   7
  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val)
  }




    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [this.root];
    while(queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

//     4
//   /   \
//  2     6
// / \   / \
//1   3 5   7
  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [this.root];
    while (stack.length > 0) {
      let currentNode = stack.pop();
      console.log(currentNode.val);
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
    }
}

  // depthFirstTraversal(currentNode = this.root) {
  //   if (!currentNode) return;
  //   console.log(currentNode.val);
  //   this.depthFirstTraversal(currentNode.right);
  //   this.depthFirstTraversal(currentNode.left);
  // }
}

// let bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);
// bst.postOrderTraversal()


module.exports = { BinarySearchTree, TreeNode };
