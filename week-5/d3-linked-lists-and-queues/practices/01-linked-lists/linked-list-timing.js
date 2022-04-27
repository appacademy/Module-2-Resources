const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let n = 20000;

// Set Up our Linked List Stuff
let ll1 = new LinkedList();
let ll2 = new LinkedList();
let llAddToHead = ll1.addToHead.bind(ll1);
let llAddToTail = ll2.addToTail.bind(ll2);

// Set up our D Linked List Stuff
let dll1 = new DoublyLinkedList();
let dll2 = new DoublyLinkedList();
let dllAddToHead = dll1.addToHead.bind(dll1);
let dllAddToTail = dll2.addToTail.bind(dll2);

const test = (n, cb, name) => {
  console.time(`${name}`);
  for (let i = 0; i < n; i++) {
    cb(i);
  }
  console.timeEnd(`${name}`);
}

test(n, llAddToHead, "LL addToHead: ");
test(n, llAddToTail, "LL addToTail: ");
test(n, dllAddToHead, "DLL addToHead: ");
test(n, dllAddToTail, "DLL addToTail: ");