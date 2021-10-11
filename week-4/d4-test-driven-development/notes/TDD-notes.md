Why do we test?

1. To make sure our code works

   - does it behave how we expect it to given certain inputs/outputs
   - when we put into certain situations

2. To increase flexibility and reduce fear

   - oftentimes we have to go back and refactor code
   - w/o tests you'd be walking on eggshells, frightened of breaking stuff
   - w/ tests you can refactor w/ confidence
   - if anything breaks, you'll know

3. Make collaboration easier
   - you have expectations for the module you're working on
   - specs are effective form of communication
   - as long as you meet the specs you should be good to go
4. Produce documentation
   - if well written, specs can be documentation for code base
   - not sure what a module does? look at specs

Testing Framework vs Assertion Library

- testing framework: Mocha
  - runs tests and presents them to a user
  - organize tests
- assertion library:
  - the code we use to write our tests
  - does heavy lifting of comparing and verifying our code
- some frameworks have built in assertion libraries, some you will need to require

Mocha

- testing framework: runs tests and presents them to user
- supports variety of assertion libraries
  - doesn't come with built in one
- has DSL that provides structure for writing tests
  - DSL: computer language specialized for particular purpose
  - i.e provides structure for written tests

What do we test?

- "think less about the code and more about the use cases the code supports"
- public interface of application
  - classes & methods
  - modules
  - functions

The Testing Pyramid

1. Unit Tests
   - smallest unit of testing
   - tests smallest pieces of app in isolation to ensure each piece works before you put those pieces together
   - should focus on testing one thing
   - will write the most of these
2. Integration Tests
   - after unit tests are in place, test the interaction of those pieces
   - ensure units work coherently together
3. End-to-End (E2E) Tests
   - test the whole of your application
   - closest automated tests come to testing actual user experience

Test Pyramid Chess Example

1. Unit test
   - test each class in isolation
   - ensure each piece's instance methods work before involving other pieces
2. Integration Test
   - ensure each piece instance interacts with Board class correctly
3. E2E Testing
   - testing a round of chess
   - test that Game, Piece, Board interact correctly

File structure

- mocha will look for `test` directory
- file structure should mirror files you want to test
  - add a `-spec` to file name

```
testing-demo
  └──
  problems
    └── reverse-string.js
  test
    └── reverse-string-spec.js
```

Common gotchas

- must export functions/classes you're testing
- must import function/classes into test file
- "blank is not a function" probably means you forgot to export/import

```js
// TESTING FOR EQUALITY

// strictEqual (assert), equal (chai)
// - checks for equality using '==='

// for primitive data types, both type and value must be the same
assert.strictEqual(1, "1"); // FAIL
assert.strictEqual(1, 1); // OK

// for objects, checks for referential equality
let input1 = [1, 2, 3];
let input2 = [1, 2, 3];
let input3 = input2;

expect(input1).to.equal(input2); // FAIL
expect(input2).to.equal(input3); // OK

// deepStrictEqual (assert), eql/deep.equal (chai)
// - checks if child objects are equal
// - primitive values compared using strict equality '==='

assert.deepStrictEqual({ a: 1 }, { a: "1" }); // FAIL
assert.deepStrictEqual({ a: 1 }, { a: 1 }); // OK

expect(input1).to.eql(input2); // OK
expect(input1).to.deep.equal(input2); // OK
```

TESTING FUNCTIONS WITH ASSERT

```js

// node's built in assertion library
const assert = require("assert");

// must import function you're testing
const countVowels = require("../problems/count-vowels.js");


// "describe" used to group tests, can be nested
describe("countVowels()", function() {

	// "context" is alias for describe
	// provides additional grouping for testing
  context("with a valid argument", () => {

		// "it" provides the test case
    it("should return a count of all the argument's vowels", function() {
      const result = countVowels("bootcamp");
			const answer = 3;

			// what must happen for test to pass
      assert.deepStrictEqual(result, answer);
    });

    it("should return a count of all the argument's lower and uppercase vowels", function() {
      const result1 = countVowels("BaNAnAnA");
      const answer1 = 4;

      const result2 = countVowels("EeIoUuZY");
      const answer2 = 6;

			// both assert statements must pass for spec to pass
      assert.deepStrictEqual(result1, answer1);
      assert.deepStrictEqual(result2, answer2);
    });
  });

```

TESTING CLASSES WITH CHAI

Chai

- assertion library commonly used with Mocha
- provides funcs/methods that help you compare output of test with expected val

```js
// assertion library commonly used with mocha
// must npm install
const chai = require("chai");

// one of chai's assertion styles
const expect = chai.expect;

// library that adds additional functionality to chai
// ability to determine if function has been called and how many times
const spies = require("chai-spies");

// must tell chai to use spies library
chai.use(spies);

// this is a relative path to the function location
const Elephant = require("../problems/elephant.js");

// way to group test, here we are testing Elephant class
describe("Elephant", function () {
  let dumbo;

  // runs before each test in a "describe" block
  // creates fresh instance of elephant class for each test
  // ensures result of one test doesn't affect testing of another
  beforeEach("set up an elephant instance", function () {
    dumbo = new Elephant("Dumbo");
  });

  // can nest describes for additional grouping
  describe("Elephant Constructor Function", function () {
    // provides test case
    it('should have a "name" property', () => {
      expect(dumbo).to.have.property("name");
    });

    it('should set the "name" property when a new elephant is created', () => {
      expect(dumbo.name).to.eql("Dumbo");
    });
  });

  // on prototype so must be instance method
  describe("prototype.sit()", function () {
    it("should return a string with the name of the elephant sitting", () => {
      expect(dumbo.sit()).to.eql("Dumbo the elephant sits down");
    });
  });

  // not on prototype so must be a static method
  describe("elephantStrike(elephants)", function () {
    it("should call the sit method on each passed in elephant", function () {
      // spy on the existing dumbo instance
      // allows us to if func was called and number of times
      // - first argument is object we want to spy on (instance of elephant)
      // - second arg is method we are replacing with our spy
      const dumboSitSpy = chai.spy.on(dumbo, "sit");

      const ruby = new Elephant("Ruby");
      const rubySitSpy = chai.spy.on(ruby, "sit");

      Elephant.elephantStrike([dumbo, ruby]);

      expect(rubySitSpy).to.have.been.called.once;
      expect(dumboSitSpy).to.have.been.called.once;
    });

    it("should return an array with each passed in elephant sitting", function () {
      const ruby = new Elephant("Ruby");
      let strike = Elephant.elephantStrike([dumbo, ruby]);
      let result = [
        "Dumbo the elephant sits down",
        "Ruby the elephant sits down",
      ];
      expect(strike).to.eql(result);
    });
  });
});
```

Setup

1. install mocha - testing framework
2. install chai - assertion library commonly used with chai
3. create test directory
   - files mirror files in problems directory
   - `test-spec.js`

AAA Pattern

- divide test into three sections
  1.  arrange: code required to setup specific test
  2.  act: invocation of method testing
  3.  assert: check whether expectations were met
