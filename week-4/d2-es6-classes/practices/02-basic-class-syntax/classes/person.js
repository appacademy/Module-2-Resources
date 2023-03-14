// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {
    // console.log({people})
    if (!Array.isArray(people)) {
      console.log("introducePeople only takes an array as an argument.")
      return;
      // throw new Error("introducePeople only takes an array as an argument.")
    }

    for (let person of people) {
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances.")
        return;
      }
    }


    people.forEach(person => person.introduce());
  }
}

// const kristen = new Person("kristen", "chauncey", 38);
// const shane = new Person('shane', 'wilkey', 41);
// kristen.introduce();
// shane.introduce();


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
