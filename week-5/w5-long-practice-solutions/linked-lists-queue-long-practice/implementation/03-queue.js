const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        //!!START
        const newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.length;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this.length;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        //!!START
        if (!this.head) return null;

        const oldHead = this.head;
        this.head = oldHead.next;

        if (!this.head) this.tail = null;

        this.length--;

        return oldHead.value;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
