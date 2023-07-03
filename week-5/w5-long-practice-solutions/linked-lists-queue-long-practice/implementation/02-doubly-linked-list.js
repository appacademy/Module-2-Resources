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

        // Add node of val to head of linked list
        //!!ADD
        // let newNode = new DoublyLinkedNode(val);

        // if (this.length >= 0) {
            // this.head.previous = newNode;
            // newNode.next = this.head;
            // this.head = newNode;
        // } else {
            // this.head = newNode;
            // this.tail = newNode;
        // }

        // this.length++;
        //!!END_ADD
        //!!START SILENT
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
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        //!!START
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
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    removeFromHead() {
        // Remove node at head

        //!!START
        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) this.head.prev = null;

        this.length--;

        return oldHead.value;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    removeFromTail() {
        // Remove node at tail

        //!!START
        if (!this.tail) return;

        const oldTail = this.tail;
        this.tail = oldTail.prev;
        if (this.tail) this.tail.next = null;

        this.length--;

        return oldTail.value;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    peekAtHead() {
        // Return value of head node

        //!!START
        if (!this.head) return;
        return this.head.value;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    peekAtTail() {
        // Return value of tail node

        //!!START
        if (!this.tail) return;
        return this.tail.value;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
