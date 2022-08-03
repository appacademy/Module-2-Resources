// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { // O(1)
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    addToTail(val) { // O(n)
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }
        
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() { // O(1)
        // Remove node at head
        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;

        this.length--;

        return oldHead;
    }

    removeFromTail() { // O(n)
        // Remove node at tail
        if (!this.head) return;

        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (!prev) this.head = null;
        else prev.next = null;

        this.length--;

        return curr;
    }

    peekAtHead() { // O(1)
        // Return value of head node
        if (!this.head) return;
        return this.head.value;
    }

    print() { // O(n)
        // Print out the linked list
        if (!this.head) return;

        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
