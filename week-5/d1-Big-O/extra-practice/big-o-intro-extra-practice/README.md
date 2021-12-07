# Intro to Big O Project

This project contains four phases and will prompt you to determine the time and
space complexities of the functions that you write.

## Learning Goals

* Be able to determine and explain the time and space complexity of a function
* Be able to recognize when and how time or space complexity can be improved
* Be able to compare the time complexity of one function to another
* Be able to reason about a difficult problem and think of ways to solve it.

## Phase 1: Big O-ctopus and Biggest Fish

Fill out the functions in the `01-big-octopus.js` file using the directions
below.

A Very Hungry Octopus wants to eat the longest fish in an array of fish.

```js
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// => "fiiiissshhhhhh";
```

### Sluggish Octopus

Find the longest fish in O(n<sup>2</sup>) time. Do this by comparing all fish
lengths to all other fish lengths. Write your code inside the
`quadraticBiggestFish` function.

### Dominant Octopus

Find the longest fish in O(n log n) time. Hint: Use the built in `Array.sort()`
method which runs in O(n log n). Remember that Big O is classified by the
dominant term. Write your code inside the `nlognBiggestFish` function.

### Clever Octopus

Find the longest fish in O(n) time. The octopus can hold on to the longest fish
that you have found so far while stepping through the array only once. Write
your code inside the `linearBiggestFish` function.

## Dancing Octopus

Full of fish, the Octopus attempts [Dance Dance Revolution][ddr]. The game has
tiles in the following directions:

```js
const tilesArray = ["up", "right-up", "right", "right-down", "down",
"left-down", "left",  "left-up" ];
```

To play the game, the octopus must step on a tile with her corresponding
tentacle. We can assume that the octopus's eight tentacles are numbered and
correspond to the tile direction indices.

### Slow Dance

Given a tile direction, iterate through a tiles array to return the tentacle
number (tile index) the octopus must move. This should take O(n) time. Write 
your code inside the `slowDance` function.

```js
slowDance("up", tilesArray); // 0

slowDance("right-down", tilesArray); // 3
```

### Constant Dance!

Now that the octopus is warmed up, let's help her dance faster. Use a different
data structure and write a new function so that you can access the tentacle
number in O(1) time. Write your code inside the `fastDance` function.

```js
fastDance("up", newTilesDataStructure); // 0

fastDance("right-down", newTilesDataStructure); // 3
```

## Phase 2: Anagrams

Fill out the functions in the `02-anagrams.js` file using the directions
below.

Our goal today is to write a method that determines if two given words are
anagrams. This means that the letters in one word can be rearranged to form the
other word. For example:

```javascript
isAnagram("gizmo", "sally");    // => false
isAnagram("elvis", "lives");    // => true
```

Assume that there is no whitespace or punctuation in the given strings.

### First Anagram

Write a method `firstAnagram` that iterates over the first string. For each
letter in the first string, find the index of that letter in the second string
(hint: use `Array.indexOf()`) and delete at that index. The two strings are
anagrams if an index is found for every letter and the second string is empty
at the end of the iteration.

### Second Anagram

Write a method `secondAnagram` that solves the problem by sorting both strings
alphabetically. The strings are then anagrams if and only if the sorted versions
are the identical.

What is the time complexity of this solution? Is it better or worse than
`firstAnagram`?

### Third Anagram

Write one more method `thirdAnagram`. This time, use two Objects to store the
number of times each letter appears in both words. Compare the resulting Objects.

What is the time complexity?

**Bonus:** Do it with only one Object. Write your code inside `fourthAnagram`
function.

## Phase 3: Two Sum

Fill out the functions in the `03-two-sum.js` file using the directions
below.

Given an array of unique integers and a target sum, determine whether any two
integers in the array sum to that amount.

```javascript
function twoSum(arr, targetSum){
    // your code here...
}

const arr = [0, 1, 5, 7];
twoSum(arr, 6); // => should be true
twoSum(arr, 10); // => should be false
```

**Before you start coding anything, talk it over with your partner. Sketch out
on paper how you'd approach this problem. What would be the running time of your
proposed solution? Take as long as you need, but don't write any code yet.**

