# Week 6 Test Info:
-11 multiple choice
-2 coding problems worth 18 points
	- tree problem worth 6 points
	- graph problem worth 12 points
-Total points: 29
-Passing points: 23
-Time allowed: 3.5 hours
-Resources Allowed:
    -MDN
    -open.appacademy.io
    -VSCode
    -Console
    -Code you wrote yourself

# What to study for Multiple Choice:
    -Be able to determine the O(n) of a refactored algorithm
    -Be able to describe the features, benefits, complexities and use cases for:
        breadth-first traversal,
        depth-first traversal,
        depth-first search and
        breadth first search

    -Be able to give the space and time complexities for the sorting algorithms
    we learned this week (both in-place and out-of-place)
    -Be able to describe and/or recognize a binary search tree, binary tree,
    and directed acyclic graph
    -Given a graphic representation of a tree, be able to list out elements in order
    for both depth first and breadth first traversals, as well as in-order, pre-order
    and post-order
    -Be able to identify a correct equation for sorting elements in an array using the
    built in array.sort() method for ascending and/or descending order
    -Be able to describe the behaviors of quick sort, merge sort, selection sort,
    bubble sort, and insertion sort
    -Be able to describe the behavior of a binary search

# What to study for coding portion:
    -Be able to implement a social graph similar to the practice assessment
    -Be able to implement a breadth first search on a tree

# What to study for Multiple Choice:

---

## Be able to determine the O(n) of a refactored algorithm:

-   Refactoring an algorithm with a time complexity of O(n^2) to be twice as fast, what would the new time complexity be?
    -   O(n^2 / 2) = O(n^2) because at large values of n we ignore coefficients.

---

## Be able to describe the features, benefits, complexities and use cases for:

1. **Breadth-first traversal:**

```js
breadthFirstTraversal() {
	// Example code for tree BFT
    // Put the starting node in a queue
		const queue = [this.root];
        // While the queue is not empty, repeat steps 3-4
		while (queue.length > 0) {
            // Dequeue a node and print it
			const node = queue.shift();
			// DO THE THING(S)!
            // Put all of the node's children in the back of the queue
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
}
```

-   ## **Features:**

    -   Breadth-first traversal visits nodes from nearest to furthest, moving level by level
    -   **Guaranteed to visit every reachable node in a connected graph.**
    -   BFT is implemented iteratively because it jumps between subtrees. **Don't use recursion.**
    -   Uses a **Queue** class or an array as a queue for its data structure.
    -   Space complexity of O(w) where w = max width

-   ## **Benefits:**
    -   Better for traversing unbalanced BST (think linked list).
    -   Useful for finding a shortest path between nodes.
-   **Complexities:**
    -   Uses more memory at larger n's.
    -   Using an array for **visited** would result in a search with a time complexity of O(n). Using a set results in a time complexity of O(1).
    -   Using an array for **queue** results in a time complexity of O(n) for each dequeue, this is because when a node is dequeued it requires shifting all the nodes left in the queue forward one space, opposed to an O(1) time complexity when using the Queue class (because it is like a linked list and has a head pointer).
    -   BFT considers all neighbors first and therefore not suitable for decision making trees used in games or puzzles.
-   **Use Cases:** Finding friends of friends (think Practice Assessment).

2. Depth-first traversal:

```js
depthFirstTraversal() {
	//Example code for tree DFT
    // Put the starting node on a STACK
		const stack = [this.root];
        // While the STACK is not empty, repeat steps 3-4
		while (stack.length > 0) {
            // POP a node and print it
			const node = stack.pop();
			//! DO THE THING(S)!
            // Put all of the node's children on the TOP of the STACK
			if (node.left) {
				stack.push(node.left);
			}
			if (node.right) {
				stack.push(node.right);
			}
		}
	}
```

-   Features:
    -   Visits nodes all the way to the bottom left and then right.
    -   **Guaranteed to visit every reachable node in a connected graph.**
    -   Uses a **stack** data structure and is generally implemented _recursively_.
    -   Space complexity of O(h) where h = height.
    -   Can be implemented 3 ways:
        1. Pre-Order: In BST pre-order DFT would allow you to construct a tree from an array
        2. In-Order: In BST will print nodes in order.
        3. Post-Order: Used for deleting a treeNode.
        -   All of these orders traverse the data the same way the only difference is the _order_ that nodes are _printed/pushed_.
