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

// const llNode = new LinkedListNode(1);
// const node2 = new LinkedListNode(2);

// llNode.next = node2;

// let currentNode = llNode

// while (currentNode) {
//   console.log(currentNode.value);
//   currentNode = currentNode.next;
// }

// console.log({ currentNode })

// console.log({ llNode })

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

    if (!this.head) {
      this.head = newNode;
    } else {

      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;

    }
    
    this.length++;
    return this.length;
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
