# Phase 1: Testing the `reverseString` function

You'll begin by writing tests for a function named `reverseString`. You should
see two directories in the __tdd-style-long-practice__ directory - one named
__problems__ and one named __test__. In the __problems__ directory, locate the
file named __reverse-string.js__, and in the __test__ folder, a corresponding
__reverse-string-spec.js__ file.

At the top of the spec file, require the `chai` assertion library and extract
the `expect` function from it. Also, make sure you require your `reverseString`
function so you will have it available to test.

Write a test that will ensure that when given the input `"fun"` the
`reverseString` function will return the reversed output (`nuf`). Now run your
spec and watch it fail. If you did this correctly you should have mocha telling
you `AssertionError: expected undefined to equal 'nuf'`.

Remember! This is expected because you are doing test-driven development and you
have written the test before you have written the `reverseString` function.

Now that the _red_ step is complete, time to move onto the _green_ step. Write
the minimum amount of code to pass the spec you just wrote - make sure you
remember to properly import and export your function!

> Reminder: You can run all the tests in the __test__ directory by running the
> `mocha` command in the top-level directory that the __test__ directory is
> located within. You can also run a single test file with Mocha by specifying
> the file path like so: `mocha test/reverse-string-spec.js`.

Once you've passed the spec you wrote it's time to _refactor_. Take a look at
your `reverseString` function and see how it could be improved to be more
readable. For example: could it be DRYer?

Okay, let's add another spec to this function to test how it handles errors. Use
`chai`'s `throws` function to ensure that when the `reverseString` function is
invoked with an argument that is not a string it will throw a `TypeError`.

Nice! As you are writing these tests make sure you are following the TDD
workflow and writing _readable_ tests. Each of your `describe`, `context`, and
`it` functions should always be passed a string that clearly indicates what is
testing.
