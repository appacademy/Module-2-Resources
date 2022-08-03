class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// For 1 liner
// class LinkedListNode {
//   constructor(val, next=null) {
//     this.value = val;
//     this.next = next;
//   }
// }

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length =  0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;
    this.head = newNode;
    // For 1 liner. Still need second line to increment length
    // this.head = new LinkedListNode(val, this.head)
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;

    // Case 1: There are no nodes in the list
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    // Case 2: The list does have nodes
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
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

// const node = new LinkedListNode(1);
// const node2 = new LinkedListNode(2);
// node.next = node2;

// console.log(node)

module.exports = LinkedList;
