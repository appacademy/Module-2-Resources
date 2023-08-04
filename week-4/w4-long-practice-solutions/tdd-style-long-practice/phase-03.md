# Phase 3: Testing the `myMap` Function

Next, let's write a spec for `myMap`. In the __problems__ directory, locate the
file named __my-map.js__ and in the __test__ folder, a corresponding
__my-map-spec.js__ file. This version of `myMap(array, callback)` will intake an
array and a callback, and then return a new array where the callback has been
called upon each element in the original array. The `myMap` should not mutate
the original argument array.

You'll be using `chai` and `chai-spies` for this series of tests.

Here is a quick example of how `myMap` should work:

```js
const arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
console.log(arr); // prints [1,2,3]
```

Start off by writing your tests. You want to ensure that your `myMap` works like
the built-in `Array.map` method. Once you've written the test, write the code
that will pass the test, then refactor.

Now let's thoroughly test the `myMap` function. However, before you do that
you'll want to make sure that any specs you write after this first spec will be
working with a fresh array to ensure each unit test is done in _isolation_. The
DRYest way to do this is by setting up a Mocha hook! Use the `beforeEach` Mocha
hook to reassign a new instance of an `Array` each time a spec is run.

Now that our hook is in place, write three tests:

1. Ensure that `myMap` does not mutate the passed-in array argument
2. Ensure that `myMap` does not call the built-in `Array.map`
3. Ensure that the passed-in callback is invoked once for each element in the
   passed-in array argument.

**Write the first of these specs now before moving on below.**

For the described specs for 2-3 in the above list, you will be required to use
`chai-spies` which is a plug-in module for the `chai` module and is used for
tracking when a function has been called or not.

Connect the `chai-spies` plug-in to be used in the `chai` assertion module at
the top of the file with the following lines:

```js
const spies = require("chai-spies");
chai.use(spies);
```

Use the `chai.spy.on` function for spec 2 to inspect whether or not the built-in
`Array.map` has been called on the array. Take a look at the
[Chai Spies][chai-spies] documentation to see how to use it.

> Hint: In order to use `chai.spy.on` you'll want to think carefully about
> **what object** you are spying on the methods for.

You can spy on a plain function using `chai.spy` instead of using `chai.spy.on`
to spy on a method of an object. Use the `chai.spy` function for spec 3 to
create a callback function that you can track if it has been called by your
`myMap` function. Take a look at the [Chai Spies][chai-spies] documentation to
see how to use it.

Once you've finished the above specs and written the code to pass them make sure
you refactor your code before moving on!

[chai-spies]: https://www.chaijs.com/plugins/chai-spies/