### Brute force

If we weren't worried about time complexity, what would be the most
straightforward way to solve this problem? To start with, we could check
every possible pair. If we sum each element with every other, we're sure to
either find the pair that sums to the target, or determine that no such pair
exists.

This is the **brute force** solution. It's essentially hitting the problem with
a sledge hammer. There are faster and more elegant ways to solve the problem,
but we know for sure that this will get the job done.

Let's start by implementing the brute force solution. Write a method called
`badTwoSum`, which checks every possible pair.

Make sure that you don't pair an element with itself. However, you don't need to
bother checking for summing the same pair twice; that won't affect your result.

(Note: you can cut the running-time significantly by returning early, and by not
checking pairs more than once. However, these micro-optimizations will not
improve the time complexity of the solution. Do you see why?)

Once you're done, write a comment with your solution's time complexity.

### Sorting

As a person of elevated algorithmic sensibilities, the brute-force approach is
beneath you. Leave that nonsense to the riffraff. Instead, you'll apply a
refined and time-honored technique: **sorting**.

Sort your data, then try to solve the problem.

1. What does sorting do to the lower bound of your time complexity?
2. How might sorting that make the problem easier?

Write a second solution, called `okayTwoSum`, which uses sorting. Make sure it
works correctly.

*Hint: (There are a couple ways to solve this problem once it's sorted. One way
involves using a very cheap algorithm that can only be used on sorted data sets.
What are some such algorithms you know? Binary Search would work.)*

### Objects

Finally, it's time to bust out the big guns: objects. Remember, an object has
*O(1)* `add` and *O(1)* `get`, so you can build an object by iterating over each
of the `n` elements in your array in *O(n)* time. That object prevents you from
having to repeatedly find values in the array; now you can just look them up
instantly.

See if you can solve the `twoSum` problem in linear time now, using your object.

**Bonus:** Adapt your `twoSum` solution to return the indices of the two numbers
instead of a boolean. Write you code inside the `twoSumIndices` function.

## Phase 4: Execution Time Difference

### Minimum Number

Given a list of integers find the smallest number in the list.

Example:

```javascript
    const list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
    myMin(list)  // =>  -5
```

#### `myMin1a`

First, write a function that compares each element to every other element of the
list. Return the element if all other elements in the array are larger.  
What is the time complexity for this function?

#### `myMin1b`

What is the space complexity for `myMin1a`? If it is greater than constant
space, then implement `myMin1b` with in the same way that you did `myMin1a`
except with constant space. If `myMin1a` is already implemented with constant
space complexity, skip this function.

#### `myMin2`

Now rewrite the function to iterate through the list just once while keeping
track of the minimum. What are the time and space complexities?

### Largest Contiguous Sub-sum

You have an array of integers and you want to find the largest contiguous
(together in sequence) sub-sum. Find the sums of all contiguous sub-arrays and
return the max.

Example:

```javascript
    const array = [5, 3, -7]
    largestContiguousSubsum(array) // => 8

    // possible sub-sums
    [5]           // => 5
    [5, 3]        // => 8 --> we want this one
    [5, 3, -7]    // => 1
    [3]           // => 3
    [3, -7]       // => -4
    [-7]          // => -7
```

Example 2:

```javascript
    const array = [2, 3, -6, 7, -6, 7]
    largestContiguousSubsum(array) // => 8 (from [7, -6, 7])
```

Example 3:

```javascript
    const array = [-5, -1, -3]
    largestContiguousSubsum(array) // => -1 (from [-1])
```

#### First Attempt

Write a function that iterates through the array and finds all sub-arrays using
nested loops. First make an array to hold all sub-arrays. Then find the sums of
each sub-array and return the max.

Discuss the time and space complexities of this solution.

#### Second Attempt

Let's make a better version. Write a new function using O(n) time with O(1)
memory. Keep a running tally of the largest sum. To accomplish this efficient
space complexity, consider using two variables. One variable should track the
largest sum so far and another to track the current sum. We'll leave the rest to
you.

[ddr]: https://en.wikipedia.org/wiki/Dance_Dance_Revolution