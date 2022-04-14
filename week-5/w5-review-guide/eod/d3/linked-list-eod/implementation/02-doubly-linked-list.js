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
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const node = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;

        const oldHead = this.head;
        if (this.length > 1) {
            this.head = oldHead.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        
        this.length--;
        return oldHead.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) return undefined;

        const oldTail = this.tail;
        if (this.length > 1) {
            this.tail = oldTail.prev;
            this.tail.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        
        this.length--;
        return oldTail.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;

        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
