const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
// Could use Date.now
// Or console.time and console.timeEnd

// Singly LL, without tail property
let ll = new LinkedList()
const n = 10000

console.time("Singly LL: AddToHead")
for (let i = 0; i < n; i++) {
    ll.addToHead(i)
}
console.timeEnd("Singly LL: AddToHead")


ll = new LinkedList()

console.time("Singly LL: AddToTail")
for (let i = 0; i < n; i++) {
    ll.addToTail(i)
}
console.timeEnd("Singly LL: AddToTail")


// Doubly LL, with tail property
let dll = new DoublyLinkedList()

console.time("Doubly LL: AddToHead")

for (let i = 0; i < n; i++) {
    dll.addToHead(i)
}

console.timeEnd("Doubly LL: AddToHead")


dll = new DoublyLinkedList()

console.time("Doubly LL: AddToTail")
for (let i = 0; i < n; i++) {
    dll.addToTail(i)
}
console.timeEnd("Doubly LL: AddToTail")
