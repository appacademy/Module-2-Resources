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

    addToHead(val) {
        // Add node of val to head of linked list

        let newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
        // O(1) constant time
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++

        return this;

        // O(n) time
    }

    removeFromHead() {
        // Remove node at head
        if (!this.length) return undefined;
        let head = this.head
        this.head = this.head.next
        this.length--
        return head
        // O(1) time
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.length) return undefined;
        let curr = this.head
        let prev;

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (!prev) this.head = null;
        else prev.next = null;
        this.length--;
        return curr;

        // O(n) time
    }

    peekAtHead() {
        // Return value of head node
        if (!this.length) return undefined;
        return this.head.value;
        // O(1) time
    }

    print() {
        // Print out the linked list
        if (!this.length) return;

        let curr = this.head;
        while (curr) {
            console.log(curr.value)
            curr = curr.next;
        }
        // O(n) time
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
