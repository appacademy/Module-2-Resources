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
        // this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        // this.length++;

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
        // O(n)
        let length = 0; 
        if (!this.head) return length;
        let curr = this.head;
        while(curr) {
            length++;
            curr = curr.next;
        }
        return length;

        // O(1)
        // add a length property to the class
        // return this.length;
    }

    sumOfNodes() {
        if (!this.head) return 0;
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;

        while(curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        if (!this.head) return 0;

        const sum = this.sumOfNodes();
        console.l
        const length = this.listLength();

        return sum / length;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (!this.head) return undefined;

        let curr = this.head;
        let idx = 0;

        while(curr && idx < n) {
            curr = curr.next;
            idx++;
        }

        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        if (!this.head) return undefined;
        const length = this.listLength();

        const mid = Math.floor(length / 2);
        return this.findNthNode(mid);
        // Write your hypothesis on the time complexity of this method here
    }

    // make a helper to add to the list in reverse order
    // notice there is no addToHead yet
    addToHead(val) {
        const node = new SinglyLinkedNode(val);

        node.next = this.head;
        this.head = node;

        // this.length++;

        return this;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        if (!this.head) return undefined;
        const newList = new SinglyLinkedList();

        let curr = this.head;

        while (curr) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }

        return newList;


        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if (!this.head) return undefined;

        let curr = this.head;
        let next = curr;
        let prev = null;

        while (next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
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
        let headPointer = this.head;
        let tailPointer = this.tail;
        let isHeadsTurn = true;

        while (headPointer !== tailPointer) {
            if (isHeadsTurn) {
                headPointer = headPointer.next;
            } else {
                tailPointer = tailPointer.prev;
            }
            isHeadsTurn = !isHeadsTurn;
        }

        return headPointer;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        let curr = this.head;

        let prev;
        while (curr.next) {
            prev = curr;
            [curr.prev, curr.next] = [curr.next, curr.prev];
            curr = curr.prev;
        }
        this.head = curr;
        this.head.next = prev;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
