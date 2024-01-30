/*

  Inheritance
  * mechanism that passes traits of a parent class to its descendants
  * prevents duplication of code
  * base a class (child class) upon another class (parent class)
  * child class will have access to properties and methods defined within parent
  * use extends keyword to extend Child class from Parent class
  * typically applied to classes

  Extend keyword
  * Tell javascript to extend the Car class
  * allows child to inherit properties + methods of parent

  Super keyword
  * calls parent classes constructor function with specified arguments
  * EX: calling `super(name, make, model)` assigns this.name, this.make, this.model to whatever Motorcycle instance calls it
  * Super imposing name, make model into the constructor
  * saves us from having to write this.name, this.make, this.model
  * Remember DRY - Do not repeat yourself
  * Must call super if there is constructor
  * Dont have to pass all properties
  * Super go up the chain to parent classes until there is no parent


  Polymorphism
  * Each object, class, or prototype can be assigned attributes and methods that extend the behavior of its ancestors.
  * A type of polymorphism is subtype polymorphism where a subclass uses inheritance and extends upon the functionality of a parent class.
  * For example, we can overwrite the parent car class

*/


const Car = require('./classes');

class Motorcycle extends Car {
  constructor(name, make, model, milage) {
    super(name, model, make);
    this.milage = milage;
    Motorcycle.numCars += 1;
  };

  // polymorphism overwrites parent method static variable
  static numCars = 0;
}


const Harley = new Motorcycle('Harley', 'harley davidson', 'sportster', 50);

// console.log(Harley);
// console.log(Motorcycle.numCars);
console.log(Harley.makeNoise())
