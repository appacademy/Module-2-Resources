class LinkedListNode {
  constructor(val, next=null) {
    this.value = val;
    this.next = next;
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
    // Step 1: Create the new Node
    const newNode = new LinkedListNode(val);

    // Step 2: Add the current head to the new Nodes next property
    newNode.next = this.head;

    // Step 3: Change head pointer to be the new node
    this.head = newNode;

    // One liner that will not work with this implementation
    // this.head = new LinkedListNode(val, this.head)

    // Step 4: Increment the length property
    this.length++;
  }

  addToTail(val) {
    // Your code here
    // Step 1: Create a New Node
    const newNode = new LinkedListNode(val);

    // Step 3: Incrementing the length property
    this.length++;

    // Step 2: Adding the Node to the list

        // Case 1: There is no Head
            // Assign the new Node to the head property
    if (!this.head) {
      this.head = newNode;
      return;
    }

        // Case 2: There is a Head
            // Step 1: Create a holder variable - initil to the head
            // Step 2: Loop while holder has a next property
                  // set the holders value to be the next node in the list
            // Step 3: Adding the new Node to the last node's next property
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
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