# Tree Terminology

-   Node: A tree component that contains one value and pointers to other nodes
-   Edge: Another name for a pointer
-   Root node: The top node in a tree
-   Edge: Another name for a pointer
-   Parent/child node: A parent node points to child nodes
-   Neighbor: Either a parent or child node
-   Subtree: A tree whose root is the child of another node in the tree
-   Branch node: A node with at least one child node
-   Leaf node: A node with no children
-   Level: The number of edges between a given node and the root node
-   Width: The number of nodes in a given level
-   Height: The number of edges between the root node and the bottom-most node

# Properties of Binary Search Trees
- The tree starts at the root
- nodes whose values are less than the current node go to the left
- nodes whose values are more than the current node go to the left
- O (log n) search, insertion and deletion complexity
- Each node has three properties: value, left and right

## Balanced vs Unbalanced:

A balanced tree means that the left and right subtrees of every node differ in height by NO MORE THAN 1.
An unbalanced tree is more expensive to traverse, so searching in an unbalanced tree would have an O (n) complexity.

