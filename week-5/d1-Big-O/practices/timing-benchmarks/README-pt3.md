# Practice Timing Benchmarks Part 3

In this 3-part exercise, you will be implementing a few simple JavaScript
functions, then testing them at _massive_ scale.

## Setup

1. Continue working in the same [starter] repo as part 1 and 2.

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
