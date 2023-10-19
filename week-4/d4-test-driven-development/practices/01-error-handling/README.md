# Practice: Error Handling

In this practice, you will practice reading, throwing and handling JavaScript
runtime errors.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Instructions

Implement the following in the __error-handling.js__ file.

1. `sum` function is throwing an error! Determine why the error is thrown, and
   handle only that particular error type using `try...catch`. Print the error
   message if the code is throwing the error type you expect
2. Create `sayName(name)` function that will print the name that is passed to it
   if `name` argument is a string. It should throw a `TypeError` with a message
   of "Invalid name! Must be a string!" if `name` is not a string. Run the
   `sayName` function test cases inside of `try...catch` and print out the error
   message if an error is thrown.
3. Come up with a test case that will cause the `greeting` function to throw
   the `Error`. When an error is thrown from that test case, catch it and print
   out "Hello World!"
