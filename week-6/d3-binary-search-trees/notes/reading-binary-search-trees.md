# Binary Search Trees

Binary search is a powerful and elegant algorithm that allows you to search
through enormous data sets with just a handful of comparisons. This power comes
at a cost though: the data must be sorted before running binary search. In an
array, that data can be sorted in **O(n log n)** time which isn't too bad, just
a tiny bit less efficient than **O(n)**. This is an acceptable, one-time cost
if the data never changes, but in most real-world circumstances, data updates
constantly. Adding, removing, or changing any value in a sorted array would
require an **O(n)** insertion or deletion to maintain that sorted order.

Binary search trees are a node-and-pointer-based data structure, similar to a
doubly linked list, that allows for the same **O(log n)** search as a sorted
array, but with **O(log n)** insertion and deletion as well.

After reading this article, you should be able to:

* Compare and contrast a binary tree with a binary search tree.
* Explain why it is more efficient to search a binary search tree as compared to
  a regular binary tree.
* Search a binary search tree in **O(log n)** time.

## Tree terminology review

* Node: A tree component that contains one value and pointers to other nodes
* Edge: Another name for a pointer
* Root node: The top node in a tree
* Parent/child node: A parent node points to child nodes
* Neighbor: Either a parent or child node
* Subtree: A tree whose root is the child of another node in the tree
* Branch node: A node with at least one child node
* Leaf node: A node with no children
* Level: The number of edges between a given node and the root node
* Width: The number of nodes in a given level
* Height: The number of edges between the root node and the bottom-most node

Binary search trees are a specific type of [tree][tree-wiki] with binary search
properties, but the same terminology applies to all trees.

## Properties of a binary search tree

As with any other binary tree, a binary search tree (BST for short) consists
of nodes which each contain a value and two pointers. In a BST, those pointers
are `left` and `right` and always point downward.

The key difference that makes it a binary search tree is that every node
contained in the left branch of any node will be **less than** the value of the
node itself, and every node in the right branch will be **greater than** the node
value.

There are three possible implementations for handling values that are **equal to**
a value in an existing node:

* Discard the duplicate, similar to a set
* Place equal values to the left
* Place equal values to the right

The last of these options appears to be the most common, but always double-check
if you are working with an unfamiliar implementation!

All binary search trees are binary trees, but not all binary trees are binary
search trees. The tree below is a binary tree, but NOT a binary search tree.
Can you see why?

```plaintext
     1
   /   \
  2     3
 / \   / \
4   5 6   7
```

In order to be a valid binary search tree, every node in the left subtree must
be less than the node's value. Since 2, 4 and 5 are greater than 1, this is not
a valid binary search tree.

![Binary Search Tree][bst-image]

In this diagram, the _root_ node has a value of 8. All nodes to the left
(1, 3, 6, 4, 7) have values less than 8 while all nodes to the right
(10, 14, 13) are greater. Note that each node can be considered the root of its
own subtree and each follows the same rules. All nodes to the left of the 3
node (1) are less while all nodes to the right (6, 4, 7) are greater.

## Searching a binary search tree

Binary search trees can be searched by calling the following recursive function
on the root node:

1. If the root node is null, return false
2. If the root node's value equals the target, return true.
3. If the target is less than the root value, recursively search the left child
4. If the target is greater than the root value, recursively search the right
   child

![Binary Search Tree][bst-image]

Say you are searching this BST for the value, 4. Start by calling search on the
root of the tree. Since 4 is less than 8, it hits condition #3 and recursively
calls the same search function on the left child: 3. 4 is greater than 3, so it
recursively calls search on the right child: 6. 4 is less than 6, so call search
on the left child: 4. Finally, the target value is found, and the function
returns `true`, which propagates all the way back up the call stack to return
to the original function.

```js
function searchBST(root, target) {

    if (root === null) return false;

    if (target === root.value) return true;

    if (target < root.value) return searchBST(root.left, target);

    if (target > root.value) return searchBST(root.right, target);
}
```

This can be performed iteratively as well.

```js
function searchBST(root, target) {

    let currentNode = root;

    while (currentNode !== null) {

        if (target === currentNode.value) return true;

        if (target < currentNode.value) currentNode = currentNode.left;

        if (target > currentNode.value) currentNode = currentNode.right;
    }

    return false;

}
```

Both alorithms are simple, elegant and efficient!

## Time complexity of searching a binary search tree

Each comparison in a binary search tree moves down by one level, so the
worst-case number of calls is equal to the height of the tree. In a perfectly
balanced binary search tree, the height is equal to _log n_.

How can you prove/remember this? Since each node creates two children, you can
think of each level as having twice the number of nodes as the level above it.

