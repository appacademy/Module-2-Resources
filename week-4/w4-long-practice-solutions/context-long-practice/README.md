# Long Practice: Context

In this practice, you will practice debugging more context problems.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

Run `npm install` to install any dependencies.

## Phase 1: `Car`

Implement the following in the __problems/01-car-drive.js__ file.

1. Create a `Car` class.
2. A newly instantiated instance should have its `speed` property initialized to
   `0`.
3. Add an instance method called `drive(newSpeed)` that takes in a `newSpeed`
   and sets it to the instance's `speed` property. It should also return the
   present `speed` of the instance.

Test your implementation by running the test specs in the
__test/01-car-drive-spec.js__ file. Run the specs with the following command:

```shell
npm test test/01-car-drive-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
let car = new Car();
car.drive(0);     // => returns 0
console.log(car); // => { speed: 0 }

car.drive(10);    // => returns 10
console.log(car); // => { speed: 10 }

car.drive(50);    // => returns 50
console.log(car); // -> { speed: 50 }

car.drive(100);   // => returns 100
console.log(car); // -> { speed: 100 }
```

## Phase 2: `Calculator`

Implement the following in the __problems/02-calculator.js__ file.

1. Create a `Calculator` class.
2. A newly instantiated instance should have its `total` property initialized to
   `0`.
3. Add the following instance methods which should all return the reassigned
   `total` property of the instance:
   a. `add(num)` - add the `num` arg to the `total`
   b. `subtract(num)` - subtract the `num` arg from the `total`
   c. `divide(num)` - divide the `total` by the `num` arg
   d. `multiply(num)` - multiply the `total` by the `num` arg

Test your implementation by running the test specs in the
__test/02-calculator-spec.js__ file. Run the specs with the following command:

```shell
npm test test/02-calculator-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)         // => 30
```

## Phase 3: `Dog`

Implement the following in the __problems/03-make-dog.js__ file.

1. Create a `Dog` class.
2. The `constructor` function should take in a `name` argument and set the
   `name` property of a newly instantiated instance to the `name` argument.
3. Add a static method called `makeJet()` that will return a new instance of the
   `Dog` class with a `name` property of "Jet".
4. Add two instance methods:
   a. `changeName(newName)` - set the `name` to the `newName`
   b. `speak(word)` - returns `${name} says ${word}`

Test your implementation by running the test specs in the
__test/03-make-dog-spec.js__ file. Run the specs with the following command:

```shell
npm test test/03-make-dog-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
let dog1 = Dog.makeJet(); // returns an object

console.log(dog1.name);                 // Jet
console.log(dog1.speak("hello"));       // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name);                 // Freyja
console.log(dog1.speak("hello"));       // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name);                 // Jet
```

## Phase 4: `changeContext(func, obj)`

Implement the following in the __problems/04-change-context.js__ file.

Write a function named `changeContext(func, obj)` that will accept a
function `func` and an object `obj`. The `changeContext` function should return
the result of the function `func` invoked with the object `obj` as its context.

Test your implementation by running the test specs in the
__test/04-change-context-spec.js__ file. Run the specs with the following command:

```shell
npm test test/04-change-context-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Example:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen
```

## Phase 5: `bindToAnArg(func, arg)`

Implement the following in the __problems/05-bind-to-an-arg.js__ file.

Write a function named `bindToAnArg(func, arg)` that will accept a
function `func` and any argument `arg`. The `bindToAnArg` function should return
the passed-in function `func` modified to always be invoked with the passed-in
argument `arg`.

Test your implementation by running the test specs in the
__test/05-bind-to-an-arg-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/05-bind-to-an-arg-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
function add(num1, num2) {
  return num1 + num2;
}

const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);
console.log({
  twoPlusSix,     // => 8
  twoPlusSeven,   // => 9
  threePlusSeven, // => 10
  threePlusEight  // => 11
});
```

```js
function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = bindToAnArg(iSpy, "tree");
console.log(spyTree());        // => I spy a tree
console.log(spyTree("car"));   // => I spy a tree

let spyCar = bindToAnArg(iSpy, "car");
console.log(spyCar());         // => I spy a car
console.log(spyCar("potato")); // => I spy a car
```

## Phase 6: `FancyCalculator`

Implement the following in the __problems/06-fancy-calculator.js__ file.

1. Import the `Calculator` class.
2. Create a `FancyCalculator` class with the `Calculator` class as its parent
   class.
3. Add the following instance methods which should all return the reassigned
   `total` property of the instance:
   a. `setTotal(newTotal)` - sets the `total` to the `newTotal`
   b. `modulo(num)` - sets the `total` to the remainder of dividing by `num`
   c. `squared()` - multiplies the `total` by the `total`

Test your implementation by running the test specs in the
__test/06-fancy-calculator-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/06-fancy-calculator-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))       // => 10
```

