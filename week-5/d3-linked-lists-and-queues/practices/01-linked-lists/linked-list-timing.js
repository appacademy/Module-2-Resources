const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let ll = new LinkedList();
let dll = new DoublyLinkedList();

// ll.addToHead(2)
// dll.addToHead(3)

// console.log(ll)
// console.log(dll)

const adderHead = (list) => {
  for (let i = 0; i <= 1000000; i++) {
    list.addToHead(i);
  }
}

const adderTail = (list) => {
  for (let i = 0; i <= 10000; i++) {
    list.addToTail(i);
  }
}

console.time('LL: addToHead')
adderHead(ll);
console.timeEnd('LL: addToHead')

ll = new LinkedList();

console.time('LL: addToTail')
adderTail(ll);
console.timeEnd('LL: addToTail')

console.time('DLL: addToHead')
adderHead(dll);
console.timeEnd('DLL: addToHead')

dll = new DoublyLinkedList()

console.time('DLL: addToTail')
adderTail(dll);
console.timeEnd('DLL: addToTail')