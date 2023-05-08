// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        return this.length;
        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let sum = 0
        // Your code here
        if (!this.head) return sum;

        let curr = this.head;

        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        return this.sumOfNodes() / this.listLength()

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;
        let curr = this.head;
        // Your code here
        while (count < n) {
            curr = curr.next;
            count++
        }
        return curr
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        const mid = Math.round((this.listLength() - 1) / 2);
        
        // Your code here
        return this.findNthNode(mid)
        // Write your hypothesis on the time complexity of this method here
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val);

        node.next = this.head;
        this.head = node;
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?
        const rev = new SinglyLinkedList();
        // Your code here

        let curr = this.head;

        while (curr) {
            rev.addToHead(curr.value);
            curr = curr.next;
        }
        return rev;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if (!this.head) return null;
        // Your code here
        let curr = this.head;
        let prev = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}