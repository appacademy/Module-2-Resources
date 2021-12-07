# Binary Search Tree practice

In this exercise, you will be implementing and traversing a basic binary
search tree.

## Setup

1. Download the starter at the bottom of this page
2. Install all packages using `npm install`
3. Read the instructions and test specs to understand the problem
4. Fill out the code until tests are all green

## Part 1: Binary Search Tree construction

Start by implementing the class constructor and `insert` function in
`binary-search-tree.js`.

`insert(val)` should insert new tree node with the given value into the
correct location in the binary search tree.

For example, inserting `4` into the empty tree will set the root node to 4.
Inserting `3`, then `5` will insert two nodes to the left and right of the
root respectively. The resulting tree will look like this:

```plaintext
  4
 / \
3   5
```

**hint** you may add default parameters to your functions to aid in recursion.
For example, `insert(currentNode=this.root)` will default to inserting at the
root, but allow you to pass in a child node to insert as well.

Read through the specs in `test/binary-search-tree-spec.js` for more details.

## Part 2: Binary Search Tree search

Now that you can build valid binary search trees, you can implement the
`search` function.

`search(val)` should return `true` if the value is in the tree and `false` if
it is not.

```plaintext
  4
 / \
3   5
```

For example, in the tree pictured above, `bst.search(3)` would return `true`
and `bst.search(6)` would return false.

Read through the specs in `test/binary-search-tree-spec.js` for more details.


## Part 3: Binary Search Tree traversal

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


[starter]: https://github.com/appacademy-starters/practice-for-week-06-binary-search-tree-guided-practice