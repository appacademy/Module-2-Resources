const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let n = 10000

let ll = new LinkedList()

console.time("singlyLL: addToHead")
for (let i = 0; i < n; i++) {
    ll.addToHead(i)
}
console.timeEnd("singlyLL: addToHead")


ll = new LinkedList()

console.time("singlyLL: addToTail")
for (let i = 0; i < n; i++) {
    ll.addToTail(i)
}
console.timeEnd("singlyLL: addToTail")





let dll = new DoublyLinkedList()

console.time("doublyLL: addToHead")
for (let i = 0; i < n; i++) {
    dll.addToHead(i)
}
console.timeEnd("doublyLL: addToHead")


dll = new DoublyLinkedList()

console.time("doublyLL: addToTail")
for (let i = 0; i < n; i++) {
    dll.addToTail(i)
}
console.timeEnd("doublyLL: addToTail")
