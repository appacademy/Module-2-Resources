class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    //O(1)
    const newNode = new DoublyLinkedListNode(val);

    //non empty list
    if (this.length >= 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //empty list
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    //O(1)
    const newNode = new DoublyLinkedListNode(val);

    //not empty list
    if (this.length >= 1) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else { //empty list
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;

const list = new DoublyLinkedList()
// const node1 = new DoublyLinkedListNode('A')
// const node2 = new DoublyLinkedListNode("B");
// const node3 = new DoublyLinkedListNode("C");
list.addToHead('A')
list.addToTail('B')
list.addToTail('C')

list.print()

