/*

  Binary Search Tree
  * Binary search is a powerful and elegant algorithm that allows you to search through enormous data sets with just a handful of comparisons.
  * Data MUST be sorted
    * Can use a O( log n) to sort data
    * Quicksort
    * Mergesort
  * Binary search trees are a node-and-pointer-based data structure, similar to a doubly linked list
  * same O(log n) search as a sorted array
  * but with O(log n) insertion and deletion as well.

  Binary tree vs Binary Search Tree
  * binary trees are nodes than have more than one child node
  * binary search tree is a sorted binary tree with search properties
  ! All binary search trees are binary trees, but not all binary trees are binary search trees

  Key difference
  * every node contained in the left branch of any node will be less than the value of the node itself
  * every node in the right branch will be greater than the node value

  Properties of Binary Search Tree
  * node with left and right pointers
    * note they always point downward

  There are three possible implementations for handling values that are equal to a value in an existing node:
    * Discard the duplicate, similar to a set
    * Place equal values to the left
    * Place equal values to the right

  ? Is this a binary search tree?
    * yes
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

   ? Is this a binary search tree?
    * no - normal binary tree
          5
        /   \
       2     6
      / \   / \
     1   3 4   7


*/


/*

  Time complexity
  * Search - O(log n)
  * Adding - O(log n)
  * Removing O(log n)

  Adding and removing values in BST

  Adding
          4
        /   \
       2     6
      /     / \
     1     5   7

  Add 3
  * You would start from the root, and determine that it should go to the left. Since there is already a left child, you can call insert on the left subtree with the root of 2. Since 3 is greater than 2 and there is a right branch open, you create a new node and insert the 3.

  Removal
  * Removal is a bit trickier.
  There are three cases to consider.

  Case 1: Removing node with node children
   * simply delete the node.
  * For example, to remove the 5, simply remove the 5, by setting the left property of the parent to null.

  Remove 5
          4
        /   \
       2     6
      /     / \
     1     5   7

  * node6.left = null


  Case 2: Remove a node with one child
  * just replace that node with its child

  Remove 6
          4
        /   \
      2      6
     / \      \
    1   3      7

  * node6 = node7

  Case 3: Removing a node with two children gets tricky
  * trickiest
  * Cant just remove node
  * search for either the right-most node in the left branch
  * or the left-most node in the right branch
  * then delete THAT node and replace the current node with its value

  Remove 4
        4
      /   \
     2     6
    / \   / \
   1   3 5   7

   * node4 = node3
   * must maintain order of binary search tree
    * Either
    * replace the 4 with the right-most value on the left (3).
    * or the left-most value on the right (5)

   ! Balancing binary search trees is a big topic that will not be covered in this course.
*/
