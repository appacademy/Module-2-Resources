// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        // O(1) time
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        // O(1) time;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.length) return;

        let oldHead = this.head;
        let newHead = this.head.next;

        if (newHead) {
            oldHead.next = null;
            newHead.prev = null;
            this.head = newHead;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--
        return oldHead.value;

        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.length) return;

        let oldTail = this.tail;
        let newTail = this.tail.prev;

        if (newTail) {
            oldTail.prev = null;
            newTail.next = null;
            this.tail = newTail;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--
        return oldTail.value;

        // O(1)
    }

    peekAtHead() {
        // Return value of head node
        if (!this.length) return undefined;
        return this.head.value;

        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.length) return undefined;
        return this.tail.value;

        // O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
