const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let ll = new LinkedList();
let dll = new DoublyLinkedList();

const adderHead = (list) => {
  for (let i = 0; i < 100000; i++) {
    list.addToHead(i);
  }
}

const adderTail = (list) => {
  for (let i = 0; i < 100000; i++) {
    list.addToTail();
  }
}

console.time('ll addToHead')
adderHead(ll);
console.timeEnd('ll addToHead')

ll = new LinkedList();

console.time('ll addToTail')
adderTail(ll);
console.timeEnd('ll addToTail')

console.time('dll addToHead')
adderHead(dll);
console.timeEnd('dll addToHead')

dll = new DoublyLinkedList();

console.time('dll addToTail')
adderTail(dll);
console.timeEnd('dll addToTail')

