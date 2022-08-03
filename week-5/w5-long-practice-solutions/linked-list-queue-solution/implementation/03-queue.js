const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) { // O(1)
        // Add node to end of queue (linked list)
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
    }

    dequeue() { // O(1)
        // Remove node from front of queue (linked list)
        if (!this.head) return null;

        const oldHead = this.head;
        this.head = oldHead.next;

        if (!this.head) this.tail = null;

        this.length--;

        return oldHead.value;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
