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
        const node = new SinglyLinkedNode(val);

        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

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

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;

        const oldHead = this.head;

        this.head = oldHead.next;
        this.length--;
        return oldHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return;
        this.length--;

        if (!this.head.next) {
            this.head = null;
            return;
        }


        let curr = this.head;
        let prev = null;

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
        return curr;
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let curr = this.head;

        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