-   Benefits:
    -   uses less memory then BFT for larger values of n.
    -   guaranteed to return _a_ valid path between nodes if one exists, but path is not guaranteed to be the shortest path.
        -   Can be useful when the graph is very wide with many branching paths, like finding the exit to a maze.
-   Complexities:
    -   Implementing it recursively.
    -   can be slower with smaller graphs, like unbalanced BST, that more closely resemble a linked list.
-   Use Cases:
    -   DFT is more suitable for game or puzzle problems. We make a decision, then explore all paths through this decision. And if this decision leads to win situation, we stop.

3. Depth-first search:

-   Same as DFT but will only traverse until it finds the **search target** and then stops.
    -   The search target will be your "DO THE THING".
    -   **Not guaranteed to visit all nodes.** Will only visit all when the search target is the last node to be searched.

4. Breadth first search:

-   Same as BFT but will only traverse until it finds the **search target** and then stops.
    -   The search target will be your "DO THE THING".
    -   **Not guaranteed to visit all nodes.** Will only visit all when the search target is the last node to be searched.

## Be able to give the space and time complexities for the sorting algorithms we learned this week (both in-place and out-of-place):

|      Algorithm      | Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
| :------------------: | :--------------------: | :-------------------: | :---------------------: | :--------------: |
|   **Bubble Sort:**   |          O(n)          |        O(n^2)         |         O(n^2)          |       O(1)       |
| **Selection Sort:**  |         O(n^2)         |        O(n^2)         |         O(n^2)          |       O(1)       |
| **Insertion Sort:**  |          O(n)          |        O(n^2)         |         O(n^2)          |       O(1)       |
|   **Merge Sort:**    |       O(nlog(n))       |      O(nlog(n))       |       O(nlog(n))        |       O(n)       |
|   **Quick Sort:**    |       O(nlog(n))       |      O(nlog(n))       |         O(n^2)          |    O(log(n))     |
| **Arr.sort((a,b)):** |       O(nlog(n))       |      O(nlog(n))       |       O(nlog(n))        |       O(1)       |

1. **Bubble Sort:**

-	Only on already sorted arrays does bubble sort achieve the best case time complexity of O(n).

-   **In-place:**
    -   Time: O(n)
    -   Space: O(1)
-   **Out-of-place:**
    -   Time: O(n^2)
    -   Space: O(1)

2. **Selection Sort:**

-   **In-place:**
    -   Time: O(n^2)
    -   Space: O(1)
-   **Out-of-place:**
    -   Time: O(n^2)
    -   Space: O(n)

3. **Insertion Sort:**

-	On very small n, or on nearly sorted data, insertion sort is more efficient than other efficient algorithms such as quicksort and merge sort with a time complexity of O(n).

-   **In-place:**
    -   Time: O(n^2)
    -   Space: O(1)
-   **Out-of-place:**
    -   Time: O(n^2)
    -   Space:O(n)

4. **Merge Sort:**

-   Merge sort is preferred over quicksort for linked lists because it does not require random access to indices. Remember that linked list nodes may not be stored in adjacent memory. Therefore merge sort can be implemented without taking up extra memory due to the difference in how memory is allocated for arrays and linked lists.

-   **Out-of-place:**
    -   Time: O(nlog(n))
    -   Space: O(n)

	-	**Sort function**
		- 	Time: O(log(n))
		-	By dividing the input array in half with each recursive call we can arrive at the base case of a trivially sorted array with a single value. This process takes log(n) steps.

    -   **Merge function:**
        -   Time: O(n)
		-	A pointer is set to the first value in the array to be merged. After comparing values at that index the pointer is incremented. This result in the merge function having a time complexity of O(n) instead of O(n^2). (Refer to time complexity of merge in a/A Open readings).

	-	Time complexity explanation: combining the complexities of the sort and merge functions, merge sort has a time complexity of O(n * log(n)) => O(nlog(n))

	***Note: Merge sort in-place implementations are outside of the scope of this curriculum. It is important to be aware that the optimal version has better space efficiency by using iteration***

-	**In-place:**
	-	Time: O(nlog(n))
	-	Space: O(1)

5. **Quick Sort:**

-   Quicksort is preferred over merge sort for sorting arrays due to the use of extra O(n) storage space.

