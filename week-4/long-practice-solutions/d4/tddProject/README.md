# Long Practice: Test-Driven Development

Now it is time to start writing some tests! For this next practice, you'll be
using test-driven development (TDD). A TDD approach dictates that you'll follow
the TDD workflow, meaning that you'll need to follow the TDD workflow of
**Red**, **Green**, **Refactor**.

## Background and Context

![tdd-cycle][rgr]

The three steps for approaching all of the below problems will be to:

1. **Red**: Write the tests and watch them fail (a failing test is red).
2. **Green**: Write the minimum amount of code to ensure the test passes.
3. **Refactor**: Refactor the code you just wrote to make it readable and
   maintainable.

You can assume for the rest of the practice that you will be using Mocha as your
testing framework and Chai as your assertion library.

Be sure to utilize the available documentation for this practice:

- [Mocha][mocha],
- [Chai][chai]
- [Chai Spies][chai-spies]

The tests you are writing today will be good practice for the _rest of your
programming career_ so take your time and ensure you are writing the best tests
you can!

## Set up

Clone the starter from the **Download** link at the bottom of this page.

Run `npm install` to install any dependencies.

## Phase 1: Testing the `reverseString` function

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
you `TypeError: reverseString is not a function`.

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

## Phase 2: Testing multiple functions

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
a `TypeError` will be thrown with a descriptive string message.

In order to properly test the `reciprocal` function you'll need to create two
`context` blocks within the `reciprocal` `describe` function callback - one for
invalid arguments and one for valid arguments. Move the spec you wrote
previously into the `context` callback for valid arguments. You'll want to write
at least two new specs within your invalid argument `context` block to ensure
your `reciprocal` is being fully tested.

Once you've passed all your written specs and refactored move on!

## Phase 3: Testing the `myMap` Function

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

## Phase 4: Testing Classes

For this next phase, you will be utilizing Chai to test a `Person` class. In the
__problems__ directory, locate the file named __person.js__, and in the
__test__ folder, a corresponding __person-spec.js__ file. Work one spec at a
time through the list below using Red, Green, Refactor as you go, and don't
forget to use [Mocha Hooks][mocha-hooks] to make your specs super DRY!

Write specs for each of the described `Person` class methods below. Then write
the code needed to pass those specs.

- `constructor` - will intake a `name` and `age` and set them as properties on
  the instance. Make sure you test that these properties exist on an instance,
  as well as ensuring they are set properly.
- `sayHello()` instance method - will return a string of the `Person` instance's
  name and a greeting message
- `visit(otherPerson)` instance method - will return a string stating that this
  instance visited the passed-in person instance (i.e. `person1.visit(person2)`
  returns `"Mai visited Erin"`).
- `switchVisit(otherPerson)` instance method - will invoke the `visit` function
  of the parameter (`otherPerson`), passing in the current instance as the
  argument.
- `update(obj)` instance method - this method will have two contexts if the
  incoming argument _is_ or _is not_ a valid object.
  - A: If the incoming argument is not an object throw a new `TypeError` with a
    clear message
  - B: If the incoming argument is an object then the instance's properties
    should be updated to match the passed-in object's values as shown below.
  - C: If the incoming object does not have a `name` and an `age` property,
    throw a `TypeError` with an appropriate message

  ```js
  let coolPerson = new Person("mai", 32); // Person { name: 'mai', age: 32 }

  coolPerson.update({ name: "lulu", age: 57 });
  console.log(coolPerson); // Person { name: 'lulu', age: 57 }
  ```

- `tryUpdate(obj)` instance method - this method will call the `update(obj)`
  method with the incoming argument, and it will have two contexts if the
  invocation of `update` was or was not successful:
  - A: If `update` is successfully invoked (it does not throw an error) then
    `true` is returned indicating the update was successful (make sure that the
    instance was updated as well)
  - B: If `update` is not successfully invoked it should **not** throw
    an error, instead it should return `false`.
- `greetAll(obj)` static method - this will intake an array of `Person`
  instances. The `greetAll` method will then call the `sayHello()` method on
  each `Person` instance and store each returned string in an array, before
  finally returning an array of the stored strings.

Once you've finished and you've refactored all your code feel free to run
`mocha` and look at all those passed specs! Pat yourself on the back for
starting your journey into TDD development.

[mocha]: https://mochajs.org/#bdd
[chai]: https://www.chaijs.com/api/bdd/
[chai-spies]: https://www.chaijs.com/plugins/chai-spies/
[rgr]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/testing/assets/rgr.png
[reciprocal]: https://www.mathopenref.com/reciprocal.html
[mocha-hooks]: https://mochajs.org/#hooks