const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here


let ll = new LinkedList();

console.time('LL: addToHead');
for (let i = 0; i < 100000; i++) {
    ll.addToHead(i);
}
console.timeEnd('LL: addToHead');

ll = new LinkedList();

console.time('LL: addToTail');
for (let i = 0; i < 100000; i++) {
    ll.addToTail(i);
}
console.timeEnd('LL: addToTail');

let dll = new DoublyLinkedList();


console.time('DLL: addToHead');
for (let i = 0; i < 100000; i++) {
    dll.addToHead(i);
}
console.timeEnd('DLL: addToHead');

dll = new DoublyLinkedList();

console.time('DLL: addToTail');
for (let i = 0; i < 100000; i++) {
    dll.addToTail(i);
}
console.timeEnd('DLL: addToTail');