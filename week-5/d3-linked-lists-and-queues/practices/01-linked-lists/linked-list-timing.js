const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

const headAdder = (list, n) => {
    for (let i = 1; i < n; i++) {
        list.addToHead(i);
    }
}

const tailAdder = (list, n) => {
    for (let i = 1; i < n; i++) {
        list.addToTail(i);
    }
}

let ll = new LinkedList();

console.time('ll addToHead: ');
headAdder(ll, 100000);
console.timeEnd('ll addToHead: ');

ll = new LinkedList();

console.time('ll addToTail: ');
tailAdder(ll, 100000);
console.timeEnd('ll addToTail: ');

let dll = new DoublyLinkedList();

console.time('dll addToHead: ');
headAdder(dll, 100000);
console.timeEnd('dll addToHead: ');

dll = new DoublyLinkedList();

console.time('dll addToTail: ');
tailAdder(dll, 100000);
console.timeEnd('dll addToTail: ');