```
Level 0: 1 node
Level 1: 2 nodes
Level 2: 4 nodes
Level 3: 8 nodes
Level 4: 16 nodes
Level 5: 32 nodes
Level 6: 64 nodes
Level 7: 128 nodes
Level 8: 256 nodes
```

This should look familiar! The maximum capacity of each level is equal to 2 to
the power of the level. You may also notice that each level's capacity is equal
to the sum of all previous levels plus 1.

```
2 = 1 + 1
4 = 2 + 1 + 1
8 = 4 + 2 + 1 + 1
16 = 8 + 4 + 2 + 1 + 1
32 = 16 + 8 + 4 + 2 + 1 + 1
64 = 32 + 16 + 8 + 4 + 2 + 1 + 1
128 = 64 + 32 + 16 + 8 + 4 + 2 + 1 + 1
256 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 + 1
```

Since adding a level doubles the capacity, moving down a level reduces the
number of values to search by half. Just like binary search, this
divide-and-conquer approach results in a time complexity of **O(log n)**.

## Adding and removing values in BST

Adding nodes to a BST requires searching for an empty spot to put it. Say you
want to add a 3 to the following BST.

```
     4
   /   \
  2     6
 /     / \
1     5   7
```

You would start from the root, and determine that it should go to the left.
Since there is already a left child, you can call insert on the left subtree
with the root of 2. Since 3 is greater than 2 and there is a right branch open,
you create a new node and insert the 3.

```
     4
   /   \
  2     6
 / \   / \
1   3 5   7
```

Removal is a bit trickier. There are three cases to consider. The easiest is
removing a node with no children: simply delete the node. For example, to
remove the 5, simply remove the 5, by setting the `right` property of the parent
to null.

```
     4
   /   \
  2     6
 / \     \
1   3     7
```

To remove a node with one child, just replace that node with its child. So to
remove the 6, replace it with the 7.


```
     4
   /   \
  2     7
 / \
1   3
```

Removing a node with two children gets tricky. Instead of removing the node
itself, you must search for either the right-most node in the left branch, or
the left-most node in the right branch, then delete THAT node and replace the
current node with its value. So, to delete 4 from the original tree...

```
     4
   /   \
  2     6
 / \   / \
1   3 5   7
```

...you would replace the 4 with the right-most value on the left (3)...

```
     3
   /   \
  2     6
 /     / \
1     5   7
```

...or the left-most value on the right (5).

```
     5
   /   \
  2     6
 / \     \
1   3     7
```

You can find the left-most value on the right subtree by moving right once, then
picking left until you reach a node with no more lefts. Removing 5 from the
tree above would move the 6, which has just one child, so is replaced by the 7.

```
     6
   /   \
  2     7
 / \
1   3
```

Despite their complexity, all of these operations require one comparison per
level for an optimal runtime of **O(log n)**.

## Unbalanced binary search trees

Say you wanted to store the values, 1, 2 and 3 in a BST. You start with a root
value of 1, then add 2:

```
1
 \
  2
```

Next, you add the 3. Your resulting BST would look like this:

```
1
 \
  2
   \
    3
```

Adding a 4, 5, 6 and 7 in order would give you a tree that looks like this:

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
           \
            7
```

While this is a valid BST, with each smaller value to the left and each larger
value to the right, this is not ideal for search. Because the tree is
completely unbalanced, it has a height equal to the number of nodes.
Essentially, this binary search tree is just a linked list with a search time
complexity of **O(n)**.

It's much more efficient for the tree to have a balanced structure like this:

```
     4
   /   \
  2     6
 / \   / \
1   3 5   7
```

Balancing binary search trees is a big topic that will not be covered in this
course. What you need to know is that a balanced BST, meaning a tree with
height roughly equal to _log n_, has a search time of **O(log n)** but an
unbalanced BST can have a worst-case search time of **O(n)**.

If you are interested in the algorithms behind self-balancing BSTs, check out
[red-black trees][red-black-tree-wiki] and [AVL trees][avl-tree-wiki]. You can
also take a look at [B-trees][b-tree-wiki], which are used to index database
entries for efficient search. Notably, these algorithms maintain the insertion,
deletion and modification time of **O(log n)** with a guaranteed search time
of **O(log n)**.


## What you learned

In this reading, you learned all about binary search trees, including tree
terminology and how to search, add and remove values from a binary search tree
in **O(log n)** time. You also learned the worst-case performance of an unbalanced
tree, which results in **O(n)** runtimes for these same operations.



[bst-image]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/Binary_search_tree.svg
[tree-wiki]: https://en.wikipedia.org/wiki/Tree_(data_structure)
[red-black-tree-wiki]: https://en.wikipedia.org/wiki/Red%E2%80%93black_tree
[avl-tree-wiki]: https://en.wikipedia.org/wiki/AVL_tree
[b-tree-wiki]: https://en.wikipedia.org/wiki/B-tree
