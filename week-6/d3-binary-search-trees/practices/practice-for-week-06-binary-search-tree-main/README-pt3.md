# Practice: Binary Search Tree - Part 3

In this exercise, you will be recursively traversing a basic binary search tree.

## Setup

1. Continue working from the same starter as part 1 and 2
2. Read the instructions and test specs to understand the problem
3. Fill out the code until tests are all green

## Part 3: Binary Search Tree recursive traversal

Implement functions that will print out the tree nodes with a pre-order,
in-order and post-order traversal.

```plaintext
  4
 / \
3   5
```

`preOrderTraversal()` prints the node value first, then recursively visits the
left and right nodes. The example tree would print out `4, 3, 5`.

`inOrderTraversal()` recursively visits the left node, then prints the current
node value, then recursively visits the right node. The example tree would
print out `3, 4, 5`.

`postOrderTraversal()` recursively visits the left and right nodes, then
prints the current node value. The example tree would print out `3, 5, 4`.

Read through the specs in `test/binary-search-tree-spec.js` for more details.