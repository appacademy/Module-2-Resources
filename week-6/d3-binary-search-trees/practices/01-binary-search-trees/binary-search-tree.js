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

  insert(val, currentNode=this.root) {
    // Your code here

    const newNode = new TreeNode(val)

    if (!this.root) {
      this.root = newNode
      return this
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode
        return this
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
        return this
      } else {
        this.insert(val, currentNode.right)
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
    if (!curr) return false

    if (curr.val === val) return true

    if (val < curr.val) {
      return this.search(val, curr.left)
    } else {
      return this.search(val, curr.right)
    }
  }


//        4
//     /    \
//    2       6
//  /   \   /   \
// 1     3 5     7

  // Recursive

  // self left right
  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

// left self right
  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

// left right self
  postOrderTraversal(currentNode = this.root) {
    // Your code here
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
