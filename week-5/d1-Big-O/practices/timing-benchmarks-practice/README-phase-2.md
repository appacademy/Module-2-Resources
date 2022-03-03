# Practice Timing Benchmarks Phase 2 - Scale testing harness

Next, you will be creating functions to test your code with a variety of
input sizes.

Read through the starter and specs, **phase-2.js** and **test/phase-2-spec.js**,
for details.

Run tests with `npm test test/phase-2-spec.js`

## addNums10

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
// prints out [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
```

Passing in an increment of 10 will return values for `[addNums(10),
addNums(20), ...]`.

## addManyNums10

`addManyNums10(increment)` takes in an increment value and runs `addManyNums`
10 times, increasing by the increment each time. It should return an array
containing the 10 return values.

Passing in an increment of 10 will return values for `[addManyNums10(10),
addManyNums10(20), ...]`.
