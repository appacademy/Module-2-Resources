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
    //O(1)
    const newNode = new LinkedListNode(val);
    newNode.next = this.head; //node
    this.head = newNode; //list
    this.length++;
  }

  addToTail(val) {
    // Your code here
    //O(n)
    let newNode = new LinkedListNode(val);
    this.length++;

    //empty list
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    //list has nodes
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
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

const llist = new LinkedList();
const node1 = new LinkedListNode(1);
llist.addToHead(node1);
