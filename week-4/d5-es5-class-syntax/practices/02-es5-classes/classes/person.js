const Dog = require('./dog');

//!!ADD
// class Person {
  // constructor(name, age, dogs = []) {
    // this.name = name;
    // this.age = age;
    // this.dogs = dogs;
  // }
//
  // addDog(dog) {
    // if (!(dog instanceof Dog)) {
      // throw new TypeError("Can only add dogs!");
    // }
    // this.dogs.push(dog);
  // }
//
  // walkDogs() {
    // this.dogs.forEach((dog) => {
      // console.log(`walking ${dog.name}`);
    // });
  // }
// }
//!!END_ADD
//!!START SILENT
function Person(name, age, dogs = []) {
  this.name = name;
  this.age = age;
  this.dogs = dogs;
}

Person.prototype.addDog = function (dog) {
  if (!(dog instanceof Dog)) {
    throw new TypeError("Can only add dogs!");
  }
  this.dogs.push(dog);
};

Person.prototype.walkDogs = function () {
  this.dogs.forEach((dog) => {
    console.log(`walking ${dog.name}`);
  });
};
//!!END

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Person;