## Phase 7: `allTheArgs(func, ...args)`

Implement the following in the __problems/07-all-the-args.js__ file.

Write a function named `allTheArgs(func, ...args)` that will accept a
function `func` and any number of arguments. The `allTheArgs` function
should return the passed-in function `func` modified to always be invoked with
the passed-in arguments `args`. See code block below for further details.

Test your implementation by running the test specs in the
__test/07-all-the-args-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/07-all-the-args-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

```js
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour);  // => 7
```

```js
const bow = (...names) => {
  return "You bowed to " + names.join(" and ");
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"
```

## Phase 8: `CallCenter`

Implement the following in the __problems/08-call-me-later.js__ file.

1. Create a `CallCenter` class.
2. The `constructor` function should take in a `name` argument and set the
   `name` property of a newly instantiated instance to the `name` argument.
3. Add two instance methods:
   a. `sayHello()` - prints `Hello this is ${name}`
   b. `callMeLater(delay)` - takes in a `delay` in milliseconds that will call
      the `sayHello()` method on the instance after the `delay`. The context
      of the `sayHello()` method when invoked needs to be the `CallCenter`
      instance that the method was called on.

**You CANNOT use `bind`, `call`, or `apply` for this phase!**

Test your implementation by running the test specs in the
__test/08-call-me-later-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/08-call-me-later-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Example 1:

```js
let judy = new CallCenter("Judy");
judy.sayHello();         // prints "Hello this is Judy"
judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"
```

Example 2:

```js
let melan = new CallCenter("Melan");
melan.sayHello();        // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"
```

## Phase 9: `callOnTarget(func, obj1, obj2)`

Implement the following in the __problems/09-call-on-target.js__ file.

Write a function named `callOnTarget(func, obj1, obj2)` that will accept a
function `func` and two objects, `obj1` and `obj2`. `callOnTarget` should return
the result of the function `func` invoked with `obj1` as its context and `obj2`
as the first argument.

Test your implementation by running the test specs in the
__test/09-call-on-target-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/09-call-on-target-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));
// "I'm Breakfast. Nice to meet you, Jerry"

console.log(callOnTarget(greet, mouse, cat));
// "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function(animal) {
    return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};

console.log(callOnTarget(dog.chase, cat, dog));
// "Woof, my name is Breakfast and I'm chasing Noodles"
```

## Phase 10: `PartyPlanner`

Implement the following in the __problems/10-party-planner.js__ file.

1. Create a `PartyPlanner` class.
2. A newly instantiated instance should have its `guestList` property
   initialized to an empty array.
3. Add two instance methods:
   a. `addToGuestList(name)` - add the `name` to the `guestList`
   b. `throwParty()` - return a different string depending on the length of the
      `guestList`:
      * If there are no guests, return "Gotta add people to the guest list"
      * If there are guests in the `guestList`, return the guests' names. For
        example, if there are two guests, return "Welcome to the party
        ${name1} and ${name2}".

Test your implementation by running the test specs in the
__test/10-party-planner-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/10-party-planner-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Example 1:

```js
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
```

Example 2:

```js
const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"
```

## Phase 11: `boundFuncTimer(obj, func, delay)`

Implement the following in the __problems/11-bind-set-timeout.js__ file.

Write a function named `boundFuncTimer(obj, func, delay)` that will accept am
object `obj`, a function `func`, and `delay` which is a number representing
milliseconds. The `boundFuncTimer` should invoke the function `func` with `obj`
as its context after a `delay`.

Test your implementation by running the test specs in the
__test/11-bind-set-timeout-spec.js__ file. Run the specs with the following
command:

```shell
npm test test/11-bind-set-time-out-spec.js
```

In addition to Mocha, you should test your code manually using Node.js. You can
use the examples below at the bottom of the file run the file in Node.js.

Examples:

```js
class Animal {
  constructor(age) {
    this.age = age;
  }

  growOlder() {
    this.age++;
    console.log(this.age);
  }
}

const dog = new Animal(1);
const cat = new Animal(5);

boundFuncTimer(dog, dog.growOlder, 5000); // in 5 seconds prints: 2
boundFuncTimer(cat, dog.growOlder, 7000); // in 7 seconds prints: 6
```
