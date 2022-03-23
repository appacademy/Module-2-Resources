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

  insert(val, currentNode = this.root) {
    // Your code here
    const newNode = new TreeNode(val)

    // Empty Tree
    if (!this.root) {
      this.root = newNode
      return
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }

  search(val, currentNode = this.root) {
    // Your code here
    // Iterative Solution
    // let currentNode = this.root

    // while (currentNode) {
    //   if (val < currentNode.val) {
    //     currentNode = currentNode.left
    //   } else if (val > currentNode.val) {
    //     currentNode = currentNode.right
    //   } else {
    //     return true
    //   }
    // }
    // return false

    // Recursive Solution
    if (!currentNode) return false;
    if (val === currentNode.val) return true;
    if (val < currentNode.val) return this.search(val, currentNode.left)
    if (val > currentNode.val) return this.search(val, currentNode.right)
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return
    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
    let node = this.root
    let queue = []
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      console.log(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return this
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
    let node = this.root
    let stack = []
    stack.push(node)

    while (stack.length) {
      node = stack.pop()
      console.log(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
