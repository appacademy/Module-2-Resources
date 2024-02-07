const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here








console.time('start')
for(let i = 0; i < 10000; i++){
  LinkedList.addToHead();
}
console.time('end')
// ???



console.time('start')
for(let i = 0; i < 10000; i++){
  LinkedList.addToTail();
}
console.time('end')
// ???




console.time('start')
for(let i = 0; i < 10000; i++){
  DoublyLinkedList.addToHead();
}
console.time('end')
// ???

console.time('start')
for(let i = 0; i < 10000; i++){
  DoublyLinkedList.addToTail();
}
console.time('end')
// ???
