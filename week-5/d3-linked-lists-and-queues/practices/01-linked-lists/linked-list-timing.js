const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

const ll = new LinkedList();

const n = 10000;

console.time("LL: addToHead")

for (let i = 0; i < n; i++) {
    ll.addToHead(i);
}
console.timeEnd("LL: addToHead")

console.time("LL: addToTail")

for (let i = 0; i < n; i++) {
    ll.addToTail(i);
}
console.timeEnd("LL: addToTail")

const dll = new DoublyLinkedList()

console.time("DLL: addToHead")

for (let i = 0; i < n; i++) {
    dll.addToHead(i);
}
console.timeEnd("DLL: addToHead")

console.time("DLL: addToTail")

for (let i = 0; i < n; i++) {
    dll.addToTail(i);
}
console.timeEnd("DLL: addToTail")
