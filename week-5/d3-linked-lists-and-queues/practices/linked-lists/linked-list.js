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
    // O(1)
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here//O(n)
    let newNode = new LinkedListNode(val);
    this.length++;

    //this structure is an empty list
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    //list with something in it
    let curr = this.head; //start at head
    while (curr.next) {
      //as long as the next prop is not null
      curr = curr.next;
    }
    curr.next = newNode;
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
