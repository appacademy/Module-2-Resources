class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        const node = new Node(val);

        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }

    removeFromHead() {
        if (!this.head) return null;

        const oldHead = this.head;

        this.head = this.head.next;
        oldHead.next = null;
        return oldHead;
    }
}

const q = new Queue();

q.addToTail([2,0]);
q.addToTail([2,5]);
q.addToTail([3,5]);
q.addToTail([6,5]);
console.log(q.addToTail([7,8]));

console.log(q.removeFromHead())
console.log(q)


const arr = [1,32,4,5,6];

arr.push(45)
arr.shift()