/*

  Linked List
  * A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node.
  * Much like arrays, linked lists are used to store an ordered sequence of values.
  * Linked list in memory can be spread out in memory
  * Unlike arrays which are contiguous spaces in memory
  *   * They take up space and are slower but we have the advantage of pointers

  Pointers
  * Pointers allow you to store complex, multi-dimensional data in a linear memory bank.
  * They unlock features like multi-type arrays, pass-by-reference methods, graph traversal and many more.

  Each node would have a value and a next
  * next - reference/pointer to next node
  * value - any data value

  If a node is the first node
  * its the head node
  * if the heads points to null, the link list is empty
  * the head would be entry point to the linked list
  If a nodes next is null
  * its the last node

  * We can have node point in other directions
    * doubly linked list
    * tree
    * graphs
  * We will add a tail property for doubly linked list

  Space & Time complexity
  * Arrays vs Linked list

  Adding to front
    * linked list - O(1)
      * No need to shift nodes
    * array - O(n)
      * Shift all values over

  Adding to end
    * Linked list - O(n)
      * must traverse linked list to find last node
        * Unless we have a tail property
    * Array - O(1)
      * No need to traverse array, just need length

     ! Always try and draw out your data structures

*/

// * Linked List with POJO
let node3 = {
  next: null,
  value: "3",
};

let node2 = {
  next: node3,
  value: "2",
};


let node1 = {
  next: node2,
  value: "1",
};


// console.log(node1);// { next: { next: { next: null, value: '3' }, value: '2' }, value: '1' }
// node1 => node2 => node3 => null

// * Linked list with classes
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // * Default to empty
    this.head = null;
  }

  // T - O(1)
  // * Compared to adding to the front of an array which is O(n)
  // * no shifting is required
  // * big reason wed use a linked list is for its 0(1) add to front time complexity
  // ! Student will build this out themselves in the practice
  // ! but talk about it
  addToHead(value) {

    // * Create a new node with the given value
    const newNode = new LinkedListNode(value, null);

    // * Set the node's `next` pointer to the list's current head pointer
    newNode.next = this.head;

    // * Set the list head to point to the new link
    this.head = newNode;

    // * one line version
    // this.head = new LinkedListNode(value, this.head);
  };

  // ? Time complexity?
  // * O(n) - we visit n nodes in ll traversal
  print() {
    // * grab the current head
    let current = this.head;

    // * long as there is a node iterate
    while (current) {

      // * could also see the current node
      // * process.stdout.write used to keep values on same line
      process.stdout.write(`${current.value} -> `);
      // * assign current node to be the next node
      current = current.next;
    }

    console.log("NULL");
  }


}

node3 = new LinkedListNode(37, null);
node2 = new LinkedListNode(99, node3);
node1 = new LinkedListNode(12, node2);

ll = new LinkedList();
// * used before creating addToHead method
// ll.head = node1;

// * adding to ll in reverse order
ll.addToHead(3);
ll.addToHead(2);
ll.addToHead(1);
// console.log(ll);// LinkedList { head: LinkedListNode { value: 4, next: null } }

ll.print(); //1 -> 2 -> 3 -> NULL
