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
  }

  addToHead(val) {
    // Your code here
  }

  addToTail(val) {
    // Your code here
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
