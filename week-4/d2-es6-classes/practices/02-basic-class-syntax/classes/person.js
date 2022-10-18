// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
  }
  
  introduce() {
    // console.log(this)
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
    return this;
  }

  static introducePeople(people) {

    if (!Array.isArray(people)) {
      console.log( "introducePeople only takes an array as an argument.");
      return this;
    }

    for (let person of people) {
      if (!(person instanceof Person)) {
        return console.log('All items in array must be Person class instances.')
      }
    }

    people.forEach(person => person.introduce())
  }

}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
