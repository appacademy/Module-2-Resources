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

        //!!START
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        //!!ADD
        // let newNode = new SinglyLinkedNode(data);

        // if (!head) {
            // head = newNode;
            // return head;
        // }

        // let curr = head;
        // while (curr) {
            // curr = current.next;
        // }
        // curr.next = newNode;

        // return head;
        //!!END_ADD
        //!!START SILENT
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
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n)
        //!!END
    }

    removeFromHead() {
        // Remove node at head

        //!!START
        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;

        this.length--;

        return oldHead;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    removeFromTail() {
        // Remove node at tail

        //!!START
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
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n)
        //!!END
    }

    peekAtHead() {
        // Return the value of head node

        //!!START
        if (!this.head) return undefined;
        return this.head.value;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(1)
        //!!END
    }

    print() {
        // Print out the linked list

        //!!START
        if (!this.head) return;

        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n)
        //!!END
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
