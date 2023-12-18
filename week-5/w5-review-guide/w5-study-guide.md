# Test Information:

- 3 hours for test - total of 31 points (passing is 24)
- 14 Multiple Choice Questions
- 2 coding problems:
    - 6 specs on first one
    - 11 specs on the second



# Resources allowed For this assessment, you may use the following resources:

- MDN
- open.appacademy.io
- code you've written yourself
- VSCode
- Console


# Topics to know for multiple choice:
- BigO of operations with Single and Double
Linked Lists

- Describe an indexed location in memory

- Understand the functionality of methods on Lists, Stacks and Queues

- Be able to convert characters from Binary to ASCII, Hexadecimal, base10 and
back.

- Be able to look at a piece of code and determine the BigO time complexity.

- BigO time complexity of methods on a dynamic array

- Know when hash table collisions occur

- Know how many bits make up various sizes of memory

- Know the BigO time complexity of operations in a hash table

- Be able to read a truth table and give outcomes of values

- Know the space complexities of the data structures learned this week

- Know the properties of an array


# Things to know for coding portion:
- implement a queue or a linked list (you should have an implementation you wrote this
week that you can use)
- identify cases of O(n) complexity and be able to optimize to O(1)
by using data structures (sets, queues, linked lists) other than
arrays and the corresponding methods to access or add elements
    - make sure you know the properties of each
- be able to convert hexadecimal to ascii characters and return strings


# **Topics to know for multiple choice:**

## **Big O of operations with Single and Double Linked Lists:**

-   **Single linked:**

    > H[1] => [2] => T[3] => null

    -   Add to head: O(1) time | O(1) space
    -   add to tail: _with_ tail pointer O(1) time | _without_ tail pointer O(n) time | space O(1)
    -   remove from tail: O(n) time | O(1) space
    -   remove from head: O(1)time | O(1) space
    -   find = O(n)

-   **Double Linked:**

    > null <<= H[1] <=> [2] <=> T[3] =>> null

    -   add to head: O(1) time | O(1) space
    -   add to tail: O(1) time | O(1) space
    -   remove from tail: O(1) time
    -   remove from head: O(1) time
    -   find: O(n)

-   Relative Advantages:
    -   LL > DLL:
        -   less memory
        -   simpler code
    -   DLL > LL
        -   Improved time complexity for removeFromTail (when LL lacks a tail pointer)
        -   previous pointer (makes removing nodes much easier)

---

## **Describe an indexed location in memory**

-   _Memory address_ === _memory pointer_ === _memory reference_ all refer to an indexed location in memory.
-   Memory can be thought of as a long strip of cells that can be electrically charged. Each cell is divided into chunks called _words_ that are the default data size for the given processor (64 bit architecture === 64 bit words).
-   Each _word_ is indexed by its **memory address that acts as a pointer to indicate where the data is stored in memory.**

---

## **Understand the functionality of methods on Lists, Stacks and Queues:**

**Lists**

-   Single Linked (_without a tail pointer_):

    -   **addToHead():**
        -   create a new node, point the new node's next to the current head.
        -   reassign the current head to the new node.
    -   **addTo Tail():**
        -   create a new node, point the current tail's next to the new node - reassign the current tail to the new node.
    -   **removeFromHead():**
        -   set the new head to the current head's next pointer
    -   **removeFromTail():**
        -   iterate through all of the nodes until we find a node with a next.next property that is equal to null.
        -   set the that current node's next property to null.

**Stacks**:

-   We know that stacks are **L**ast in **F**irst out (**LIFO**), or also, **F**irst in **L**ast out (**FILO**) so their methods will follow this pattern.

    -   **push():** _Add_ something to the _end_ (or the _top_) of the stack.
    -   **pop():** _Remove_ something from the _end_ (or the _top_) of the stack

**Queues:**

-   We know that queues are **F**irst in **F**irst out (**FIFO**), or, **L**ast in **L**ast out (**LILO**).

    -   **Enqueue():** _Add_ something to the _back_, or _end_, of the list.
    -   **Dequeue():** _Remove_ something from the _head_ or the _front_ of the queue.

