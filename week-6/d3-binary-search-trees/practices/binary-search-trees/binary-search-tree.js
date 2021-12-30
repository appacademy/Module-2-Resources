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

    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7

    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        const queue = [this.root];

        while (queue.length) {
            let currentNode = queue.shift();

            console.log(currentNode.val);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        const stack = [this.root];

        while (stack.length) {
            let currentNode = stack.pop();

            console.log(currentNode.val);

            if (currentNode.left) stack.push(currentNode.left);
            if (currentNode.right) stack.push(currentNode.right);
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
