const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
function addToHead(list) {
  for (let i = 0; i < 1000; i++) {
    list.addToHead(i);
  }
}

function addToTail(list) {
  for (let i = 0; i < 1000; i++) {
    list.addToTail(i);
  }
}

let ll = new LinkedList();

console.time('ll-addToHead');
addToHead(ll);
console.timeEnd('ll-addToHead');

ll = new LinkedList();

console.time('ll-addToTail');
addToTail(ll);
console.timeEnd('ll-addToTail');

let dll = new DoublyLinkedList();

console.time('dll-addToHead');
addToHead(dll);
console.timeEnd('dll-addToHead');

ll = new DoublyLinkedList();

console.time('dll-addToTail');
addToTail(dll);
console.timeEnd('dll-addToTail');
