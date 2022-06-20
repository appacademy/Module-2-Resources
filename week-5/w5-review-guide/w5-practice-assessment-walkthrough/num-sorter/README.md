# Sprint 5, Part 10 Practice Problems

## Setup

1. Download the starter using the green button below
2. Rename the folder to `firstname-lastname-sprint-5-pt-10-practice-problems`. For
  example, if your name is "Jane Doe", then name your folder
  `jane-doe-sprint-5-pt-10-practice-problems`
3. Run `npm install` to install dependencies
4. Run `npm test` to run test specs
5. Your objective is to implement the functions in `/problems` to pass all
  specs.

# Unit Testing Problem

Here is a problem that will test your understanding of data structures and
time complexity. In particular, you will need to identify instances of `O(n)`
operations and optimize them to be `O(1)`.

## Number sorter

You are given a class called `NumSorter` which stores an ordered list of
numbers, and a collection of allowed numbers. You can add allowed numbers to
the list, and retrieve them in the order they were added. You cannot add a
number to the list that is not allowed.

-   `addAllowedNum(num)` adds a number to the "allowed" list. Returns a string
  if successful or denied.
-   `isNumAllowed(num)` returns true if the number is in the allowed list.
-   `addNumToBack(num)` adds a number to the back of the number list. Returns
  the last number in `numList`.
-   `getFirstNum()` removes and returns the first number in the number list;
  returns `undefined` if `numList` is empty.
-   `numCount()` returns the amount of numbers in the number list.
-   `buildNumList(n)` takes in a number, `n` and adds all allowed numbers from
  0 through n to the list in order. It returns the length of the `numList`.

When you first run specs, implementation specs will be passing with the
exception of the two asking you to change your array data structures. Combined
with the timing benchmark specs, you will see that the `NumSorter` already
works but it is slow.

Your task is to optimize the code until all implementation *and* timing tests
are passing. The performance is normalized with a speed benchmark so the tests
should run similarly regardless of the speed of your computer.

You must optimize without changing the logic of the `NumSorter`. This means
that __overall functionality must remain the same__ (i.e., if you change code
in a method, the method must still be fulfilling its original purpose).

If you see failing specs from `implementation-spec`, it means the logic must be
corrected before you continue. You must fix this before performance tests will
run.

## Num Sorter Hints

1. Start by understanding the problem and identifying performance bottlenecks.
2. Use big-O analysis: Which operations can be optimized?
3. Consider all the tools (data structures) you have learned this week and pick
  the right tool for the job.
    - __An optimal solution for this problem will use 1 set, 1 linked list, and 0__
    __arrays.__
    - Important Note: You __must__ use the `LinkedList` class provided for you in
    the starter code.

There are two test sets of specs for this problem, implementation and timing
specs. There are local tests available as well to verify your work.

You can test the implementation of your code with the implementation specs
using the following command:

```bash
npm test test/num-sorter-implementation-spec.js
```

You can test the optimization of your code with the timing specs using the
following command:

```bash
npm test test/num-sorter-timing-spec.js
```

An important note for the timing specs:

There is a time buffer built into the timing specs to account for processor
speeds. Your actual grade will be scored on a processor that is different from
yours, so the amount of test specs you actually fail/pass may be different from
what you see in your local machine when you run the timing specs. Make sure you
read the instructions carefully to check that you achieved what the problem is
asking you to do.