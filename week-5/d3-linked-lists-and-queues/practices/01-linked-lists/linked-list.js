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
    // console.log(this)
    // console.log(newNode)

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // this.print();
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
      // this.print();
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = newNode;
      // this.print()
    }

    this.length++;
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
