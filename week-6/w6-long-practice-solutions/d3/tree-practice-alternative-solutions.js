const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
    if (rootNode.left) return findMinBST(rootNode.left);
    return rootNode.val;
}

function findMaxBST(rootNode) {
    if (rootNode.right) return findMaxBST(rootNode.right);
    return rootNode.val;
}

function findMinBT(rootNode) {
    const stack = [rootNode];
    let min = Infinity;

    while (stack.length) {
        const current = stack.pop();

        min = Math.min(min, current.val);

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return min;
}

function findMaxBT(rootNode) {
    const stack = [rootNode];
    let max = -Infinity;

    while (stack.length) {
        const current = stack.pop();

        max = Math.max(max, current.val);

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return max;
}

function getHeight(rootNode) {
    const stack = [rootNode];

    rootNode.level = 0;
    let depth = 0;

    while (stack.length) {
        const current = stack.pop();

        depth = Math.max(depth, current.level);

        if (current.left) {
            current.left.level = current.level + 1;
            stack.push(current.left);
        }
        if (current.right) {
            current.right.level = current.level + 1;
            stack.push(current.right);
        }
    }

    return depth;
}

function countNodes(rootNode) {
    const stack = [rootNode];
    let count = 0;

    while (stack.length) {
        const current = stack.pop();

        ++count;

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return count;
}

function balancedTree(rootNode) {
    return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);
}

function getParentNode(rootNode, target) {
    if (rootNode.val === target) return null;

    const stack = [rootNode];

    while (stack.length > 0) {
        let current = stack.pop();

        if (
            (current.left && current.left.val === target) ||
            (current.right && current.right.val === target)
        ) {
            return current;
        }

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return undefined;
}

/* Provided by Nick Esqueda */
function inOrderPredecessor(rootNode, target) {
    let prev = null;
    let found = false;
    const dfs = (root) => {
        if (!root) return;
        if (found) return;
        dfs(root.left);
        if (root.val === target) {
            found = true;
            return;
        }
        if (!found) prev = root.val;
        dfs(root.right);
    };
    dfs(rootNode);
    return prev;
}

/* Provided by Heng Wang */
function inOrderPredecessor(rootNode, target) {
    let current = rootNode;
    let stack = [];
    let prev = null;
    while (stack.length || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            if (current.val === target) {
                return prev;
            }
            prev = current.val;
            current = current.right;
        }
    }
}

/* Provided by Heng Wang */
function deleteNodeBST(rootNode, target) {
    // Do a traversal to find the node. Keep track of the parent
    let node = null;
    let parent = null;
    let current = rootNode;
    let pos = '';
    while (current) {
        if (current.val === target) {
            node = current;
            break;
        }
        parent = current;
        if (target < current.val) {
            current = current.left;
            pos = 'left';
        } else {
            current = current.right;
            pos = 'right';
        }
    }
    // Undefined if the target cannot be found
    if (node === null) return undefined;
    // Set target based on parent

    if (!node.left && !node.right) {
        // Case 0: Zero children and no parent:
        //   return null
        if (!parent) return null;
        // Case 1: Zero children:
        //   set the parent that points to it to null
        else {
            parent[pos] = null;
        }
        return true;
    }

    // Case 2: Two children:
    //   set the value to its in-order predecessor, then delete the predecessor
    if (node.left && node.right) {
        let pred = inOrderPredecessor(rootNode, node.val);
        let predParent = getParentNode(rootNode, pred);
        node.val = pred;
        if (predParent.left.val === pred) {
            predParent.left = null;
            //deleteNodeBST(predParent,pred);
        } else {
            predParent.right = null;
            //deleteNodeBST(rootNode,pred);
        }
        return true;
    }
    // Case 3: One child:
    //   Make the parent point to the child
    if (!node.right) {
        parent[pos] = node.left;
    } else {
        parent[pos] = node.right;
    }
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST,
};
