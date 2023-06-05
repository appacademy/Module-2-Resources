# Practice: Bind

In this practice, you will practice identifying when to use `bind` and how to
use it.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Instructions

Implement the following in the __employee.js__ file.

1. Create a class called `Employee`.

2. The constructor method should take in a `name` and `occupation` for the
   `Employee` and initialize them as instance variables.

3. Add an instance method called `sayName()` that will `console.log` the
   `Employee`'s name like so: `${name} says hello`.

4. Add another instance method called `sayOccupation()` that will `console.log`
   the `Employee`'s name and occupation like so: `${name} is a ${occupation}`.

5. Export the `Employee` class from the file.

To test your code, implement the following in the __test.js__ file.

1. Import the `Employee` class.

2. Create a new `Employee` with the `name` of "John Wick" and an `occupation` of
   "Dog Lover".

3. Call the `sayName()` instance method on the new `Employee` in a `setTimeout`
   after 2 seconds. Question: What do you expect to be printed to the terminal
   and why?
   <details><summary>Answer: </summary>"undefined says hello" will be printed
   to the terminal because the `sayName()` instance method on the new `Employee`
   was invoked function-style by the `setTimeout` after 2 seconds.</details>
   Solve the problem using `bind` to make sure that "John Wick says hello" will
   be printed to the terminal after 2 seconds.

3. Call the `sayOccupation()` instance method on the new `Employee` in a
   `setTimeout` after 3 seconds. Question: What do you expect to be printed to
   the terminal and why?
   <details><summary>Answer: </summary>"undefined is a undefined" will be printed
   to the terminal because the `sayOccupation()` instance method on the new
   `Employee` was invoked function-style by the `setTimeout` after 3
   seconds.</details>
   Solve the problem using `bind` to make sure that "John Wick is a Dog Lover"
   will be printed to the terminal after 3 seconds.