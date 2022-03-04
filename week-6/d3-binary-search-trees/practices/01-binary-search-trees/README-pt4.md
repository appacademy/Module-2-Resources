# Practice: Binary Search Tree - Part 4

In this exercise, you will be iteratively traversing a basic binary search tree.

## Setup

1. Continue working from the same starter as part 1, 2, and 3
2. Read the instructions and test specs to understand the problem
3. Fill out the code until tests are all green

## Part 4: Binary Search Tree iterative traversal

Implement functions that will traverse the tree in depth and breadth first orders,
printing the nodes out as it traverses.

```plaintext
       4
     /   \
    2     7
   / \   / \
  1   3 5   8
```

`depthFirstTraversal()` prints the node value first, then _iteratively_ visits
the left and right nodes in depth-first order, going as deep as possible before
backtracking at dead-ends to take the last path not taken. The example tree
**could** print out `4, 2, 1, 3, 7, 5, 8`. This is one of several valid orders,
but is what you will see if you always choose to go left before going right.

You've seen this before in the reading, but implement it here without looking
at that!  The value isn't in possessing a working copy of the code, it's in
understanding how it works and being able to create or modify it.

```javascript
  depthFirstTraversal() {
    // initialize a stack with the root node

    // while the stack is not empty
      // print and remove first node in stack

      // if the node has a left node
        // push the left node on the back of the stack
      // if the node has a right node
        // push the right node on the back of the stack
  }
```

`breadthFirstTraversal()` iteratively visits the nodes in breadth-first order,
or layer by layer. The example tree **could** print out `4, 2, 7, 1, 3, 5, 8`.
This is one of several valid orders, but is what you will see if you choose to
always go left first before going right.

Again, implement this here without looking at the reading!

```javascript
  breadthFirstTraversal() {
    // initialize a queue with the root node

    // while the queue is not empty
      // print and remove first node in queue

      // if the node has a left node
        // push the left node on the back of the queue
      // if the node has a right node
        // push the right node on the back of the queue
  }
```

Read through the specs in `test/binary-search-tree-spec.js` for more details.