---

## Be able to convert characters from Binary to ASCII, Hexadecimal, base10 and back:

> See conversions.js

-   **parseInt(_string_, _radix_):**
    -   Converts it's first argument to a string, parses that string, and returns an integer or NaN.
    -   Binary base (radix) = 2
    -   Decimal base (radix) = 10
    -   Hexadecimal base (radix) = 16
-   **Obj.toString(_\*radix_):**
    -   returns a string representing the object
    -   For _Numbers_ and _BigInt_ method takes an optional _radix_ argument.
        -   This allows you to convert base 10 numbers to another base
-   **String.fromCharCode(...nums):**
    -   nums = a sequence of numbers that are (UTF-16) 16 bits or 2 octets wide (i.e.: 83, 72, 73, 84).
        -   Range is 0 - 65535.
    -   Returns: a string
-   **str.charCodeAt(index):**
    -   _index:_ A number >= 0 and < then the length of the input str.
        -   If index given is not a number it defaults to 0.
    -   Returns a number representing the UTF-16 value of the character at the given index (i.e.: 70, 85, 67, 75)
        -   if index is out of range, return NaN

---

## Be able to look at a piece of code and determine the BigO time complexity:

1. Example:

```js
// time O(1)
function pusher(arr) {
    for (let i = 0; i < 10; i++) {
        console.log(arr.push(i));
    }
}
```

2. Example:

```js
// time O(n)
function unshifter(arr) {
    for (let i = 0; i < 10; i++) {
        console.log(arr.unshift(i));
    }
}
```

3. Example:

```js
// time O(n)
function doubleFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log('lol');
    }
    for (let i = 0; i < arr.length; i++) {
        console.log('lol again');
    }
}
```

4.  Example:

```js
// time O(n^2)
function doubleFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log('lol again');
        }
        console.log('lol');
    }
}
```

---

## BigO time complexity of methods on a dynamic array:

-   **pop():**

    -   time O(1) - space O(1)
    -   removing an element of the end, we don't have to iterate because the array keeps the array's length as meta data.

-   **push():**

    -   time O(1) - space O(1)
    -   Because dynamic arrays are over-allocated with additional memory spaces, adding something to the end of the array fills a slot in memory that was already allocated.
    -   worst case scenario, the array has to resize, which would make the push an O(n) time and space. But because it happens so infrequently, we consider push an O(1)

-   **shift():**

    -   time O(n) - space O(1)
    -   it is O(n) because when we remove an element from the front of the array, all of the other elements have to shift to the left.

-   **unshift():**

    -   time O(n) - space O(1)
    -   it is O(n) because when we add to the front of an array, all of the elements must first move to the right one space.

-   **indexOf():**

    -   time O(n) - space O(1)
    -   because it must iterate through each element to find the element you are searching for.

-   **reverse():**

    -   time O(n) - space O(1)
    -   O(n) for time complexity since it requires you to copy each element in the array, and changes their indexes

-   **[...arr]:**

    -   time O(n) - space O(n)
    -   O(n) for time because it has to copy each element in the original array into the new array
    -   O(n) for space because it's copying each element from the original array into a new array.

-   **reduce():**

    -   time O(n) - space O(1) or O(n) (depending on your accumulator)
    -   Time is 0(n) because it must iterate through the given array
    -   Space O(1) when the accumulator is an integer.
    -   space O(n) when the accumulator is an array or pojo.

-   **filter():**

    -   time O(n) - space O(n)
    -   time because it iterates through the given array
    -   space because it creates a new array with all of the true values.

-   **map():**

    -   time O(n) - space O(n)
    -   time because it iterates through the given array
    -   space because it creates a new array with all of the new values.

-   **forEach():**

    -   time O(n) - space O(1)
    -   time because it iterates through the given array

-   **slice():**

    -   time O(n) - space O(n)
    -   it has to iterate through the given indices
    -   it creates a new array to copy the selected elements

-   **splice()**
    -   time O(n) - space O(n)
    -   It has to iterate through the given index and amount

---

## Know when hash table collisions occur:

