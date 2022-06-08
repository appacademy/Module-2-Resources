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
    // Step 1: Create new Node with the val passed in
    const newNode = new LinkedListNode(val);
    // Step 2: Set new Node's next pointer to point at the current head
    newNode.next = this.head;
    // Step 3: Make the new Head the new Node
    this.head = newNode;
    // Step 4: Increment the length
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;

    // Case 1: There is no head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Case 2: The is a head
    let currentNode = this.head;

    while (currentNode.next) {
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

module.exports = LinkedList;
