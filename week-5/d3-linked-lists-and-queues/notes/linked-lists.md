# Linked Lists Notes

Linked Lists are data structures that represent a linear sequence of "vertices"
(or nodes) and track three important properties: 

- head: first node in the list
- tail: last node in the list
- count: number of nodes in the list

Each individual instance of a node tracks some other important properties as
well:

- value: value represented by the node 
- next: the next node in the list
- previous: the previous node in the list

---

Linked Lists contain ORDERED DATA, similar to arrays. While they exhibit some
very similar traits, the difference is how data is stored.

Arrays store data in a contiguous manner: each element is stored next to it's
neighboring element in a single block of memory. In Linked Lists, elements are
stored non-contiguously. They are randomly dispersed around your computer. Even
though elements are stored randomly, because each node has a previous and a next
property, we are able to retrieve neighboring elements easily.

- Because of this feature, a Linked List has NO INDICES and it is not possible
to look up individual nodes in constant time. In order to find a node, we must 
iterate over the entire list until we find our target node.

- In order to implement a Linked List, you MUST implement the Node class as well
as the LinkedList class. 
  - The actual data lives in the node instances

There are several types of Linked Lists:

**List Type**	      **Description**	                                            **Directionality**
Singly Linked	      Nodes have a single pointer connecting                      Head→Tail
                    them in a single direction.	                                       
Doubly Linked	      Nodes have two pointers connecting them bi-directionally.	  Head⇄Tail
Multiply Linked	    Nodes have two or more pointers, providing a variety of 
                    potential node orderings.	                                  Head⇄Tail, A→Z, 
                                                                                Jan→Dec, etc.
Circularly Linked	  Final node's next pointer points to the first node, 
                    creating a non-linear, circular version of a Linked List.	  Head→Tail→Head→Tail

## Linked List Methods

- Methods of a linked list that we should know are:

  - addToTail: Adds a new node to the end of the list.
  - addToHead: Adds a new node to the front of the list.
  - insertAt: Adds a new node at the specified position (we need to traverse to
  that point, then update pointers)
  - removeTail: Removes the last node of the list.
  - removeHead: Removes the first node of the list.
  - removeFrom: Removes the node at the specified position.
  - contains: Traverses the list and returns a boolean to indicate if the value
  was found at any node.
  - get: Returns a reference to the node at the specified position.
  - set: Updates the value of the node at the specified position.
  - size: Returns the current length of the list.

- Time complexities for these methods:

  - Accessing a node: O(n), because we may have to traverse the entire list.
  - Searching a list: O(n), because we may have to traverse the entire list.
  - Inserting a value: O(1), under the assumption that we have a reference to
  the node that we want to insert it after/before. If we don't have this
  reference we would first have to access it (O(n) from above), but the actual
  creation is O(1)
  - Deleting a node: O(1), for the same reasons as insertion. If we first need
  to find the previous and next nodes, we would need to access them (O(n) from
  above), but the actual deletion is O(1)

## Build a Linked List

The first step is to create a Node class, then a LinkedList class.
The LinkedList class will use instances of the Node class to hold the data:

```javascript
// Object to hold the data
class _Node { // underscore indicates a 'private variable'
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // used with Doubly Linked Lists
  }
}

// The linked list the nodes will be added to
class SinglyLinkedList {
  constructor() {
    this.head = null;
    // this.tail = null; // used with Doubly Linked Lists
    // this.count = 0;
  }

  add(value) {
    if (!this.head) {
      this.head = new _Node(value);
    } else {
      this._add(value); // otherwise see _add() below
    }

    // this.count++;
  }

  _add(value) {
    let currentNode = this.head; //start at head

    while (currentNode.next) {
      //keep traversing until reaching node with NO next property(tail)
      currentNode = currentNode.next;
    }

    currentNode.next = new _Node(value); //once we have reached the end, we create a new Node (new tail)
  }

  size() {
    let count = 0;
    let currentNode = this.head; //start at head

    while (currentNode) { //while we are landing on a node
      count++; //increment the count by one
      currentNode = currentNode.next; // go to next node
    }

    return count;
  }

  insertAt(value, count) {
    if (count === 0) { //If we are starting at the head
      const prevHead = this.head; //old head
      this.head = new _Node(value); //new head
      this.head.next = prevHead; //new head pointing its next prop to old head
    } else {
      this._insertAt(value, count); //otherwise see _insertAt() below
    }

    // this.count++;
  }

  // If we are inserting anywhere other than head
  _insertAt(value, count) { 
    let currentNode = this.head; //start at head
    let currentNodeCount = 0; //tracking the index as we traverse
    let prev; //instantiate a prev variable

    while (currentNodeCount < count) { //as long as the currentNodeCount is less than the target count
      prev = currentNode; //prev is assigned to the currentNode element
      currentNode = currentNode.next; //update currentNode to the next element
      currentNodeCount++; //increment the count for the count we are currently on
    }

    const newNode = new _Node(value); //creating a new NODE
    prev.next = newNode; //last element before target's next property is now the newNode
    newNode.next = currentNode; // the element that I landed on for target count is now the next for my newNode

    return true; //return true to indicate successful insertion
  }
}

const sll = new SinglyLinkedList();

sll.add(1);
sll.add(2);
sll.add(4);
sll.insertAt(0, 0);
sll.insertAt(3, 3);

console.log(sll);

```
