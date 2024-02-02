# Phase 2: Testing multiple functions

In the __problems__ directory, locate the file named __number-fun.js__ and in
the __test__ folder, a corresponding __number-fun-spec.js__ file.

At the top of the spec file, require the `chai` assertion library and extract
the `expect` function from it. You'll be testing two functions in this file so
you'll want to make sure you set up two outer `describe` blocks - one for each
function.

Start off easy by writing a spec for a function called `returnsThree`.
Test that this function returns the number `3`. Now write the code to pass that
spec.

In the second `describe` function you'll be writing the tests for a function
called `reciprocal(num)`. This function should intake a number and then return
the [reciprocal][reciprocal] of that number. Start by writing a spec to ensure
that your `reciprocal` function will return the reciprocal of the given
argument. For this test include more than one assertion within your `it`
callback function to make sure your function will behave as expected with
multiple inputs.

Now write the code to pass those tests, then refactor that code. Once you've
finished, add some different **contexts** for your `reciprocal` function. Your
`reciprocal` function will now only intake arguments between `1` and `1000000`.
If the given argument is less than `1` or greater than `1,000,000` then
a `RangeError` will be thrown with a descriptive string message.

In order to properly test the `reciprocal` function you'll need to create two
`context` blocks within the `reciprocal` `describe` function callback - one for
invalid arguments and one for valid arguments. Move the spec you wrote
previously into the `context` callback for valid arguments. You'll want to write
at least two new specs within your invalid argument `context` block to ensure
your `reciprocal` is being fully tested.

Once you've passed all your written specs and refactored move on!

[reciprocal]: https://www.mathopenref.com/reciprocal.html
