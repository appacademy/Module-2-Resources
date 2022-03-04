//!!ADD
// class Dog {
  // constructor(name, age) {
    // this.name = name;
    // this.age = age;
  // }
//
  // bark() {
    // console.log("Bark");
  // }
//
  // static diet() {
    // return "carnivore";
  // }
// }
//!!END_ADD
//!!START SILENT
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function () {
  console.log("Bark");
};

// Static method
Dog.diet = function () {
  return "carnivore";
};
//!!END

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Dog;