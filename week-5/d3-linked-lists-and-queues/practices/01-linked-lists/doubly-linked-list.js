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
    const newNode = new DoublyLinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // console.log(this.head.prev)
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      // console.log(this.head.prev)
    }
    return this;
  }

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    this.length++;

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // console.log(this.head.prev)
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      // console.log(this.head.prev)
    }
    return this;
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
