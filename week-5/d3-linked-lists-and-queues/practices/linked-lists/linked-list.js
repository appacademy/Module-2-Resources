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
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    //starting at head looking for tail (where node.next = null)
    let curr = this.head;
    //as long as we have not reached tail(truthy value for next)
    while (curr.next) {
      //reassign curr to next node until next = null, which is falsey
      curr = curr.next;
    }
    //jump out of loop at tail
    //assigning newNode to tail
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
