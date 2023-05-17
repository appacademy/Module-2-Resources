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
    // const start = Date.now()
    list.addToHead(i);
    // const end = Date.now()
    // console.log(end - start)
  }
};
const adderTail = (list) => {
  for (let i = 0; i < 100000; i++) {
    // const start = Date.now()
    list.addToTail(i);
    // const end = Date.now()
    // console.log(end - start)
  }
};

console.time('ll-add-to-head');
adderHead(ll);
console.timeEnd('ll-add-to-head');

ll = new LinkedList();
console.time('ll-add-to-tail');
adderTail(ll);
console.timeEnd('ll-add-to-tail');

console.time('dll-add-to-head');
adderHead(dll);
console.timeEnd('dll-add-to-head');

dll = new DoublyLinkedList();
console.time('dll-add-to-tail');
adderTail(dll);
console.timeEnd('dll-add-to-tail');
