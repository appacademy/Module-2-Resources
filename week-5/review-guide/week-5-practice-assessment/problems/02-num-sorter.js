class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // Default to empty
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    dequeue() { // O(1)
        if (!this.head) {
            return null;
        }

        const returnValue = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.length--;
        return returnValue;
    }

    // Use this method for testing
    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        console.log('NULL');
    }
}

// Above is the linked list based queue
// Below is the NumSorter class that should be modified
class NumSorter {
    constructor() {
        this.numList = new LinkedList()

        this.allowedNums = new Set()
    }

    // Add a number to the list of allowed numbers
    // Should not have any duplicates in allowedNums
    addAllowedNum(num) {
        if (!this.allowedNums.has(num)) {  // Array.includes() O(n) or Set.has() O(1)
            this.allowedNums.add(num); // O(1)
            return `${num} added to allowedNums`;
        } else {
            return `${num} already in allowedNums`;
        }
    }

    // Returns the count of numbers in numList
    numCount() {  // currently O(n)
        // let count = 0;
        // while (this.numList[count] !== undefined) {
        //     count++;
        // }
        // return count;

        return this.numList.length // O(1) to access this property
    }

    // Returns true if the number is allowed, false otherwise
    isNumAllowed(num) {
        return this.allowedNums.has(num);
    }

    // Build a numlist of integers from 0 to amount.
    // Only include allowed numbers
    // Returns count of numbers in numList
    buildNumList(amount) {
        for (let i = 0; i <= amount; i++) {
            if (this.isNumAllowed(i)) {
                this.numList.enqueue(i);
            }
        }
        return this.numCount();
    }

    // Remove and return the first number in the numList
    // If numList is empty, return undefined
    getFirstNum() {
        if (this.numList.length > 0) {
            return this.numList.dequeue(); // Arry.shift() O(n) but, queue.dequeue O(1)
        } else {
            return undefined;
        }
    }

    // Add a new number to the back of the numList
    addNumToBack(num) {
        if (this.isNumAllowed(num)) this.numList.enqueue(num);
        return this.numList.tail.value
    }
}

// Uncomment to run local tests
// Note the linked list has a useful print() method

// const newNumSort = new NumSorter(0);
// console.log(newNumSort.addAllowedNum(0));
// console.log(newNumSort.addAllowedNum(1));
// console.log(newNumSort.addAllowedNum(2));
// console.log(newNumSort.addAllowedNum(3));
// console.log(newNumSort.buildNumList(4));

module.exports = { NumSorter, LinkedList };
