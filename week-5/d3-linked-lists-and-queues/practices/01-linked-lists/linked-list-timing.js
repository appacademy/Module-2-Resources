const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let n = 40000
let ll = new LinkedList();

// ll.addToHead is O(1) making this loop O(n)
console.time("LL: addToHead")
for (let i = 0 ; i < n ; i++) {
  ll.addToHead(i);
}
console.timeEnd("LL: addToHead")


// ll.addToTail is O(n) making this loop O(n^2)
// Doubling n will increase runtime by 4x
ll = new LinkedList();
console.time("LL: addToTail")
for (let i = 0 ; i < n ; i++) {
  ll.addToTail(i);
}
console.timeEnd("LL: addToTail")


// dll.addToHead is O(1) making this loop O(n)
let dll = new DoublyLinkedList();
console.time("DLL: addToHead")
for (let i = 0 ; i < n ; i++) {
  dll.addToHead(i);
}
console.timeEnd("DLL: addToHead")


// dll.addToTail is O(1) making this loop O(n)
dll = new DoublyLinkedList();
console.time("DLL: addToTail")
for (let i = 0 ; i < n ; i++) {
  dll.addToTail(i);
}
console.timeEnd("DLL: addToTail")