-   **Worst case explaination:**
    -   Time: O(n^2). This occurs when the pivot point chosen happens to be the greatest or smallest element, or when the the array is already sorted in increasing or decreasing order. Time complexity of quicksort significantly depends on the organization of data within the input array.

-   **Out-of-place:**
    -   Time: O(nlog(n))
    -   Space: O(nlog(n))

		***Note: Quicksort in-place implementations are outside of the scope of this curriculum. It is important to be aware that the optimal version has better space efficiency!***

-   **In-place:**
    -   Time: O(nlog(n))
    -   Space: O(log(n))

		***Note: An O(1) space complexity of in-place quicksort exists however it is considered "unstable". This version of quicksort along with algorithm stability is outside of the scope of this curriculum.***

		***Practice assessment MC question on avg space complexity for an in-place recursive quickSort says the space complexity is O(log(n)). It is referring to the stable version!***

6. **Array.sort((a,b)):**

-   Node.js and Chrome use the V8 JS engine. For Array.sort(), V8 currently uses a combination of modified versions of merge sort and then insertion sort for small data sizes called Timsort.

|      Algorithm      | Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
| :------------------: | :--------------------: | :-------------------: | :---------------------: | :--------------: |
|     **Timsort:**     |          O(n)          |        O(nlog(n))     |         O(nlog(n))      |       O(n)       |


---

## Be able to describe and/or recognize a binary search tree, binary tree, and directed acyclic graph:

1. Binary Search Tree:

### Properties of a BST:

-   Binary search trees have no more than two branches from each node.
-   Every BST has a this.root property.
-   Each tree node contains: a **value**, a **left** pointer, and a **right** pointer
-   Each child (subtree) node must be organized (ordered) according to the nodes value:
    -   Every child node to the **left** must have a value that is **<= (less than or equal to)** the parent node value.
    -   Every child node to the **right** must have a value that is **>= (greater than or equal to)** the parent node value.
-   **Balanced BST:**
    -   Means a tree with height roughly equal to log n. In other words in a balanced BST the height of the right and left branches is the same +- 1 node.

```js
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
}
```

-   **Searching:**
    -   _Balanced BST:_
        -   Time complexity O(log n).
    -   _Unbalanced BST:_
        -   Time complexity O(n). This is because an unbalanced BST is essentially a linked list and requires iterating through all nodes to find the search target.

```js
// Recursive search:
search(val, currentNode = this.root) {
    if (!currentNode) {
			return false;
		}
		if (currentNode.val === val) {
			return true;
		}
		if (this.search(val, currentNode.left)) {
			return true;
		}
		return this.search(val, currentNode.right);
}

// Iterative Search:
search(val, currentNode = this.root){
    while (currentNode) {
		if (val < currentNode.val) {
			currentNode = currentNode.left;
		} else if (val > currentNode.val) {
			currentNode = currentNode.right;
		} else {
			return true;
		}
	}
	return false;
}

```

-   **Insertions and Deletions:**
    -   _Balanced BST:_
        -   **Time Complexity O(log n)**. This is because the searching operations still only require one comparison per level.
    -   _Unbalanced BST:_
        -   Insertions and deletions occur with a time complexity of O(n) (think iterating through a linked list).

2. Binary Tree:

### Properties of a BT:

-   Every BST has a this.root property.
-   Each node contains: a **value**, a **left** pointer, and a **right** pointer.
-   There is **_NO ORDER_** that determines where nodes are placed.
    -   **All binary search trees are binary trees, but not all binary trees are binary search trees.**

3. Directed Acyclic Graph:

-   In a directed graph, the relationship goes in only one direction, indicated by the arrow direction.
-   Acyclic graphs consist of vertices and edges, with each edge directed from one vertex to another, such that following those directions will never form a closed loop.
    > ![Example of Directed Acyclic Graph](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Tred-G.svg/1024px-Tred-G.svg.png)

---

## Given a graphic representation of a tree, be able to list out elements in order for:

-   Example Tree:

```js
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

-   depth first traversal:
    > 0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10

```js
// Depth First Traversal - Iterative
depthFirstTraversal() {
	const stack = [this.root];
	while (stack.length > 0) {
		const node = stack.pop();
		console.log(node.val);
		if (node.right) {
			stack.push(node.right);
		}
		if (node.left) {
			stack.push(node.left);
		}
	}
}
```

```js
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

