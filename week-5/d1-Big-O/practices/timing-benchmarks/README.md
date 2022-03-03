# Practice Timing Benchmarks

In this three-part exercise, you will be implementing a few simple JavaScript
functions, then testing them at _massive_ scale.

## Goals

* Practice for-loop fundamentals
* Get comfortable with large _n_ values
* Practice timing code with `Date.now()` and `console.time()`
* Record and display timing results on a Google Sheet
* Identify and prove that code is O(1), O(n) or O(n^2)

## Setup

1. Clone the starter repo at [starter]
2. Install all packages with `npm install`

## Part 1: Implementation

The first step is to implement the code you will be testing.

### addNums

`addNums(n)` takes in a positive integer and returns the sum of all numbers
1 through n.

For example `addNums(5)` will add `1 + 2 + 3 + 4 + 5` and return `15`.

```js
// 1 + 2 + 3 + 4 + 5 = 15
addNums(5);  // 15
```

Solve this with a for-loop.

### addManyNums

`addManyNums(n)` takes in a positive integer and returns the sum of `addNums(1)`
through `addNums(n)`.

For example `addManyNums(3)` is the same as `addNums(1) + addNums(2) +
addNums(3)`, or `1 + 3 + 6` which equals `10`.


```js
// addNums(1) + addNums(2) + addNums(3)
//   = 1 + 3 + 6
//   = 10
addManyNums(3);  // 10
```

Read through the starter and specs for details.

Run tests with `npm test test/timing-benchmarks-pt1-spec.js`


## Part 2: Scale testing harness

Next, you will be creating functions to test your code with a variety of
input sizes.

### addNums10

`addNums10(increment)` takes in an increment value and runs `addNums` 10
times, increasing by the increment each time. It should return an array
containing the 10 return values.

For example, `addNums10(1)` will return an array containing addNums for values
1 through 10.

```js
// increment = 1
// addNums10(increment)
[
  addNums(1), // 1
  addNums(2), // 3
  addNums(3), // 6
  addNums(4), // 10
  addNums(5), // 15
  addNums(6), // 21
  addNums(7), // 28
  addNums(8), // 36
  addNums(9), // 45
  addNums(10) // 55
]
```

Passing in an increment of 10 will return values for `[addNums(10),
addNums(20), ...]`.

### addManyNums10

`addManyNums10(increment)` takes in an increment value and runs `addManyNums`
10 times, increasing by the increment each time. It should return an array
containing the 10 return values.

Passing in an increment of 10 will return values for `[addManyNums10(10),
addManyNums10(20), ...]`.

Read through the starter and specs for details.

Run tests with `npm test test/timing-benchmarks-pt2-spec.js`

## Part 3: Timing your code

Copy your `addNums10` and `addManyNums10` into the part 3 starter. Your task
is to add timing reports to your code at key points to measure the time it
takes to run with various input sizes.

There are no test specs for this exercise but you can run the timing tests by
typing `node timing-benchmarks-pt3.js`

### Directions

1. Copy your `addNums10` and `addManyNums10` code into `addNums10Timing` and
   `addManyNums10Timing`.
2. Use `console.time()`, `console.timeLog()` and `console.timeStop()` to print
   timestamps after each call of `addNums` and `addManyNums`
3. Use `Date.now()` to print the amount of milliseconds each call takes to
   execute.
4. Plot the results of `addNums10(1000000)` in a Google Sheet
5. Plot the results of `addManyNums10(5000)` in a Google Sheet
6. Identify the time complexity of both functions

### Bonus

7. Implement `addNums100` and `addManyNums100` and chart the performance for
   better resolution.


[starter]: https://github.com/appacademy-starters/practice-timing-benchmarks