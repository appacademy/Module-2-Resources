const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let n = 10000
let ll = new LinkedList();

// time complexity: sll addToHead is O(1); the loop O(n)
console.time("LL: addToHead")
for (let i = 0 ; i < n ; i++) {
  ll.addToHead(i);
}
console.timeEnd("LL: addToHead")


// time complexity: sll addToTail is O(n); the loop O(n^2)
ll = new LinkedList();
console.time("LL: addToTail")
for (let i = 0 ; i < n ; i++) {
  ll.addToTail(i);
}
console.timeEnd("LL: addToTail")


// time complexity: dll addToHead is O(1); the loop O(n)
let dll = new DoublyLinkedList();
console.time("DLL: addToHead")
for (let i = 0 ; i < n ; i++) {
  dll.addToHead(i);
}
console.timeEnd("DLL: addToHead")


// time complexity: dll addToTail is O(1); the loop O(n)
dll = new DoublyLinkedList();
console.time("DLL: addToTail")
for (let i = 0 ; i < n ; i++) {
  dll.addToTail(i);
}
console.timeEnd("DLL: addToTail")
