# Practice Timing Benchmarks Phase 1 - Implementation

The first step is to implement the code you will be testing.

Read through the starter and specs, **phase-1.js** and **test/phase-1-spec.js**,
for details.

Run tests with `npm test test/phase-1-spec.js`

## addNums

`addNums(n)` takes in a positive integer and returns the sum of all numbers
1 through n.

For example `addNums(5)` will add `1 + 2 + 3 + 4 + 5` and return `15`.

```js
// 1 + 2 + 3 + 4 + 5 = 15
addNums(5);  // 15
```

Solve this with a for-loop.

## addManyNums

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
