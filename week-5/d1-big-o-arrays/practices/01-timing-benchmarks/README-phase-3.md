# Practice Timing Benchmarks Phase 3 - Timing your code

Copy your `addNums10` and `addManyNums10` into the phase 3 starter. Your task
is to add timing reports to your code at key points to measure the time it
takes to run with various input sizes.

Read through the starter, **phase-3.js**, for details.

There are no test specs for this exercise but you can run the timing tests by
running the command `node phase-3.js`

## Directions

1. Copy your `addNums10` and `addManyNums10` code into `addNums10Timing` and
   `addManyNums10Timing`.
2. Use `console.time()`, `console.timeLog()` and `console.timeStop()` to print
   timestamps after each call of `addNums` and `addManyNums`
3. Use `Date.now()` to print the amount of milliseconds each call takes to
   execute.
4. Plot the results of `addNums10(1000000)` in a Google Sheet
5. Plot the results of `addManyNums10(5000)` in a Google Sheet
6. Identify the time complexity of both functions
7. **BONUS**: Implement `addNums100` and `addManyNums100` and chart the
   performance for better resolution.
