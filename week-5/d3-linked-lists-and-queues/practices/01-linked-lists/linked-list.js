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
    // console.log(this);
    const newNode = new LinkedListNode(val);

    // console.log('before', newNode)
    newNode.next = this.head;
    // console.log('after', newNode)
    this.head = newNode;
    this.length++;
    return this;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }
      // console.log(curr)
      curr.next = newNode;
    }

    return this;
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

// const ll =  new LinkedList();

// console.log(ll.addToHead(1))


module.exports = LinkedList;
