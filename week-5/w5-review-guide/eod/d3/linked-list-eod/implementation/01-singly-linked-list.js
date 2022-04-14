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
        const node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        this.length++;

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

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
        if (!this.head) return undefined;
        
        
        const oldHead = this.head;
        
        this.head = this.head.next;
        this.length--;

        return oldHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (!this.head) return undefined;

        let curr = this.head;
        let prev = null;

        while(curr.next) {
            prev = curr;
            curr = curr.next;
        }

        if (prev) {
            prev.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return curr;
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value;
    }

    print() {
        // Print out the linked list
        if (!this.head) return undefined;
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
