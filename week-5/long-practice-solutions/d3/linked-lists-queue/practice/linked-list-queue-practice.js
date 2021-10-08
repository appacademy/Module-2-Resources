class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        // this.length = 0; // for O(1) listLength() time complexity
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        // this.length++; // for O(1) listLength() time complexity

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
    }

    sumOfNodes() { // O(n)
        // Returns the sum of the values of all the nodes
        let sum = 0;
        if (!this.head) return sum;

        let curr = this.head;
        sum += curr.value;
        while (curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes

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
    }

    findNthNode(n) { // O(n)
        // Returns the node at the nth index from the head
        let curr = this.head;
        while (n && curr) {
            if (n < 0) return null;
            curr = curr.next;
            n--;
        }
        if (n === 0 && curr) return curr;
        return null;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        let curr = this.head;
        let mid = this.head;

        if (!mid) return null;

        let index = 0;
        while (curr) {

            curr = curr.next;
            if (!curr) return mid;

            if (index % 2 === 1) mid = mid.next;

            index++;
        }
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;

        // this.length++;

        return this;
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // New Linked list: O(n) time complexity, O(n) space complexity
        // needed to implement helper method - addToHead
        const newList = new SinglyLinkedList();
        let curr = this.head;

        while (curr) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }

        return newList;

    }

    reverseInPlace() {
        // Returns an in-place reversed version of the linked list

        // Reverse in place: O(n) time complexity, O(1) space complexity
        if (!this.head) return this;
        let curr = this.head;
        let next = curr.next;
        let prev = null;
        while (next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
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
        // this.length = 0; // for O(1) listLength() time complexity
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        // this.length++; // for O(1) listLength() time complexity

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

        // Don't need to find the length of the list:
        let firstPointer = this.head;
        let secondPointer = this.tail;
        let atFirst = false;

        while (firstPointer !== secondPointer) {
            if (atFirst) {
                firstPointer = firstPointer.next;
            } else {
                secondPointer = secondPointer.prev;
            }
            atFirst = !atFirst;
        }

        return firstPointer;
    }

    reverse() {
        // Returns a reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // New Linked list: O(n) time complexity, O(n) space complexity
        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;
    }

    reverseInPlace() {
        // Returns a reversed version of the linked list

        // Reverse in place: O(n) time complexity, O(1) space complexity
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
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
