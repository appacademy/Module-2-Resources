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

    addToHead(val) { // O(1)
        // There are bugs in this method! Fix them!!!

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

    addToTail(val) { // O(1)
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    removeFromHead() { // O(1)
        // Remove node at head
        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) this.head.prev = null;

        this.length--;

        return oldHead.value;
    }

    removeFromTail() { // O(1)
        // Remove node at tail
        if (!this.tail) return;

        const oldTail = this.tail;
        this.tail = oldTail.prev;
        if (this.tail) this.tail.next = null;

        this.length--;

        return oldTail.value;
    }

    
    peekAtHead() { // O(1)
        // Return value of head node
        if (!this.head) return;
        return this.head.value;
    }

    peekAtTail() { // O(1)
        // Return value of tail node
        if (!this.tail) return;
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
