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
        //!!START SILENT
        // this.length = 0; // for O(1) listLength() time complexity
        //!!END
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        //!!START SILENT
        // this.length++; // for O(1) listLength() time complexity
        //!!END
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

        //!!START
        // O(n) solution:
        let length = 0;
        if (!this.head) return length;

        let curr = this.head;
        length++;
        while (curr.next) {
            length++;
            curr = curr.next;
        }
        return length;

        // O(1) solution: // needs an additional pointer on the linked list
        // return this.length;
        //!!END
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        //!!START
        let sum = 0;
        if (!this.head) return sum;

        let curr = this.head;
        sum += curr.value;
        while (curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n)
        //!!END
    }

    averageValue() {
        // Returns the average value of all the nodes

        //!!START
        // First way: O(n)
        if (!this.head) return 0;
        return this.sumOfNodes() / this.listLength();

        // Second way: O(n)
        // let sum = 0;
        // let length = 0;
        // if (!this.head) return sum;

        // let curr = this.head;
        // length++;
        // sum += curr.value;
        // while (curr.next) {
        //     curr = curr.next;
        //     sum += curr.value;
        //     length++;
        // }
        // return sum/length;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n)
        //!!END
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        //!!START
        let curr = this.head;
        while (n && curr) {
            if (n < 0) return null;
            curr = curr.next;
            n--;
        }
        if (n === 0 && curr) return curr;
        return null;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n)
        //!!END
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        //!!START
        // Need to find the length of the list:
        let curr = this.head;
        // To get Index, we -1 from length, then halve, then remove extra decimals
        const midIndex = Math.floor((this.listLength() - 1) / 2);
        let index = 0;
        while (index < midIndex && curr) {
            if (index < 0) return null;
            curr = curr.next;
            index++;
        }
        if (index === midIndex && curr) return curr;
        return null;
        //!!END

        // Write your hypothesis on the time complexity of this method here
    }

    //!!START SILENT
    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;
        // this.length++;
        return this;
    }
    //!!END

    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        //!!START
        // needed to implement helper method - addToHead
        const newList = new SinglyLinkedList();
        let curr = this.head;

        while (curr) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }

        return newList;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // New Linked list: O(n) time complexity, O(n) space complexity
        //!!END
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        //!!START
        if (!this.head) return this;
        let curr = this.head;
        let next = curr;
        let prev = null;
        while (next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // Reverse in place: O(n) time complexity, O(1) space complexity
        //!!END
    }

    //!!START SILENT
    print() { // O(n)
        // Print out the linked list
        if (!this.head) return;

        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
    //!!END
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
        //!!START SILENT
        // this.length = 0; // for O(1) listLength() time complexity
        //!!END
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        //!!START SILENT
        // this.length++; // for O(1) listLength() time complexity
        //!!END
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

        //!!START
        // Don't need to find the length of the list:
        let first = this.head;
        let last = this.tail;
        
        while (first !== last && first.next !== last) {
            first = first.next;
            last = last.prev;
        }
        
        return first;
        //!!END
        
        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // O(n) time complexity, O(1) space complexity.
        //!!END
    }

    reverse() {
        // Returns a new reversed version of the linked list

        //!!START
        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // New Linked list: O(n) time complexity, O(n) space complexity
        //!!END
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        //!!START
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
        //!!END

        // Write your hypothesis on the time complexity of this method here
        //!!START SILENT
            // Reverse in place: O(n) time complexity, O(1) space complexity
        //!!END
    }

    //!!START SILENT
    print() { // O(n)
        // Print out the linked list
        if (!this.head) return;

        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
    //!!END
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
