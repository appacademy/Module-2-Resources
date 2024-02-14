/*

  Graphs
  * Graph is a collection of nodes and edges between those nodes
  * Very broad
  * learn more about tomorrow

  A single node: o
    * A graph
    * A tree
    * A linked list

  Multiple nodes: o -> o -> o
    * A graph
    * A tree
    * A linked list

  Multiple nodes:
               o
              / \
             o   o
    * A graph
    * A tree
    ! Not a linked list because more than one child node

  Multiple nodes:
        o   o
         \ /
          o
    * A graph
    ! Neither linked list or tree because it has more than one parent node

  Multiple nodes
        o
       / \
      o - o
    * A graph
    ! Neither linked list or tree because it has cycles


  Linked List
    * Can have at most a single parent and child node
  Trees
    * Can have at most two children nodes and a single parent node
  Graphs
    * Can have many children and parent nodes

  Tree terminology review
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


  Lets focus on trees for now


*/
