# Intermediate Phase 2: Hash table practice problems

For each of these problems, you can use a hash table (either an `object` or
`set`) to solve the problem in `O(n)` time. Note that once you have a working
solution, the specs will run a test with an input of 1 million inputs. Your
code should return in under 2 seconds with optimal time complexity.

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
commonElements([1,2,3], [3,4,5]);         // => [3]
commonElements([2,4,6], [5,4,3,2,1]);     // => [2,4]
```

### `Duplicates`

Given an array of integers, one integer appears twice while all other integers
appear once. Find the duplicate integer. Solve this in `O(n)` time.

Example:

```js
duplicate([2,2,1]);             // => 2
duplicate([7,2,4,9,5,4,8]);     // => 4
```

### `Two Sum Revisited`

Given an array of integers nums and an integer target, return a boolean
indicating whether two numbers in the array can sum to the target. You may not
use the same element twice. You should be able to solve this in `O(n)` time.

Example:

```js
twoSum([2, 7, 11, 15], 22);     // => true
twoSum([3, 4, 5], 6);           // => false
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
