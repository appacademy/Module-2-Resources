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
    this.head = null
    this.tail = null
    this.length = 0
  }

  addToHead(val) { // Time O(1), have immediate access to head, just doing some assignments
    // Your code here
    const newNode = new DoublyLinkedListNode(val)

    // if DLL is empty,
    if (!this.head) {
      // want both head and tail to point to newNode
      this.head = newNode
      this.tail = newNode

    } else {

      // newNode's next to look at head
      newNode.next = this.head

      // head's prev to look back at newNode
      this.head.prev = newNode

      // reassign head to look at newNode
      this.head = newNode
    }

    this.length++

    // this.print()
    return this.length
  }

  addToTail(val) { // Time O(1), no need to traverse, tail is easily accessible by the .tail pointer for this DLL
    // Your code here
    const newNode = new DoublyLinkedListNode(val)

    // if DLL is empty,
    if (!this.head) {
      // want both head and tail to point to newNode
      this.head = newNode
      this.tail = newNode

    } else {

      // tell tail's next to look at newNode
      this.tail.next = newNode

      // newNode's prev to look back at tail
      newNode.prev = this.tail

      // reassign tail to look at newNode
      this.tail = newNode
    }

    this.length++

    return this.length
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
