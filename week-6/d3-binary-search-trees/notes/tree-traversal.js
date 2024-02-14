/*


  Tree
  * Trees are a common data structure upon which many other data structures are based.
  * You can think of them as being like a singly-linked list, except that instead of each node having a single next node, it can have two children nodes.
  * A tree is a graph that does not contain any cycles.
  * A cycle is defined as a path through edges that begins and ends at the same node.

  Root node
  * root of tree

  Binary Tree
  * A binary tree is a tree where nodes have at most 2 children.
  * very similar to a singly linked list
    * difference instead of having a single next node; we can have more than one child node but at most 2
  * Tree is a type of graph
  * Learning trees first as they are more simple to manipulate
  ! think binary meaning two - two children nodes
    * an empty graph of 0 nodes and 0 edges is a binary tree
    * a graph of 1 node and 0 edges is a binary tree
    * a linked list is a binary tree

  Basic Tree Terminology Review
  * tree - graph with no cycles
  * binary tree - tree where nodes have at most 2 nodes
  * root - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
  * internal node - a node that has children
  * leaf - a node that does not have any children
  * path - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

*/

// * Representing a Binary Tree with Node Instances
// * think of left and right properties like the next property on a linked list
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(4);
let b = new TreeNode(2);
let c = new TreeNode(6);
let d = new TreeNode(1);
let e = new TreeNode(3);
let f = new TreeNode(5);
let g = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

class Tree {
  constructor(node) {
    this.root = node;
  }
}

const myTree = new Tree(a);
// console.log('myTree:', myTree);
/*
          4
        /   \
       2     6
      / \   / \
     1   3 5   7



    4:{name: 'brandon', age: '28'}
        /          \
3: {name: 'maica'}
      / \          / \
  apple  half     5   7
*/

/*

  Binary Tree Traversal
  * To perform most operations on a tree
    * need to either traverse the tree and visit or evaluate every node in the tree
    * search the tree, which is simply a traversal that you stop when you find what you are looking for

  Three ways to traverse binary trees
  * pre-order
  * in-order
  * post-order
  * each traversal all nodes are visited in the same order
    * Starting from the root it walks down the left subtrees (pushing onto the call stack)
    * Then back up once the base case is reached (popping off the call stack)
    * Then down the right subtrees and back up again.
  * Difference is where the console.log is placed
  ! Pre, in and post-order traversals are all depth-first traversals specific to binary trees.

  Depth-first search
  * This method of traveling as deep as possible down the tree branches until reaching a dead-end, then backtracking to the next branch
  ! Traversal algorithm, not a search algo despite the name
  ! be careful not to mix up depth-first traversal and search
  * think of going the entire depth of the tree

  Depth-first traversals

*/



/*
    Pre-order traversal
    * printing comes before the left and right recursive calls.
    * console.log before recursive call
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

    * 4, 2, 1, 3, 6, 5, 7
    * we see the logs in the order they are added to the stack
*/



/*
  In-order traversal

          4
        /   \
       2     6
      / \   / \
     1   3 5   7

  * 1, 2, 3, 4, 5, 6, 7
  * we will see the left nodes when we start popping them off the stack
  * we will see the right nodes adding them to the stack
  * if used on a binary search tree
    * the nodes will be printed in order
  ! not until a stack frame popped off will we see the console.log
  ! left stack frame will be pop of first
  ! on the way down to the previous frame, before calling the right side we will see the log
*/


/*
  Post-order traversal
  * print the values after the recursive calls
  * console.log after the left and right recursive call
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

  * 1, 3, 2, 5, 7, 6, 4
  * we will see the logs in the order they exit the call stack
    * last in first out
    * first in last out
*/
