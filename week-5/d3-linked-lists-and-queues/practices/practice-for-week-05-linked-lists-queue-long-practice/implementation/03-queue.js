const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this.length;
        // O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.length) return null;
        let result = this.head;
        this.head = this.head.next;
        if (this.length === 1) this.tail = null;
        this.length--

        return result.value
        // O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
