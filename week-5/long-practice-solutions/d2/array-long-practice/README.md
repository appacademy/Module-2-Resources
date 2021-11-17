# Array Practice Problems

Implement the following problems. The skeleton code is provided to you in
`array-practice.js`

While doing the problems, make sure to recite out loud and write in comments the
time complexities of any Array operations you use. Evaluate the time and space
complexities of each problem after you finish them. Ask yourself if the
problem's time and space complexities can be further optimized.

### `Find Minimum`

Given an Array of numbers, return the smallest number in the array. Do this in
O(n) Time.

Example:

```js
const arr = [7, 5, 2, 3, 4, 1]; 
findMinimum(arr); // => 1
```

### `Running Sum of Array`

Given an array of numbers, return the running sum of its elements.

Example:

```js
const arr = [1,2,3,4]; 
runningSum(arr); // => [1,3,6,10]
```

### `Even Number of Characters`

Given an array of strings, return the number of strings with an even number of
characters

Example:

```js
const arr = ['ab', 'abc', 'a', 'abcd']; 
evenNumOfChars(arr); // => 2
```

### `How many numbers smaller than current number`

Given an array of numbers, return a new array containing the number of elements
smaller than the current element at each position.

Example:

```js
const arr = [8,1,2,2,3];
smallerThanCurr(arr); // => [4,0,1,1,3]
```

### `Two Sum`

Given an array of numbers and a target sum, your function should return a
boolean value (true or false) if there are two elements in the array that add up
to the target value.

Example:

```js
const arr = [4, 2, 3, 6, 9]; 
twoSum(arr, 10); // => True

const arr2 = [4, 2, 3, 6, 9];
twoSum(arr2, 16); // => False
```

### `Find Second Largest`

Given an array of numbers, return the second largest number in the array.

Example:

```js
const arr = [4, 2, 3, 6, 8];
secondLargest(arr); // => 6
```

### `Shuffle The Array`

Given an array, return an array containing those elements in random order.

Your function should return a new array and **NOT** mutate the original.

Hint: Look up `Math.random()` on MDN.

Example:

```js
const arr = [2, 5, 1, 3, 4, 7];
shuffle(arr); // => [2, 3, 5, 4, 1, 7] 
```