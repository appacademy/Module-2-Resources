# Practice: ES5 Classes

In this practice, you will use ES6 class syntax to define classes and
monkey-patch an existing class.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

Run `npm install` to install any dependencies.

## Phase 1: Refactor classes into ES5 class syntax

Take a look at the __classes/dog.js__ file. The test specs for the `Dog` class
in the __test/dog-spec.js__ file are already passing. Refactor the `Dog` class
to use ES5 class syntax instead. Test your code to make sure it still works
after the refactor by running the following command:

```shell
npm test test/dog-spec.js
```

Take a look at the __classes/person.js__ file. The test specs for the `Person`
class in the __test/person-spec.js__ file are already passing. Refactor the
`Person` class to use ES5 class syntax instead. Test your code to make sure it
still works after the refactor by running the following command:

```shell
npm test test/person-spec.js
```

## Phase 2: Monkey-patch the `Array` class

Finally, take a look at the __classes/array.js__ file. Monkey-patch the `Array`
class so that all the test specs in the __test/array-spec.js__ file pass. Run
the test specs with the following command:

```shell
npm test test/array-spec.js
```

<details><summary>Hint: </summary>The method you are adding to the
<code>Array</code> class tests if two arrays are deeply equal.</details>
