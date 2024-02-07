class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    // this.tail = null;
  }

  addToHead(val) {
    // newNode: { value: 10, next: null }
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;

    this.head = newNode;

    this.length++;
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);

    this.length++;

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
    // return;
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

// const ll = new LinkedList();
// ll.addToHead(10);
// ll.addToHead(200);

module.exports = LinkedList;
