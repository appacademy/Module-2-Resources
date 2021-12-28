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

    // iterative
    search(val) {
        // O(logn)
        if (this.root === val) return true;

        let currentNode = this.root; // current node i'm lookign at pointer

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

    // recursive
    search(val, currentNode = this.root) {
        if (!currentNode) return false;

        if (val === currentNode.val) return true;

        if (val < currentNode.val) return this.search(val, currentNode.left);
        if (val > currentNode.val) return this.search(val, currentNode.right);
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
