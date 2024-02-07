const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here


const ll = new LinkedList()





console.time('start')
for(let i = 0; i < 10000; i++){
  ll.addToHead();
}
console.time('end')
// ???


ll = new LinkedList()
console.time('start')
for(let i = 0; i < 10000; i++){
  ll.addToTail();
}
console.time('end')
// ???



let dll = new DoublyLinkedList();
console.time('start')
for(let i = 0; i < 10000; i++){
  DoublyLinkedList.addToHead();
}
console.time('end')
// ???


dll = new DoublyLinkedList();
console.time('start')
for(let i = 0; i < 10000; i++){
  DoublyLinkedList.addToTail();
}
console.time('end')
// ???
