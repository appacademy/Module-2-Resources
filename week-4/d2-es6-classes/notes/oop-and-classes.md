#What is OOP

- approach for breaking down large, complex products into siimple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code

The Big Picture

- group data and related actions / behaviors together
- treat as single entity within a larger system

Encapsulation

- the practice of bundling related properties and behaviors into
  one class
- each class has a purpose and is responsible for keeping track of
  properties related to that purpose and providing the methods
  necessary to manage those properties

Inheritance

- mechanism that passes traits of a parent class to its descendants
- prevents duplication of code

Polymorphism

- provides a way to perform a single action in different forms by
  calling the same method on different objects

- OVERRIDING VS OVERLOADING:
  overriding refers to the fact that you can create instance methods with the same name in child classes and the last defined method (the method defined in the child class) will be the one executed
  overloading refers to defining an instance method in a child class with the same name, but that takes in different variables. Javascript does NOT support overloading, but does support overriding.\



Abstraction

- implemented to hide unnecessary data and withdraw relevant data

#Inheritance

- base a class (child class) upon another class (parent class)
- child class will have access to properties and methods defined within parent
- use `extends` keyword to extend Child class from Parent class
- typically applied to classes

Using super

- calls parent classes constructor function with specified arguments
- calling `super(name, age)` assigns `this.name` and `this.age` prop to dog instance

```js
// INHERITANCE

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`hi my name is ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.tricks = [];
  }

  bark() {
    console.log("bark bark bark");
  }
}

let badger = new Dog("badger", .25);
badger.speak();
```

Leaving off constructor

- if there aren't any additional attributes, can leave off constructor func
- automatically runs parents constructor function

```js
// LEAVING OFF CONSTRUCTOR FUNCTION

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`hi my name is ${this.name}`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("bark bark bark");
  }
}

let badger = new Dog("badger", .25);
badger.speak();
```

Overriding and adding onto inherited methods

- without `super` => overwrites
- calling `super.method(args)` is essentially copying code from parent method into the specified location

```js
// TODO : OVERRIDE SPEAK METHOD TO ALSO PRINT "bark bark bark

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.tricks = [];
  }

  speak() {
    console.log("bark bark bark");
    super.speak(); // console.log(`hi my name is ${this.name}`);
  }
}

let badger = new Dog("badger", .25);
badger.speak();
```

THIS

- always references the instance object (obj created with new keyword)
