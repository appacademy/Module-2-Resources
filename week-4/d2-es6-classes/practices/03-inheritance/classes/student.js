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
    } else if (stood1.GPA < stood2.GPA) {
      return `${stood2.firstName} ${stood2.lastName} has the higher GPA.`
    } else {
      return "Both students have the same GPA."
    }
  }
};

// const student = new Student('shane', 'wilkey', 'software engineering', 3.5);
// console.log(student)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
