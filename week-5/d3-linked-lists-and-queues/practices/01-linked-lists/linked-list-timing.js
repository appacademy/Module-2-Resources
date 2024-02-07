const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here


let ll = new LinkedList()


console.time('11 add to head start')
for(let i = 0; i < 10000; i++){
  ll.addToHead(i);
}
console.timeEnd('11 add to head start')
// ???


ll = new LinkedList()
console.time('11 add to tail start')
for(let i = 0; i < 10000; i++){
  ll.addToTail(i);
}
console.timeEnd('11 add to tail start')
// ???



let dll = new DoublyLinkedList();
console.time('dl add to head start')
for(let i = 0; i < 10000; i++){
  dll.addToHead(i);
}
console.timeEnd('dl add to head start')
// ???


dll = new DoublyLinkedList();
console.time('dl add to tail start')
for(let i = 0; i < 10000; i++){
  dll.addToTail(i);
}
console.timeEnd('dl add to tail start')
// ???
