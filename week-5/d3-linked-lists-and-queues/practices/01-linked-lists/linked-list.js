class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

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
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this.length;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    // 1: are any nodes in the list
    if (!this.head) {
      this.head = newNode;
    } else {
      // let obj = { value: 2, next: null }
      // 2: There are nodes in the list
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
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
