const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(stood1, stood2) {
    if (stood1.GPA > stood2.GPA) {
      return `${stood1.firstName} ${stood1.lastName} has the higher GPA.`
    } else if (stood2.GPA > stood1.GPA) {
      return `${stood2.firstName} ${stood2.lastName} has the higher GPA.`
    } else {
      return "Both students have the same GPA."
    }
  }
  
}

// const student1 = new Student("billy", "johnson", "software-development", 3.2);
// console.log(student1.getAge())
// console.log(student1.setAge(24))
// console.log(student1.getAge())
// console.log(student1)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
