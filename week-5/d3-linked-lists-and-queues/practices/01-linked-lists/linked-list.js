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
    // this.print()
    const newNode = new LinkedListNode(val);
    // console.log(this)
    // console.log({newNode})
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // this.print()
    return this;
    // Your code here
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = newNode;
    }
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
