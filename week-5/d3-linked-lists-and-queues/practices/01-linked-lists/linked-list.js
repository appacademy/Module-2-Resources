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
    this.length++;
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;
    // Case 1: Linked list has no length
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    // Case 2: Linked list does have length
    let current = this.head;

    while (current.next!== null) {
      current = current.next;
    }

    current.next = newNode;
    return this;
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
