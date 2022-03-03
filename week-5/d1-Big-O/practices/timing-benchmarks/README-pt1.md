# Practice Timing Benchmarks Part 1

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
2. Run specs with `npm test test/timing-benchmarks-pt1-spec.js`

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


[starter]: https://github.com/appacademy-starters/practice-timing-benchmarks