-   breadth first traversal:
    > 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

```js
// Breadth First Traversal - Iterative
breadthFirstTraversal() {
	const queue = [this.root];
	while (queue.length > 0) {
		const node = queue.shift();
		console.log(node.val);
		if (node.left) {
			queue.push(node.left);
		}
		if (node.right) {
			queue.push(node.right);
		}
	}
}
```

```js
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

-   **in-order:**
    > 6, 3, 1, 7, 4, 8, 0, 2, 9, 5, 10

```js
// Prints Left => Self => Right
inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
}
```

```js
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

-   **pre-order:**
    > 0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10

```js
// Prints Self => Left => Right
preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
}
```

```js
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

-   **post-order:**
    > 6, 3, 7, 8, 4, 1, 9, 10, 5, 2, 0

```js
// Prints Left => Right => Self
postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
}
```

-   **Note on Pre-Order, In-Order, and Post-Order Traversals:**
    -   Although pre-order, in-order and post-order traversals all print in different orders, the sequence that the nodes are visited doesn't change. All of these traversals travel as deep as possible down a tree branch until reaching a dead-end, and then backtracking to the next branch, which means the traversal is an example of a **Depth-first** order.
    -   In the example image below:
        -   Red = Pre-Order.
        -   Green = In-Order.
        -   Blue = Post-Order.
            > ![Depth-First-Search](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/Binary_tree_depth-first-traversal.svg)
    -   Pre-order: 5–2–1–0–4–3–8–6–7–9–X
    -   In-order: 0–1–2–3–4–5–6–7–8–9–X
    -   Post-order: 0–1–3–4–2–7–6–X–9–8–5

---

## Be able to identify a correct equation for sorting elements in an array using the built in array.sort() method:

-   ascending order:
    -   arr.sort((a, b) => a - b)
-   descending order:
    -   arr.sort((a, b) => b - a)
-   Lexicographic (alphabetical order):
    -   arr.sort()
-   General Compare function form:
    -   if compareFunction(a, b) returns a value > than 0 (a positive number), sort b before a.
    -   If compareFunction(a, b) returns a value ≤ 0 (0 or a negative number), leave a and b in the same order.

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
	// NEGATIVE you want to swap. So 'a' will be sorted before 'b'
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
	// POSITIVE you want to swap. So 'b' will be sorted before 'a'
  }
  // a must be equal to b
  return 0;
}
```

---

## Be able to describe the behaviors of quick sort, merge sort, selection sort, bubble sort, and insertion sort

1. ## **Bubble Sort:**
    > Iterate through the entire array, comparing each adjacent pair. If they are out of order, swap their positions. Keep doing this until the entire array is sorted. Each pass will sort the array a bit more, with the larger values "bubbling up" to the top.

-   Example code:

```js
function bubbleSortInPlace(arr) {
	let swap = true;

	while (swap) {
		swap = false;
		// Iterate through the array
		for (let i = 0; i < arr.length - 1; i++) {
			// If the current value is greater than its neighbor to the right
			// Swap those values
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				// Otherwise, repeat from the beginning
				// setting swapped equal to true will continue the iteration inside the while loop
				swap = true;
				// Do not move this console.log
				console.log(arr.join(','));
			}
		}
		// exits while loop once nothing swaps
		if (!swap) return arr;
	}
	// If you get to the end of the array and no swaps have occurred, return
	return arr;
}
/*******************************************************************/
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
bubbleSort(arr);
```

2. ## **Selection Sort:**

-   Divide the array into sorted and unsorted halves, then one-by-one **select the smallest value** from the unsorted portion and move it to the end of the sorted portion.

```js
function selectionSortInPlace(arr) {
	// Set a pointer at zero diving the array into sorted and unsorted halves
	// an array containing a single value is sorted by default
	let div = 0;
	// Repeat while the unsorted half is not empty:
	while (div < arr.length) {
		// Do not move this console.log
		console.log(arr.join(','));
		// Find the index of the minimum value in the unsorted half
		let minidx = div;
		for (let i = div + 1; i < arr.length; i++) {
			if (arr[i] < arr[minidx]) {
				minidx = i;
			}
		}
		// Save the min value
		let minValue = arr[minidx];
		// Shift every unsorted value to the left of the min value to the right by 1
		//! in order to not overwrite values this requires iterating from the end of the array and shifting all the values to the right by one
		for (let i = minidx; i > div; i--) {
			arr[i] = arr[i - 1];
		}
		// Put the min value at the div
		arr[div] = minValue;
		// Increment the div and repeat
		div++;
	}
	return arr;
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
let newArr = selectionSort(arr);
```

