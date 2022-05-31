class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;

    // Case 1: The Linked List is Empty (there is no head)
    if (!this.head) {
      this.head = newNode;

      return this;
    }

    // Case 2: The Linked List has Elements (there is a head)
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;