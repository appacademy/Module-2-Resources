const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let ll = new LinkedList();
let dll = new DoublyLinkedList();

// ll.addToHead(1)

function adderHead(list) {
  for (let i = 1; i <= 100000; i++) {
    list.addToHead(i);
  }
}
function adderTail(list) {
  for (let i = 1; i <= 100000; i++) {
    list.addToTail(i);
  }
}

console.time("singly linked ath");
adderHead(ll);
console.timeEnd("singly linked ath");

ll = new LinkedList();

console.time("singly linked att");
adderTail(ll);
console.timeEnd("singly linked att");

console.time("doubly linked ath");
adderHead(dll);
console.timeEnd("doubly linked ath");

dll = new DoublyLinkedList();

console.time("doubly linked att");
adderTail(dll);
console.timeEnd("doubly linked att");