3. ## **Insertion Sort:**

-   Divide the array into sorted and unsorted. **Pick and remove A VALUE from the unsorted**. **Insert** it into the correct place in the sorted. (think organizing playing cards in your hand)

```js
function insertionSortInPlace(arr) {
	for (let i = 1; i < arr.length; i++) {
		console.log(arr.join(','));
		for (let j = i; j >= 0; j--) {
			if (arr[j] < arr[j - 1]) {
				swap(j, j - 1, arr);
			}
		}
	}
	return arr;
	function swap(i, j, array) {
		[array[i], array[j]] = [array[j], array[i]];
	}
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
let newArr = insertionSort(arr);
```

4. ## **Merge Sort:**

-   Uses **Divide and Conquer** approach
-   **Split unsorted array in half** (divide)
-   **Sort the halves** (conquer)
-   **Merge** the newly sorted halves

```js
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(arrA, arrB) {
	let sorted = [];
	let i = (j = 0);

	while (i < arrA.length && j < arrB.length) {
		if (arrA[i] <= arrB[j]) {
			sorted.push(arrA[i]);
			i++;
		} else {
			sorted.push(arrB[j]);
			j++;
		}
	}
	return [...sorted, ...arrA.slice(i), ...arrB.slice(j)];
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
let newArr = mergeSort(arr);
```

5. ## **Quick Sort:**

-   Uses **Divide and Conquer** approach
-   Pick a value in the array to serve as the **pivot.** Partition the array so that **values smaller** than the pivot are on the **left** and **values larger** than the pivot are on the **right**. Sort the left and the right partitions. Return an array containing the **left**, **pivot**, and **right** values.

```js
function quicksort(arr) {
	// Check if the input is length 1 or less
	// If so, it's already sorted: return
	if (arr.length <= 1) {
		return arr;
	}
	// Pick the first value as the pivot
	let pivot = arr[0];

	let left = [];
	let right = [];
	// Orient the pivot so that...
	for (let i = 1; i < arr.length; i++) {
		// every number smaller than the pivot is to the left
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			// every number larger (or equal) than the pivot is to the right
			right.push(arr[i]);
		}
	}
	// Recursively sort the left
	const leftSorted = quicksort(left);
	// Recursively sort the right
	const rightSorted = quicksort(right);
	// Return the left, pivot and right in sorted order
	return [...leftSorted, pivot, ...rightSorted];
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
quicksort(arr);
```

---

## Be able to describe the behavior of a binary search

-   **Necessary Preconditions:**

1. **_Data must be sorted._**
2. **_Data can be accessed by index in O(1) time._**
    > This means you cannot do a binary search of a _Linked List_ or _Hash Table_.

-   **Big O:**

    -   Time complexity: O(log(n))
    -   Space complexity: O(1)

-   Example Code:

```js
function binarySearch(arr, target) {
	// Set integers pointing to the high and low range of possible indices
	let low = 0;
	let high = arr[arr.length - 1];
	// While high and low indices do not overlap...
	while (low <= high) {
		// Find the midpoint between high and low indices
		let mid = Math.floor((high + low) / 2);

		// Compare the target value to the midpoint value
		if (target === arr[mid]) {
			// If the target equals the midpoint...
			// Return the midpoint index
			return mid;
		} else if (target > arr[mid]) {
			// If the target is higher than the midpoint...
			// Move the low pointer to midpoint + 1
			low = mid + 1;
		} else {
			// If the target is less than the midpoint...
			// Move the high pointer to midpoint - 1
			high = mid - 1;
		}
	}
	// Return -1 if the loop exits with overlapping pointers
	return -1;
}
```

---

# What to study for coding portion:

-   Be able to implement a social graph similar to the practice assessment
    -   Know BFS algo!
    -   Be comfortable keying into object properties, using Object.entries(obj) to generate an iterable array, and destructuring to isolate object keys and values into variables.

---
