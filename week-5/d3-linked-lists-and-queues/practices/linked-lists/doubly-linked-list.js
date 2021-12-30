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
    //make new node
    let newNode = new DoublyLinkedListNode(val);
    //if the list already has nodes
    if (this.length >= 1) {
      //assign the prev pointer of current head to point to newNode
      this.head.prev = newNode;
      //assign the next pointer of newNode to point to old head
      newNode.next = this.head;
      //reassign pointer of this.head to be newNode;
      this.head = newNode;
    } else {
      //empty list...so head and tail are the same node
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);

    //list already has nodes
    if (this.length >= 1) {
      //assign next pointer of current tail to be newNode
      this.tail.next = newNode;
      //assign prev pointer of newNode to old Tail
      newNode.prev = this.tail;
      //assign tail to point to newNode
      this.tail = newNode;
    } else {
      //empty list
      this.head = newNode;
      this.tail = newNode;
    }
    this.length += 1;
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
