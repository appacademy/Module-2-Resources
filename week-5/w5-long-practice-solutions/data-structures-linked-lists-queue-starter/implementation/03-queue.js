const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const node = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this.length;
        }

        this.tail.next = node;
        this.tail = node;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) return null;

        const oldHead = this.head;
        this.head = oldHead.next;
        
        if (!this.head) this.tail = null;
        
        
        this.length--;
        return oldHead.value;
        
        // Write your hypothesis on the time complexity of this method here
    }

}

const q = new Queue();

q.enqueue('A');
console.log(q.head.value);
q.dequeue();
console.log(q.head)

module.exports = {
    Queue,
    SinglyLinkedNode
}
