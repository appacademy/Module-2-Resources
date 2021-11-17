const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const sll = new LinkedList()
const dll = new DoublyLinkedList()

const n = 10000

// timer start
for (let i = 0; i < n; i++ ){
    sll.addToHead(i)
}
// timer end

dll.addToHead(2)
