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
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

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
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        if (!this.head) return 0;

        let curr = this.head;
        let total = 0;

        while (curr) {
            total += curr.value;
            curr = curr.next;
        }

        return total;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        return this.sumOfNodes() / this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        if (!this.head) return null;

        let curr = this.head;
        let count = 0;

        while (curr && count < n) {
            curr = curr.next;
            count++;
        }

        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        const mid = Math.floor((this.length / 2));

        return this.findNthNode(mid)


        // Write your hypothesis on the time complexity of this method here
    }

    _addToHead(val) {
        const node = new SinglyLinkedNode(val);

        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const reversed = new SinglyLinkedList();


        let curr = this.head;
        
        while (curr) {
            reversed._addToHead(curr.value);
            curr = curr.next;
        }

        return reversed;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place  
        if (!this.head) return this;
        let curr = this.head;
        let next = curr.next;
        let prev = null;
         //                          p      c     n                                
         // 1 <- 2 <- 3 <- 4 <- 5 <- 6
        while (next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
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
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;

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
        if (!this.head) return;
        const mid = Math.floor((this.length / 2));
        let count = 1;
        let curr = this.head;


        while (count <= mid && curr) {
            curr = curr.next;
            count++;
        }

        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    

    reverse() {
        // Returns a new reversed version of the linked list
        const reversed = new DoublyLinkedList();

        let curr = this.tail;

        while (curr) {
            reversed.addToTail(curr.value);
            curr = curr.prev;
        }

        return reversed
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;

        let prev;
        while (curr.next) {
            prev = curr;
            [curr.prev, curr.next] = [curr.next, curr.prev];
            curr = curr.prev;
        }
        this.tail = this.head;
        this.head = curr;
        this.head.next = prev;
        return this;
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
