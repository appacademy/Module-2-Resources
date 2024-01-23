// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list

    // Your code here
    const node = new SinglyLinkedNode(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;

    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  removeFromHead() {
    // Remove node at head
    // Your code here
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  removeFromTail() {
    // Remove node at tail
    // Your code here
    if (!this.head) return undefined;

    let curr = this.head;
    let prev;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    let oldTail = curr;

    if (!prev) {
      this.head = null;
    } else {
      prev.next = null;
    }

    this.length--;
    return oldTail;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  peekAtHead() {
    // Return the value of head node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
    return this.length === 0 ? undefined : this.head.value;
    // O(1)
  }

  print() {
    // Print out the linked list
    // Your code here
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
