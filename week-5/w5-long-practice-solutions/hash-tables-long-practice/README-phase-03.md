# Advanced Phase 3: Hash table optimization problems

If you finish the problems in phase 2, you can work on these as a bonus.

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
newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz');           // => true
newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz');       // => false
newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz');        // => true
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
longestSubstr("abcabcbb");      // => 3, where the longest substring is "abc"
longestSubstr("bbbbb");         // => 1, where the longest substring is "b"
```

### `Max Subarray Length`

Given an array of integers, return the length of the longest subarray where the
difference between its maximum value and its minimum value is at most 1. Solve
this in `O(n)` time.

Example:

```js
maxSubarr([1,3,2,2,5,2,3,7]);  // => 5 because the longest subarray is [3,2,2,2,3]
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

Each time you can either climb 1, 2, or 3 steps. In how many distinct ways can
you climb to the top?

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
