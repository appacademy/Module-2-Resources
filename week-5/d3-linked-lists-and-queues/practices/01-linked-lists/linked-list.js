class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.length = 0
  }

  addToHead(val) { // Time O(1), head is easily accessible, just doing a few assignments, no need to traverse
    // Your code here

    // make new node instance with val
    const newNode = new LinkedListNode(val)

    // tell newNode's next pointer to look at what ll head is looking at
    newNode.next = this.head

    // reassign the ll head to now look at newNode
    this.head = newNode

    // increment ll length
    this.length++

    // this.print()
    return this.length
  }

  addToTail(val) { // Time O(n)
    // Your code here
    const newNode = new LinkedListNode(val)

    if (!this.head) {
      this.head = newNode

    } else {
      // setting pointer variable to start at head
      let curr = this.head

      // traverse LL until we find node with next of null
      while (curr.next) {  // O(n), number of nodes with next property not null
        curr = curr.next
      }

      // once we break out while loop, curr should be stuck on last node of LL
      // tell last node's next to look at new node
      curr.next = newNode
    }

    this.length++

    return this.length
    // this.print()
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
