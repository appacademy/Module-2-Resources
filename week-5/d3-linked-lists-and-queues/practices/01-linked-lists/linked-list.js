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
    //O(1)
    const node = new LinkedListNode(val);

    node.next = this.head;
    this.head = node;

    this.length++;
  }

  addToTail(val) {
    // O(n)
    
    const node = new LinkedListNode(val);

    this.length++;

    if (!this.head) {
      this.head = node;
      return this;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next
    }

    curr.next = node;
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

const ll = new LinkedList();

// ll.addToHead(1);
// ll.addToHead(2);
// ll.addToHead(3);

// ll.print();

// ll.addToTail(4);
// ll.addToTail(5);
// console.log(ll.addToTail(6));

// ll.print();



module.exports = LinkedList;
