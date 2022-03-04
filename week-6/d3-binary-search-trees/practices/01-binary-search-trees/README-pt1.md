# Practice: Binary Search Tree - Part 1

In this exercise, you will be implementing a basic binary search tree.

## Setup

1. Download the starter at the bottom of this page
2. Install all packages using `npm install`
3. Read the instructions and test specs to understand the problem
4. Fill out the code until tests are all green

## Part 1: Binary Search Tree construction

Start by implementing the class constructor and `insert` method in
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