-   A hash table collision occurs when the hashMod function returns the same index for two different given keys.
-   One of the ways of resolving a collision is by increasing the size of the hash table (increase the size of the underlying array).
-   Probability of a collision is (1 / buckets.length )
    -   Each slot (index) in the array is called a "bucket".
-   **Load Factor** === the number of key/value pairs divided by the number of "buckets".
-   Generally, most languages resize when the load factor === 0.7.
    -   This reduces the probability of collisions while minimizing wasted space.
-   Example of code used for dynamically resizing hash tables in javascript that can be added to top of insert() method:

```js
if (this.count / this.capacity > 0.7) {
    this.resize();
}
```

---

## Know how many bits make up various sizes of memory:

-   **bytes:**

    -   kilo - 1,000
    -   mega - 1,000,000
    -   giga - 1,000,000,000
    -   terra - 1,000,000,000,000
    -   peta - 1,000,000,000,000,000

-   **bits:**
    -   kilo - 8,000
    -   mega - 8,000,000
    -   giga - 8,000,000,000
    -   terra - 8,000,000,000,000
    -   peta - 8,000,000,000,000,000

---

## Know the BigO Time complexity of operations in a hash table:

-   resize
    -   time O(n) (space O(n))
-   read
    -   time O(1) for key lookup, O(n) for value lookup if linked list was used to handle hash collisions.
-   insert
    -   time O(1)
-   delete
    -   time O(1)
-   hash
    -   time O(1)

---

## Know the space complexities of the data structures learned this week:

-   queues:
    -   O(n)
-   linked list:
    -   O(n)
-   stack:
    -   O(n)
-   hash table:
    -   O(n)
-   Recursive Functions = O(n)

> Example: Which function has a worse **space** complexity?

```js
function first(n) {
    if (n < 0) return;

    console.log(n);

    first(n - 1);
}

function second(n) {
    arr = [];

    for (let i = 0; i <= n; i++) {
        arr.unshift(i);
    }

    console.log(arr.join('\n'));
}
// They are both the same.
```

---

## Know the properties of an array:

**Static Arrays:**

1. Sequence of elements of the same type stored in contiguous block of memory.
2. Size needs to be declared during instantiation.
3. Stores elements in sequential order

# Things to know for coding portion:

## Implement a queue or a linked list:

-   You should have an implementation you wrote this week that you can use.

```js
class Node {
	constructor(val) {
		this.next = null;
		this.value = val;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	enqueue(val) {
		let newNode = new SinglyLinkedNode(val);
		if (!this.length) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this.length;
	}

	dequeue() {
		let removed = this.head;
		if (!this.length) return null;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removed.next;
		}
		this.length--;
		return removed.value;
	}
}
```

---

## Make sure you know the properties of each:

**Sets:**

-   **.add()** ~> arr.push()
-   **.has()** ~> arr.includes()
-   **.delete()** ~> arr.splice()
-   **.forEach()** ~> arr.forEach()

**queue:**

-   **enqueue()** ~> arr.push()
-   **dequeue** ~> arr.shift()

---

## Be able to convert hexadecimal to ascii characters and return strings:

-   **Hexadecimal to ASCII:**

```js
function hexToASCII(hexStr) {
	let converted = '';
	for (let i = 0; i < hexStr.length; i += 2) {
		let hex = hexStr.slice(i, i + 2);
		let decOfHex = parseInt(hex, 16);
		converted += String.fromCharCode(decOfHex);
	}
	return converted;
}

// console.log(hexToASCII("736F667477617265")); // => software
```

-   **Hexadecimal Array to ASCII:**

```js
function arrHexToASCII(hexArr) {
	let converted = '';
	hexArr.forEach((word) => {
		for (let i = 0; i < word.length; i += 2) {
			let hex = word.slice(i, i + 2);
			let decOfHex = parseInt(hex, 16);
			converted += String.fromCharCode(decOfHex);
		}
		converted += ' ';
	});
	return converted;
}

// console.log(arrHexToASCII(['61707061636164656d79', '70726f626c656d', '736f6c76696e67'])) // => appacademy problem solving
```
