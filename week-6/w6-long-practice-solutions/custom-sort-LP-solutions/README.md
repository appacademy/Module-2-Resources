# Custom Sorts

In this exercise, you will be implementing alternative sorting algorithms
using the the built in [Array.sort()] method and create the compare
functions necessary to complete the given sort.

## Instructions

1. Clone the [starter] repo
2. Install all packages by typing `npm install`
3. Read through the instructions and specs to understand the task
4. Run specs with `npm test`

## Custom Sort Problems

Practice coding some irregular sorting problems that aren't just looking
to sort its elements in ascending order:

### `User Age Sort`

Given an array of User objects, sort them in ascending order based on their
age. Returns the objects in sorted order.

Example:

```js
const users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        occupation: 'Software Engineer',
        friends: [2, 3, 4]
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25,
        occupation: 'Data Scientist',
        friends: [1, 4]
    },
    {
        id: 3,
        firstName: 'Mary',
        lastName: 'Smith',
        age: 32,
        occupation: 'UX Designer',
        friends: [2, 4]
    },
    {
        id: 4,
        firstName: 'James',
        lastName: 'Johnson',
        age: 55,
        occupation: 'CTO',
        friends: [1, 2, 3]
    }
];

ageSort(users);         // => Jane, John, Mary, James
```

### `OddEven Sort`

Given an array, sort it such that the *odds* appear in ascending order on the
left, then the *evens* on the right. (Remember, try to do this in-place!)

Example:

```js
const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
const arr2 = [5, 8, 13, 6, 22, 14, 9];

oddEvenSort(arr1);           // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
oddEvenSort(arr2);           // => [5, 9, 13, 6, 8, 14, 22]
```

### `Valid Anagrams`

Given two strings, s and t, write a function that determines it s and t are
anagrams.

Example:

```js
let s = "anagram";
let t = "nagaram";

validAnagrams(s, t);            // => true
```

### `Reverse-Base Sort`

Given an array, sort it such that the numbers are grouped by its base in
descending order, but ascending within each group.

Example:

```js
const arr1 = [11, 1, 101, 0, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];

reverseBaseSort(arr1);      // => [100, 101, 10, 11, 0, 1]
reverseBaseSort(arr2);      // => [164, 671, 31, 45, 90, 1, 6]
```

Given an array of integers, sort the array in increasing order based on the
frequency of the values. If multiple values have the same frequency, sort
them in decreasing order. Return the sorted array.

Example:

```js
const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

frequencySort(arr1);        // => [3, 1, 1, 2, 2, 2]
frequencySort(arr2);        // => [1, 3, 3, 2, 2]
frequencySort(arr3);        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]
```



[starter]: https://github.com/appacademy/practice-for-week-06-custom-sorts-long-practice
[Array.sort()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort