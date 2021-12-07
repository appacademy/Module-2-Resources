# Hash Tables Project

Clone the project from the [starter].

## Learning Goals

* Compare and contrast the properties and operations of an Array, Linked List,
  and Hash Table
* Define a hash collision and how to handle them
* Identify the mechanics and complexity of adding and removing elements from a
  Hash Table
* Use hash tables to improve time complexity through caching (memoization and
  tabulation)
* Select a Hash Table when it is the appropriate tool for solving a problem

## Part 1: Implementing a Hash Table

Recall the key features of a Hash Table:

* Getting is `O(1)`
* Setting is `O(1)`
* Deleting is `O(1)`

Hash tables have very efficient operations with regards to time complexity and
can be used in many cases to vastly speed up a solution.

You will be implementing your own hash table from scratch. You can choose to be
creative and come up with your own unique hash function, or take inspiration
from the reading.

Some methods will be implemented for you, but they will have bugs. Squash them
and then finish implementing the rest of the methods!

You will also code the methods for handling hash collisions and resizing
your buckets.

Starter code is provided for you in `hash-table/hash-table.js`.

Install specs with `npm install`, then type `mocha` from the `hash-table`
directory to run tests.

**HINT**: Comment out the last test in `hash-table-spec.js` until you are sure
that your functions are O(1).

## Part 2: Practice Problems

For each of these problems, you can use a hash table (either an `object` or
`set`) to solve the problem in `O(n)` time. Note that once you have a working
solution, the specs will run a test with an input of 1 million inputs. Your
code should return in under 2 seconds with optimal time complexity.

Install specs with `npm install`, then type `mocha` from the `practice`
directory to run tests.

**HINT** If your tests are stuck, type `ctrl + c` in the terminal to cancel
the tests.

### `Anagrams`

Given two strings, determine whether the strings are anagrams of each other.
Solve this in `O(n)` time.

Example:

```js
anagrams('elvis', 'lives');     // => true
anagrams('coding', 'rocks');    // => false
```

### `Common Elements`

Given two arrays of integers, return an array of unique integers that are
present in both arrays. The resultant array can be returned in any order. Solve
this in `O(n)` time.

Example:

```js
commonElements([1,2,3], [3,4,5]);     // => [3]
commonElements([2,4,6], [5,4,3,2,1]);     // => [2,4]
```

### `Duplicates`

Given an array of integers, one integer appears twice while all other integers
appear once. Find the duplicate integer. Solve this in `O(n)` time.

Example:

```js
duplicate([2,2,1]);     // => 2
duplicate([7,2,4,9,5,4,8]);     // => 4
```

### `Two Sum Revisited`

Given an array of integers nums and an integer target, return a boolean
indicating whether two numbers in the array can sum to the target. You may not
use the same element twice. You should be able to solve this in `O(n)` time.

Example:

```js
twoSum([2, 7, 11, 15], 22);     // => true
twoSum([3, 4, 5], 6);     // => false
```

### `Word Patterns`

Given a pattern and an array of strings, determine whether the array follows
the specified pattern. Solve this in `O(n)` time.

Example:

```js
wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']);     // => true
wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog']);     // => false
wordPattern("AAAA", ['dog', 'dog', 'dog', 'dog']);     // => true
wordPattern("ABCD", ['dog', 'cat', 'dog', 'cat']);     // => false
```

## Part 3: Practice Problems - **BONUS**

If you finish the problems in part 2, you can work on these as a bonus.

### `Kth Most Frequent`

Given a string, return the kth most frequent character in the string.

Example:

```js
kth('aaabbc', 1);     //  => 'a'
kth('aaabbc', 2);     //  => 'b'
kth('aaabbc', 3);     //  => 'c'
```

### `New Alphabet`

Imagine the standard alphabet order (abc...xyz) is rearranged. Given a string
and a new alphabet order, determine whether the characters in the string appear
in lexicographically increasing order. Solve this in `O(m + n)` time.

Example:

```js
newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz');     // => true
newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz');     // => false
newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz');     // => true
```

### `Longest Palindrome`

Given a string, determine the length of the longest palindrome that can be
built with those letters. Solve this in `O(n)` time.

Example:

```js
longestPalindrome("abccccdd");     //  => 7 because the palindrome "dccaccd"
                                   // can be built.
```

### `Longest Substring`

Given a string, find the length of the longest substring without repeating
characters. Solve this in `O(n)` time.

Example:

```js
longestSubstr("abcabcbb");     //  => 3, where the longest substring is "abc"
longestSubstr("bbbbb");     //  => 1, where the longest substring is "b"
```

### `Max Subarray Length`

Given an array of integers, return the length of the longest subarray where the
difference between its maximum value and its minimum value is at most 1. Solve
this in `O(n)` time.

Example:

```js
maxSubarr([1,3,2,2,5,2,3,7]);     // => 5 because the longest subarray is [3,2,2,2,3]
maxSubarr([1,1,1,1,3]);     // => 4 because the longest subarray is [1,1,1,1]
```

### `Coin Change`

You are given coins of different denominations and a total amount of money
amount. Write a function to compute the fewest number of coins that you need to
make up that amount. If that amount of money cannot be made up by any
combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example:

```js
const coins = [1, 5, 10, 25];
const coins2 = [5];

coinChange(coins, 11);      // => 2, 10 + 1 = 11
coinChange(coins2, 3);      // => -1
coinChange(coins2, 0);      // => 0
```

### `Climbing Steps`

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1, 2, or 3 steps. In how many distinct ways can you
climb to the top?

Example:

```js
// There is 1 way to climb zero steps:
//   1. 0 steps
climbingSteps(0);  // 1

// There is 1 ways to climb one step:
//   1. 1 step
climbingSteps(1);  // 1

// There are 2 ways to climb two steps:
//   1. 1 step + 1 step
//   2. 2 steps
climbingSteps(2);  // 2

// There are 4 ways to climb three steps:
//   1. 1 step + 1 step + 1 step
//   2. 1 step + 2 steps
//   3. 2 steps + 1 step
//   4. 3 steps
climbingSteps(3);  // 4

// There are 5 ways to climb four steps:
//   1. 1 step + 1 step + 1 step + 1 step
//   2. 1 step + 1 step + 2 steps
//   3. 1 step + 2 steps + 1 step
//   4. 2 steps + 1 step + 1 step
//   5. 1 step + 3 steps
//   6. 3 steps + 1 steps
climbingSteps(4);  // 6
```


[starter]: https://github.com/appacademy-starters/data-structures-hash-tables-starter
