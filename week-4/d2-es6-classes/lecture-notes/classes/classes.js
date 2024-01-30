/*

  Classes vs JavaScript Objects
  * In strictest terms, an object class is the definition of an object, and an object instance is a use of that object. Quite often developers loosely use the generic term "object" to refer to either or both. Or sometimes "object" means a data structure with key-value storage represented by curly-braces (a.k.a. POJO - Plain Old JavaScript Object).

  What is OOP?
  * Object-Oriented Programming (OOP) is an approach or mindset for breaking down large, complex products into simple solutions. The smaller parts can then be implemented and tested separately to provide higher confidence in the overall solution.
  * We will use OOP to design classes
  * Adjectives - The characteristics are called properties or attributes of the object.
  * Verbs- The actions are called methods of the object.

  Creating a Class!
  * JS uses OOP
  * OOP in JavaScript means defining your own object classes, so you can go way beyond the built-in ones like Object and Array!

  Defining are own JS Class
  * A class defines the attributes and behavior for an object type. Classes in JavaScript are defined using the class keyword, followed by the name of the class, and a set of curly braces.

  * Classes are used as a blueprint to create instances of the class

  EX:
  * Lets say we made a car class
  * Dodge would be instance of the car class
  * What adjectives could we use to describe a car?
    * color
    * make
    * model
    * type
    * milage
  * What verbs could we expect a car to have?
    * drive
    * park
    * honk horn
    * rev engine

  Constructor keyword
  * The `constructor` keyword indicates special "factory" method,
  * Used to help create instances of classes when passed arguments
  * constructor methods don't explicitly return a value. When instantiating class instances with the new keyword, constructor methods implicitly return the newly created object instance. (You'll see an example in a bit.)
  * Within a constructor method's body, the this keyword references the newly created object instance. This allows you to initialize properties on the object instance.

  This keyword
  * refers to current instance of a class

  Defining methods
    * verb on class - perform an action
    * methods are usually invoked in an instance of a class we would call that a instance method
    ex: const list = new Array(1,5,3,9,11,-3);
    console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
    console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]
  *.sort is a instance method on the array class
  let arr = [] is a short cut for let arr = new Array()

*/


class Car {
  constructor(name, make, model) {
    this.name = name;
    this.make = make;
    this.model = model;
    this.noise = 'vrooom'
    Car.numCars += 1;
  };

  // * instance method
  // * instance is called upon an instance of a class
  // * instances - Challenger
  getInfo() {
    return `I wish I had a ${this.name} ${this.make} ${this.model}`
  };

  makeNoise() {
    return`Car goes ${this.noise}`
  }

  // * static method
  // * static method is called upon the class itself
  // * Car
  /*
    * Static method - method used on the class itself across all instances of the class
    * As opposed to instance methods, static methods are invoked directly on a class, not on an instance. Hence, they are also referred to as class methods.
    * uses static keyword
    * you pass to a static method instances of a class as arguments
    * * static methods do not use the this keyword as its not an instance
    * static methods allow us to access groups of instances
    * no need for function keyword
  */
  static getCars(...cars) {
    return cars.map(car => car.name);
  };

  // * static variable
  static numCars = 0;
};

const Challenger = new Car('Challenger', 'Dodge', 'Hellcat');
// console.log(Challenger);// Car { name: 'Challenger', make: 'Dodge', model: 'Hellcat' }
const Mustang = new Car('Mustang', 'Ford', 'Shelby');

// console.log(Car.numCars);
// console.log(Mustang);// Car { name: 'Mustang', make: 'Ford', model: 'Shelby' }
// console.log(Challenger.getInfo());
// console.log(Mustang.getInfo());
// console.log(Mustang instanceof Car);// true

const carNames = Car.getCars(Challenger, Mustang);
// console.log(carNames);// [ 'Challenger', 'Mustang' ]

module.exports = Car;
/*
  New keyword
  * used to create instance of a class
  * properties are sent to the constructor to CONSTRUCT an instance of that class

  Three things occur when instantiating an instance of a class:
  * A new empty object is created (i.e. {})
  * The constructor method is called and this is bound to the new object
  * The new object is returned after the constructor method has completed
*/

// * We are creating an instance of the Car class
// * The new keyword is telling js we are creating a new instance of the car class
// * we pass properties the classes constructor to create an instance of the Car class
// * the instance is the Challenger THIS is challenger
