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
    this.print();
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;
    // Case 1: There are NOT any nodes in the list
    if (!this.head) {
      this.head = newNode;
      this.print();
      // return this;
    } else {
      // Case 2: There ARE nodes in the list
      let currentNode = this.head;
  
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
  
      currentNode.next = newNode;
      this.print();
    }

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
