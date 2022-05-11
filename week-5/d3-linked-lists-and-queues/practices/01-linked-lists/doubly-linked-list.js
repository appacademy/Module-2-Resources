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

  addToHead(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);

    // Case 1: The list is empty
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Case 2: There are elements in the list
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);

    // Case 1: The list is empty
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Case 2: This list has elements
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
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