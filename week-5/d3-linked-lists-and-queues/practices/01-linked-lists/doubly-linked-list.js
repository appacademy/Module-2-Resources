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
    const node = new DoublyLinkedListNode(val);

    if (this.length >= 1) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  addToTail(val) {

    const node = new DoublyLinkedListNode(val);

    if (this.length >= 1) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length += 1;
    
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
