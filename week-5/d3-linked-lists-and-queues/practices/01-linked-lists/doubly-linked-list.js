class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Step 1: create the new node
  // Step 2: add the node to the list
  // Step 3: incrementing the length of the list
  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);

    // Case 1: No Head
    if (!this.head) {
      this.head = newNode;
      this.tail =  newNode;
    } else { // Case 2: There is a Head
      // Changing the old heads previous pointer to the new Node
      this.head.prev = newNode;

      // Assign new Nodes next property to be the current head
      newNode.next = this.head;

      // Change head pointer to the new Node, making it the new head
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail =  newNode;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;