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

    this.print();
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;

    // Case 1: There are not any nodes in the list
    if (!this.head) {
      this.head = newNode;
      this.print()
      return this;
    }

    // Case 2: If There are nodes in the list
    let currentNode = this.head; // { val: 1, next: { val: 2, next: { val:3, next: null}}}

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.print();
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
