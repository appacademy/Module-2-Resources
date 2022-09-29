# Linked List and Queue Long Practice

Clone the starter project. Run `npm install` to install all dependencies.

## Learning Goals

* Compare and contrast the properties and operations of Arrays and Linked Lists
* Identify the mechanics and complexity of adding and removing elements from a
  Linked List
* Implement a Linked List
* Traverse and search through Linked Lists
* Understand the mechanics of a Doubly Linked List, and the tradeoffs from a
  Singly Linked List
* Implement a Queue data structure using Linked Lists
* Select a Linked List, Doubly Linked List or Queue when they are the
  appropriate tool for solving a problem

## Phase 1: Implementing a Linked List

Having been introduced to linked lists, you should have a clearer understanding
about what makes a linked list different than an array. There are things that
linked lists are better at doing, but there are also areas where the linked
list may fall short compared to the array.

You've also explored an improvement on the original singly linked list with the
doubly linked list, and how the queue data structure can function as a linked
list. Explore some more and try to implement these yourself!

You'll start with building a singly linked list, move up to a doubly linked
list, and finally implement a queue using the linked list you built.
Note that the singly linked list will NOT have a `tail` pointer, whereas the
doubly linked list will, along with the queue.

Within the starter code, a few methods will have been implemented for you
already; however, there are some bugs with them. **Your job will be to find the
bugs, squash them, and finish implementing the remaining methods.**

**While implementing the methods, discuss with your pair what your think the
time complexity of the method should be and write in comments the time
complexity of the method.**

Starter code is provided for you in `/implementation`.

### `SinglyLinkedList`

Start with implementing a singly linked list in file
`./implementation/01-singly-linked-list.js` file. Your goal is to pass all the
specs when you run the tests on it. The test specs live in the
`./implementation/test/01-singly-linked-list.js` file.

To run the test specs, run this command at the root of your project:

```bash
npm test implementation/test/01-singly-linked-list-specs.js
```

This implementation of a singly linked list will have `head` and `length`
pointers. The nodes will have a `next` pointer only and will store a single
`value`.

Flush out the following methods on the `SinglyLinkedList` class:

* `addToHead` - adds a new node to the head
* `addToTail` - adds a new node to the tail
* `removeFromHead` - removes the node at the head
* `removeFromTail` - removes the node at the tail
* `peekAtHead` - returns the value of the node at the head
* `print` - prints the value of each node starting from the head to the tail

Pass all the specs before moving on. **Make sure to read the error messages for
hints!**

### `DoublyLinkedList`

Next, implement a doubly linked list in the
`./implementation/02-doubly-linked-list.js` file. Your goal is to pass all the
specs when you run the tests on it. The test specs live in the
`./implementation/test/02-doubly-linked-list.js` file.

To run the test specs, run this command at the root of your project:

```bash
npm test implementation/test/02-doubly-linked-list-specs.js
```

This implementation of a doubly linked list will have `head`, `tail` and
`length` pointers. The nodes will have `next` and `prev` pointers and will store
a single `value`.

Flush out the following methods on the `DoublyLinkedList` class:

* `addToHead` - adds a new node to the head
* `peekAtHead` - returns the value of the node at the head
* `removeFromHead` - removes the node at the head
* `addToTail` - adds a new node to the tail
* `peekAtTail` - returns the value of the node at the head
* `removeFromTail` - removes the node at the tail

Pass all the specs before moving on. **Make sure to read the error messages for
hints!**

### `Queue`

Finally, implement a queue in the
`./implementation/03-queue.js` file. Your goal is to pass all the
specs when you run the tests on it. The test specs live in the
`./implementation/test/03-queue-specs.js` file.

To run the test specs, run this command at the root of your project:

```bash
npm test implementation/test/03-queue-specs.js
```

This implementation of a queue will use a Linked List and have `head`, `tail`
and `length` pointers. The nodes will have a `next` pointer only and will store
a single `value`.

Flush out the following methods on the `Queue` class:

* `enqueue` - adds a new node to the end of the queue (tail)
* `dequeue` - removes the node at the start of the queue (head)

After implementing the queue, make sure that `enqueue` and `dequeue` have the
desired time complexities by running the last spec:

```bash
npm test implementation/test/04-queue-O1-specs.js
```

Pass all the specs before moving on. **Make sure to read the error messages for
hints!** Run `npm test implementation/test` to test if you still pass all the
specs in Part 1 before moving onto Part 2.

## Phase 2: Practice Problems - Singly Linked Lists

While solving the problems, discuss with your pair what your think the time
complexity of the solution should be and write in comments the time
complexities of any Linked List methods you use. Evaluate the time and space
complexities of each problem after you finish them. Ask yourself if the
problem's time and space complexities can be further optimized.

Implement the following problems. The skeleton code is provided to you in
`./practice/linked-list-queue-practice.js`

Your goal is to pass all the specs when you run the tests on it. The test specs
live in the `./practice/test/linked-list-queue-practice-spec.js`file.

### Linked List Length

Given the head of a linked list, write a method on the linked list class to
find the length of the linked list. Can you do this in `O(n)`? Can you do this
in `O(1)` time? What are the tradeoffs for each?

Example:

```js
const list1 = new LinkedList()
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);

console.log(list1.listLength());     // => 4
```

### Sum of Nodes

Given the head of a linked list, write a method to find the sum of the values
of the nodes of the linked list. The function should return 0 if the list is
empty.

Example:

```js
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(4);
list1.addToTail(5);
list1.addToTail(8);

console.log(list1.sumOfNodes());     // => 18
```

### Average Value of Nodes

Given a linked list, write a method that calculates the average of the values
within the linked list. Returns 0 is the list is empty.

Example:

```js
const list1 = new LinkedList();
list1.addToTail(12);
list1.addToTail(6);
list1.addToTail(5);
list1.addToTail(13);

console.log(list1.averageValue());    // => 9
```

### Find the Nth Node

Given a linked list and position, N, write a function that returns the *node*
located at that position within the linked list. Returns null if the Nth
position doesn't exist.

Example:

```js
const list1 = new LinkedList();
list1.addToTail(13);
list1.addToTail(21);
list1.addToTail(32);
list1.addToTail(14);
list1.addToTail(53);

console.log(list1.findNthNode(3));     // => 14 (node)
```

## Phase 3: Practice Problems - Doubly Linked Lists

For the following problems, implement the functions once assuming the linked
list is singly linked, and then again assuming the linked list is doubly
linked. Does this affect the solution? If so, note how the solution is
affected.

### Find Mid Node

Given a linked list, write a function that returns the middle *node* within
the linked list.

Example:

```js
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
list1.addToTail(5);

console.log(list1.findMid());     // => 3 (node)

const list2 = new LinkedList();
list2.addToTail(1);
list2.addToTail(2);
list2.addToTail(3);
list2.addToTail(4);
list2.addToTail(5);
list2.addToTail(6);

console.log(list2.findMid());     // => 3 (node)
```

### Reverse Linked List

Given a linked list, write a function that returns the linked list in reverse
order.

(Can you do this in-place without creating a new linked list? Try it!)

Example:

```js
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
list1.addToTail(5);
list1.addToTail(6);

console.log(list1.reverse());     // => head -> 6 -> 5 -> 4 -> 3 -> 2 -> 1
```