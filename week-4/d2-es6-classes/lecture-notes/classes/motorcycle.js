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
    // ! inheritance
    // we inherit all methods and properties from the parent
    // super lets us follow dry; so we don't have to retype this.name, this.make, this.model

    // can add new properties just make sure to pass to constructor
    this.milage = milage;
    this.noise = 'braaaap';

    // ! polymorphism
    // overriding parent static variable
    Motorcycle.numCars += 1;
  };

  // ! polymorphism
  // polymorphism overwrites parent method static variable
  static numCars = 0;

  makeNoise() {
    return`Motorcycle goes ${this.noise}`
  }
}


const Harley = new Motorcycle('Harley', 'harley davidson', 'sportster', 50);

// console.log(Harley);
// console.log(Motorcycle.numCars);
console.log(Harley.makeNoise());
// currently prints Car goes braaaap
// because it calls the parent makeNoise method


/*


  Leave off constructor
  * the parent automatically


*/

class Truck extends Car{
  constructor(name, make, model, numWheels) {
    super(name, make, model)
    this.numWheels = numWheels;
  }
}

const F150 = new Truck('F150','ford', 'Raptor', 4);

// console.log(F150)
// Truck { name: 'F150', make: 'ford', model: 'Raptor', noise: 'vrooom' }


// function Car(name, make, model) {
//   this.make =make;
//   this.name = name;
//   this.model = model;

//   return function Truck() {
//     this.name = name;
//     this.make = make;
//     this.model = model;
//   }
// }
