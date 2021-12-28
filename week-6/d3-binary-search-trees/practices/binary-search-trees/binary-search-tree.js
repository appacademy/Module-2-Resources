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
        } else {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(val);
            } else {
                this.insert(val, currentNode.right);
            }
        }
    }

    search(val) {
        // Your code here
    }

    preOrderTraversal(currentNode = this.root) {
        // Your code here
    }

    inOrderTraversal(currentNode = this.root) {
        // Your code here
    }

    postOrderTraversal(currentNode = this.root) {
        // Your code here
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // Your code here
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // Your code here
    }
}

module.exports = { BinarySearchTree, TreeNode };
