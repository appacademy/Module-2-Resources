const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let ll = new LinkedList();

let n = 100000;
let i = 0;

console.time("LL: addToHead");
while (i <= n) {
    ll.addToHead(i);
    i++;
}
console.timeEnd("LL: addToHead");

i = 0;

ll = new LinkedList();

console.time("LL: addToTail")
while(i <= n) {
    ll.addToTail(i);
    i++
}
console.timeEnd("LL: addToTail")

let dll = new DoublyLinkedList();

i = 0;

console.time("DLL: addToHead")
while (i <= n) {
    dll.addToHead(i)
    i++;
}
console.timeEnd("DLL: addToHead")

dll = new DoublyLinkedList();
i = 0;

console.time("DLL: addToTail")
while (i <= n) {
    dll.addToTail(i);
    i++;
}
console.timeEnd("DLL: addToTail")