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

    dequeue() {
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
        this.numList = new LinkedList(); // linked list?

        this.allowedNums = new Set(); // set????
    }

    // Add a number to the list of allowed numbers
    // Should not have any duplicates in allowedNums
    addAllowedNum(num) {
        // O(1)
        if (!this.allowedNums.has(num)) {
            // set.has() ????
            this.allowedNums.add(num);
            return `${num} added to allowedNums`;
        } else {
            return `${num} already in allowedNums`;
        }
    }

    // Returns the count of numbers in numList
    numCount() {
        // O(n)
        // let count = 0;
        // while (this.numList[count] !== undefined) {
        //     count++;
        // }
        // return count;
        return this.numList.length; // O(1)
    }

    // Returns true if the number is allowed, false otherwise
    isNumAllowed(num) {
        //O(1)
        return this.allowedNums.has(num);
    }

    // Build a numlist of integers from 0 to amount.
    // Only include allowed numbers
    // Returns count of numbers in numList
    buildNumList(amount) {
        for (let i = 0; i <= amount; i++) {
            if (this.isNumAllowed(i)) {
                this.numList.enqueue(i); // O(1)
            }
        }
        return this.numCount();
    }

    // Remove and return the first number in the numList
    // If numList is empty, return undefined
    getFirstNum() {
        // O(n)
        if (this.numList.length > 0) {
            return this.numList.dequeue(); // dequeue???
        } else {
            return undefined;
        }
    }

    // Add a new number to the back of the numList
    addNumToBack(num) {
        if (this.isNumAllowed(num)) this.numList.enqueue(num);
        return this.numList.tail.value;
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
